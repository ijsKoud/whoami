import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";
import React from "react";

import Markdown from "@/components/markdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const prisma = new PrismaClient();

const Messages: React.FC = async () => {
	const messages = await prisma.message.findMany({ orderBy: { date: "desc" } });

	return (
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
	);
};

export default Messages;
