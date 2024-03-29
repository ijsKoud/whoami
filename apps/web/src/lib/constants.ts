export const NAVIGATION_LINKS = [
	{
		name: "About",
		href: "/#about"
	},
	{
		name: "Projects",
		href: "/#projects"
	},
	{
		name: "Contact",
		href: "/#contact"
	}
];

export const TRANSITION_EASINGS = {
	ease: [0.25, 0.1, 0.25, 1],
	easeIn: [0.4, 0, 1, 1],
	easeOut: [0, 0, 0.2, 1],
	easeInOut: [0.4, 0, 0.2, 1]
} as const;
