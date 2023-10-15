import type React from "react";
import IntroductionSection from "./_components/IntroductionSection";
import AboutMeSection from "./_components/AboutMeSection";

const Page: React.FC = () => {
	return (
		<div className="h-screen space-y-56">
			<IntroductionSection />
			<AboutMeSection />
		</div>
	);
};

export default Page;
