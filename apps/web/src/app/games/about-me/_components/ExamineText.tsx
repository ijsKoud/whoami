import { cva } from "class-variance-authority";
import React from "react";

import TypeWriter from "@/components/typewriter";
import { cn } from "@/lib/utils";

import { UseGameController } from "./GameController";

const textStyles = cva("font-mono min-h-[24px]", {
	variants: {
		text: {
			narrator: "italic",
			self: "text-white",
			character: "text-yellow-300"
		}
	}
});

const ExamineText = () => {
	const { result } = UseGameController();

	return result.examine ? (
		<TypeWriter className={cn(textStyles({ text: result.examine.speaker }))} text={result.examine.text} />
	) : (
		<div className="h-6"></div>
	);
};

export default ExamineText;
