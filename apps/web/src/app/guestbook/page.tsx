import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import type React from "react";
import User from "./_components/User";
import LoggedOut from "./_components/LoggedOut";
import InputForm from "./_components/InputForm";
import { Metadata } from "next";
import { Suspense } from "react";
import Messages from "./_components/Messages";
import Loading from "./_components/Loading";

export const metadata: Metadata = {
	title: "Guestbook"
};

const Page: React.FC = async () => {
	const session = getKindeServerSession();

	return (
		<div>
			<h1 className="text-16 font-semibold w-fit max-lg:text-14 max-sm:text-12 max-[400px]:text-10">Guestbook</h1>
			{(await session.isAuthenticated()) ? <User /> : <LoggedOut />}

			<InputForm disabled={!session.isAuthenticated()} />

			<Suspense fallback={<Loading />}>
				<Messages />
			</Suspense>
		</div>
	);
};

export default Page;
