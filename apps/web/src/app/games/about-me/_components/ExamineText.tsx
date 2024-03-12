import { cn } from "@whoami/utils";
import { cva } from "class-variance-authority";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import type { FC } from "react";
import React, { useEffect } from "react";

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
		<TypingText className={cn(textStyles({ text: result.examine.speaker }))} text={result.examine.text} />
	) : (
		<div className="h-6"></div>
	);
};

const TypingText: FC<{ text: string; className?: string }> = ({ text, className }) => {
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));
	const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

	useEffect(() => {
		count.set(0);
		rounded.set(0);
		displayText.set("");

		// useEffect hook should only trigger when text changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [text]);

	useEffect(() => {
		const controls = animate(count, text.length, {
			type: "tween",
			duration: 0.05 * text.length,
			ease: "easeInOut"
		});
		return controls.stop;
	}, [text, count]);

	return <motion.p className={className}>{displayText}</motion.p>;
};

export default ExamineText;
