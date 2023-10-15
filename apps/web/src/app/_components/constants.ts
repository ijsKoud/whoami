// CHANGE THE 2006,2,12 to your own date (format: YYYY, MM, DD)
const AGE = new Date(Date.now() - new Date(2006, 2, 12).getTime()).getUTCFullYear() - 1970;

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
	`I'm a **${AGE} year-old** full stack developer who's been immersed in the world of coding since 2020. Being mostly self-taught, my passion for open-source projects runs deep. I'm always enthusiastic about learning new technologies and techniques, constantly seeking to broaden my skill set.\n\n📺 In my free time you might catch me game once in a while but more often I watch tech related content.\n\n🎓 currently studying at **AUAS** (Amsterdam University of Applied Sciences) to become a **software engineer**.` as const;

// FOR A LIST OF VALID ICONS: https://github.com/tandpfun/skill-icons#icons-list
export const EXPERIENCE_ICONS = ["js", "ts", "react", "nextjs", "tailwind", "prisma", "docker", "github", "linux", "vercel"] as const;

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
