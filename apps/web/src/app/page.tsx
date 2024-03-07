import React from "react";

import AboutMeSection from "./_components/AboutMeSection";
import ContactSection from "./_components/ContactSection";
import IntroductionSection from "./_components/IntroductionSection";
import ProjectsSection from "./_components/ProjectsSection";

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
