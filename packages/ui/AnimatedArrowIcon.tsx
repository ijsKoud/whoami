import React from "react";

export interface ArrowProps {
	/** The size of the arrow */
	size: number;
}

const AnimatedArrowIcon = React.forwardRef<SVGSVGElement, ArrowProps>(({ size }, ref) => {
	return (
		<svg
			ref={ref}
			className="ml-2 -mr-1 stroke-2 dark:stroke-white stroke-black"
			fill="none"
			width={size}
			height={size}
			viewBox="0 0 10 10"
			aria-hidden="true"
		>
			<path className="transition-opacity opacity-0 group-hover:opacity-100" d="M0 5h8" />
			<path className="transition-transform group-hover:translate-x-1" d="M1 1l4 4-4 4" />
		</svg>
	);
});

export default AnimatedArrowIcon;
