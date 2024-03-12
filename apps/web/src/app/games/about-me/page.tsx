"use client";

import React from "react";

import ActionRow from "./_components/ActionRow";
import ExamineText from "./_components/ExamineText";
import { GameControllerProvider } from "./_components/GameController";
import GameImage from "./_components/GameImage";
import ObjectRow from "./_components/ObjectRow";

const Page: React.FC = () => {
	return (
		<GameControllerProvider>
			<div className="space-y-4">
				<div className="h-96 w-full">
					<GameImage />
				</div>

				<div>
					<ExamineText />
				</div>

				<div className="w-full rounded-md py-4 px-8 bg-zinc-800 space-y-2">
					<ActionRow />
					<ObjectRow />
				</div>
			</div>
		</GameControllerProvider>
	);
};

export default Page;
