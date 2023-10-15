import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { Avatar, AvatarFallback } from "@whoami/ui/avatar";
import { Button } from "@whoami/ui/button";
import { LogInIcon } from "lucide-react";
import React from "react";

const LoggedOut: React.FC = () => {
	return (
		<div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-y-2">
			<div className="flex items-center gap-4">
				<Avatar className="h-10 w-10">
					<AvatarFallback />
				</Avatar>

				<div className="flex flex-col">
					<span>Not logged in</span>
				</div>
			</div>

			<Button asChild>
				<LoginLink>
					<LogInIcon className="mr-2 h-4 w-4" /> Login
				</LoginLink>
			</Button>
		</div>
	);
};

export default LoggedOut;
