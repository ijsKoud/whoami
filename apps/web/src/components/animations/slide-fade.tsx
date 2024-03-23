"use client";

import { useIntersectionObserver } from "@uidotdev/usehooks";
import { type HTMLMotionProps, motion, type MotionProps, useAnimation, type Variants } from "framer-motion";
import React, { useEffect } from "react";

import { TRANSITION_EASINGS } from "@/lib/constants";

export interface BaseSlideFadeProps {
	delay?: number;
	duration?: number;
	useInView?: boolean;
}

type SlideFadeProps = BaseSlideFadeProps & Omit<HTMLMotionProps<"div">, keyof MotionProps>;

export const SlideFade: React.FC<React.PropsWithChildren<SlideFadeProps>> = ({ children, ...props }) => {
	const { delay = 0, duration = 0.5, useInView: UseInViewBool = false, ...divProps } = props;
	const [inViewRef, isInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });

	const animate = useAnimation();
	const variants: Variants = {
		initial: {
			opacity: 0,
			transform: "translateY(8px)"
		},
		animate: {
			opacity: 1,
			transform: "translateY(0px)"
		}
	};

	useEffect(() => {
		if (UseInViewBool) {
			if (isInView?.isIntersecting) void animate.start("animate");
		} else void animate.start("animate");
	}, [animate, isInView, UseInViewBool]);

	return (
		<motion.div
			{...divProps}
			ref={inViewRef}
			variants={variants}
			animate={animate}
			initial="initial"
			transition={{ delay, duration, ease: TRANSITION_EASINGS.easeOut }}
		>
			{children}
		</motion.div>
	);
};
