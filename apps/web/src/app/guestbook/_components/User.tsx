import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogOutIcon } from "lucide-react";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const User: React.FC = async () => {
	const session = getKindeServerSession();
	const user = (await session.getUser())!;

	return (
		<div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-y-2">
			<div className="flex items-center gap-4">
				<Avatar className="h-10 w-10">
					<AvatarImage src={user.picture ?? ""} />
					<AvatarFallback>{user.given_name?.split("")[0] ?? ""}</AvatarFallback>
				</Avatar>

				<div className="flex flex-col">
					<span className="text-4 leading-none">
						{user.given_name} {user.family_name}
					</span>
					<span className="text-muted-foreground">{user.email}</span>
				</div>
			</div>

			<Button asChild>
				<LogoutLink>
					<LogOutIcon className="mr-2 h-4 w-4" /> Logout
				</LogoutLink>
			</Button>
		</div>
	);
};

export default User;
