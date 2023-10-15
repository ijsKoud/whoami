import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import type React from "react";
import User from "./_components/User";
import LoggedOut from "./_components/LoggedOut";
import { PrismaClient } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "@whoami/ui/avatar";
import { format } from "date-fns";
import Markdown from "@whoami/markdown";
import InputForm from "./_components/InputForm";
import { Metadata } from "next";

const prisma = new PrismaClient();

export const metadata: Metadata = {
	title: "Guestbook"
};

const Page: React.FC = async () => {
	const session = getKindeServerSession();
	const messages = await prisma.message.findMany({ orderBy: { date: "desc" } });

	return (
		<div className="">
			<h1 className="text-16 font-semibold w-fit max-lg:text-14 max-sm:text-12 max-[400px]:text-10">Guestbook</h1>
			{session.isAuthenticated() ? <User /> : <LoggedOut />}

			<InputForm disabled={!session.isAuthenticated()} />

			<div className="flex flex-col gap-10 mt-8">
				{messages.map((message) => (
					<div key={message.messageId} className="flex flex-col gap-y-4">
						<div className="flex items-center gap-4">
							<Avatar className="h-10 w-10">
								<AvatarImage src={message.picture ?? ""} />
								<AvatarFallback>{message.name.split("")[0]}</AvatarFallback>
							</Avatar>

							<div className="flex flex-col">
								<span className="text-4 leading-none">{message.name}</span>
								<time dateTime={message.date.toISOString()} className="text-muted-foreground">
									{format(message.date, "LLLL d, yyyy 'at' hh:mm:ss aa")}
								</time>
							</div>
						</div>

						<Markdown components={{ a: ({ children }) => <span>{children}</span> }}>{message.content}</Markdown>
					</div>
				))}
			</div>
		</div>
	);
};

export default Page;
