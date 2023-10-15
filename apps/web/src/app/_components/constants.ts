export const LANDING_TEXT = {
	title: "Hey my name is",
	name: "Daan Klarenbeek",
	subtitle: "**Full-stack** developer building apps for the internet."
} as const;

export const LANDING_BULLET_POINTS = [
	{
		text: "Fan of `open-source` projects.",
		emoji: "🚀"
	},
	{
		text: "Specializing in `web-based` applications.",
		emoji: "💻"
	}
] as const;

export const ABOUT_ME_TEXT =
	"Hey, I am Daan. A 17 year-old full-stack developer & anime lover from the Netherlands. Who knew that writing half-working chat bots by following a simple tutorial in 2020 would bring me here. I guess that that one tutorial decided my whole life.\n\nAnyway, fast-forward to today; I love programming and work on a series of projects, [maybe yours too](/#contact). I love open-source, hence why this website and many other projects are open to the public!\n\nI am still young which means plenty of time to grow and improve, below you can find a list of languages, tools and software which I use at a daily basis." as const;

// FOR A LIST OF VALID ICONS: https://github.com/tandpfun/skill-icons#icons-list
export const EXPERIENCE_ICONS = ["js", "ts", "react", "nextjs", "prisma", "docker", "github", "linux", "vercel"] as const;

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
