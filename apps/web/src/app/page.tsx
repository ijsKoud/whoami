import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Paperplane",
	description: "An open-source customisable solution to storing files in the cloud. ✈️"
};

const Page: React.FC = () => {
	return <div className="h-screen w-screen">HELLO</div>;
};

export default Page;
