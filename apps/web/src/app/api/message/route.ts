import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PrismaClient } from "@prisma/client";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z, ZodError } from "zod";

const prisma = new PrismaClient();
const schema = z.object({
	message: z.string({ required_error: "A message is required" }).max(1024, "A message cannot be longer than 1024 characters.")
});

export async function POST(request: NextRequest) {
	const { getUser, isAuthenticated } = getKindeServerSession();
	if (!isAuthenticated()) {
		return new Response("Unauthorized", { status: 401 });
	}

	try {
		const user = await getUser();
		const json = await request.json();
		const { message } = schema.parse(json);

		if (!user) return NextResponse.json({ message: "Unauthorized, please login." }, { status: 401 });

		await prisma.message.create({
			data: { content: message, name: `${user.given_name} ${user.family_name}`, userId: user.id!, picture: user.picture }
		});
	} catch (error) {
		console.error(error);

		if (error instanceof ZodError) {
			const { message } = error.errors[0];
			return NextResponse.json({ message }, { status: 400 });
		}

		return NextResponse.json({ message: "Unkown server error, please try again later." }, { status: 500 });
	}

	return NextResponse.json({ status: 200 });
}
