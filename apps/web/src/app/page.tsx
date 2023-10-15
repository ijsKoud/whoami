import type React from "react";
import IntroductionSection from "./_components/IntroductionSection";
import AboutMeSection from "./_components/AboutMeSection";
import ProjectsSection from "./_components/ProjectsSection";
import ContactSection from "./_components/ContactSection";

const Page: React.FC = () => {
	return (
		<div className="space-y-56">
			<IntroductionSection />
			<AboutMeSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	);
};

export default Page;
