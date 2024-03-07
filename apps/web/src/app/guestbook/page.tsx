import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import type { Metadata } from "next";
import React, { Suspense } from "react";

import InputForm from "./_components/InputForm";
import Loading from "./_components/Loading";
import LoggedOut from "./_components/LoggedOut";
import Messages from "./_components/Messages";
import User from "./_components/User";

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
