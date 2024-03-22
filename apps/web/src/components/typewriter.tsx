import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { type FC, useEffect } from "react";

const TypeWriter: FC<{ text: string; className?: string }> = ({ text, className }) => {
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));
	const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

	/**
	 * Resets the typewriter animation
	 */
	function reset() {
		count.set(0);
		rounded.set(0);
		displayText.set("");
	}

	useEffect(
		reset,
		// useEffect hook should only trigger when text changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[text]
	);

	useEffect(() => {
		const controls = animate(count, text.length, {
			type: "tween",
			duration: 0.05 * text.length,
			ease: "easeInOut"
		});

		/**
		 * Skips the typewriter animation when the Space bar is pressed
		 * @param ev The keyboard event
		 * @returns
		 */
		function fastForward(ev: KeyboardEvent) {
			if (ev.key !== " ") return;
			controls.stop();
			count.set(text.length);
		}

		window.addEventListener("keydown", fastForward);

		return () => {
			controls.stop();
			window.removeEventListener("keydown", fastForward);
		};
	}, [text, count]);

	return <motion.p className={className}>{displayText}</motion.p>;
};

export default TypeWriter;
