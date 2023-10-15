import { ArrowUpRightIcon, BotIcon, GithubIcon } from "lucide-react";

// CHANGE THE 2006,2,12 to your own date (format: YYYY, MM, DD)
const AGE = new Date(Date.now() - new Date(2006, 2, 12).getTime()).getUTCFullYear() - 1970;

export const LANDING_TEXT: Record<"title" | "name" | "subtitle", string> = {
	title: "Hey my name is",
	name: "Daan Klarenbeek",
	subtitle: "**Full-stack** developer building apps for the internet."
};

export const LANDING_BULLET_POINTS: Array<Record<"text" | "emoji", string>> = [
	{
		text: "Fan of `open-source` projects.",
		emoji: "🚀"
	},
	{
		text: "Specializing in `web-based` applications.",
		emoji: "💻"
	}
];

export const ABOUT_ME_TEXT: string = [
	`I'm a **${AGE} year-old** full stack developer who's been immersed in the world of coding since 2020. Being mostly self-taught, my passion for open-source projects runs deep. I'm always enthusiastic about learning new technologies and techniques, constantly seeking to broaden my skill set.`,
	"📺 In my free time you might catch me game once in a while but more often I watch tech related content.",
	"🎓 currently studying at **AUAS** (Amsterdam University of Applied Sciences) to become a **software engineer**."
].join("\n\n");

// FOR A LIST OF VALID ICONS: https://github.com/tandpfun/skill-icons#icons-list
export const EXPERIENCE_ICONS: string[] = ["js", "ts", "react", "nextjs", "tailwind", "prisma", "docker", "github", "linux", "vercel"];

export const PROJECTS_LIST: {
	image: string;
	name: string;
	description: string;
	urls: {
		url: string;
		icon: JSX.Element;
		alt: string;
	}[];
}[] = [
	{
		image: "http://cdn.ijskoud.dev/files/MdnQoXVcaF2I.png",
		name: "PaperPlane",
		description: "An open-source customisable solution to storing files in the cloud. ✈️",
		urls: [
			{
				url: "/github/paperplane",
				icon: <GithubIcon />,
				alt: "GitHub"
			}
		]
	},
	{
		image: "http://cdn.ijskoud.dev/files/Gx77juph12Jw.png",
		name: "SCR Creator Hub",
		description: "Provider of stock footage and images for Stepford County Railway content creators.",
		urls: [
			{
				url: "https://scrcreate.app/",
				icon: <ArrowUpRightIcon />,
				alt: "Website"
			}
		]
	},
	{
		image: "http://cdn.ijskoud.dev/files/tRt86x36uiuC.png",
		name: "whoami",
		description: "My next generation portfolio built with NextJS, TRPC, NextAuth and Prisma.",
		urls: [
			{
				url: "/github/website",
				icon: <GithubIcon />,
				alt: "GitHub"
			},
			{
				url: "https://ijskoud.dev/",
				icon: <ArrowUpRightIcon />,
				alt: "Website"
			}
		]
	},
	{
		image: "https://cdn.ijskoud.dev/files/ncmmvNjiX5DU.png",
		name: "ijsblokje",
		description: "Co-pilot for GitHub operations ✈️",
		urls: [
			{
				url: "/github/ijsblokje",
				icon: <GithubIcon />,
				alt: "GitHub"
			}
		]
	},
	{
		image: "https://cdn.ijskoud.dev/files/vqAEI3xROdjw.png",
		name: "GitCord",
		description: "A Discord bot which makes your GitHub Discord embeds prettier ✨",
		urls: [
			{
				url: "/github/gitcord",
				icon: <GithubIcon />,
				alt: "GitHub"
			},
			{
				url: "http://cdn.ijskoud.dev/r/gitcord-invite",
				icon: <BotIcon />,
				alt: "Discord add bot"
			}
		]
	}
];

export const CONTACT_FORM_FIELDS = [
	{
		name: "Name",
		id: "name",
		placeholder: "John Doe",
		value: "",
		type: "input"
	},
	{
		name: "Email",
		id: "email",
		placeholder: "hello@domain.example",
		value: "",
		type: "input"
	},
	{
		name: "Message",
		id: "message",
		placeholder: "Hello Daan, I saw your work and...",
		value: "",
		type: "textarea"
	}
] as const;
