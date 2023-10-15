import { SlideFade } from "@/components/animations/SlideFade";
import React from "react";
import Markdown from "@whoami/markdown";
import { ABOUT_ME_TEXT, EXPERIENCE_ICONS } from "./constants";

const AboutMeSection: React.FC = () => {
	return (
		<section className="h-[calc(80vh)] flex flex-col items-center justify-center">
			<div>
				<div className="flex flex-col gap-y-4 relative">
					<SlideFade useInView>
						<h1 id="about" className="text-16 font-semibold leading-[80%] w-fit max-lg:text-14 max-sm:text-12 max-[400px]:text-10">
							About Me
						</h1>
					</SlideFade>
					<SlideFade useInView delay={0.2} className="flex justify-between max-lg:flex-col max-lg:mb-8">
						<div className="text-5 w-3/5 flex flex-col gap-y-4 max-lg:w-full">
							<Markdown>{ABOUT_ME_TEXT}</Markdown>
						</div>
						<img
							alt="Profile picture"
							src="/profile.png"
							className="-translate-y-10 w-64 h-[332px] max-lg:translate-y-0 overflow-hidden"
						/>
					</SlideFade>
					<SlideFade useInView className="flex flex-wrap items-center gap-2">
						{EXPERIENCE_ICONS.map((icon) => (
							<img className="h-12" src={`https://skillicons.dev/icons?i=${icon}`} alt={`Icon: ${icon}`} key={`Icon: ${icon}`} />
						))}
					</SlideFade>
				</div>
			</div>
		</section>
	);
};

export default AboutMeSection;
