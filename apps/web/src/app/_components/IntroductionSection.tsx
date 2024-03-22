import Link from "next/link";
import React from "react";
import { parse } from "twemoji-parser";

import { SlideFade } from "@/components/animations/slide-fade";
import Markdown from "@/components/markdown";
import { Button } from "@/components/ui/button";
import AnimatedArrowIcon from "@/components/ui/icons/animated-arrow";

import { LANDING_BULLET_POINTS, LANDING_TEXT } from "./constants";

const IntroductionSection: React.FC = () => {
	return (
		<section className="h-[calc(80vh)] flex flex-col items-center justify-center">
			<div>
				<div>
					<SlideFade>
						<h2 className="text-blue-400 font-normal text-11 leading-none w-fit max-lg:text-9 max-sm:text-7 max-[400px]:text-6 uppercase">
							{LANDING_TEXT.title}
						</h2>
					</SlideFade>
					<SlideFade delay={0.1}>
						<Link href="/games/about-me">
							<h1 className="text-23 leading-[80%] w-fit max-lg:text-19 max-sm:text-13 max-[400px]:text-9 font-extrabold uppercase outline outline-transparent transition-all hocus:outline-blue-500">
								{LANDING_TEXT.name}
							</h1>
						</Link>
					</SlideFade>
				</div>

				<SlideFade delay={0.2}>
					<Markdown className="dark:text-zinc-400 text-zinc-500 text-11 font-medium leading-[95%] pt-4 w-3/4 max-lg:text-9 max-md:w-full max-sm:text-7 max-[400px]:text-5 mb-10">
						{LANDING_TEXT.subtitle}
					</Markdown>
				</SlideFade>

				<ul className="space-y-4">
					{LANDING_BULLET_POINTS.map((points, key) => (
						<li key={key}>
							<SlideFade delay={0.3 + key * 0.1} className="flex items-center gap-4">
								<img className="h-9 max-lg:h-7 max-md:h-5" alt={points.emoji} src={parse(points.emoji)[0].url} />
								<Markdown className="text-9 dark:text-zinc-400 text-zinc-500 max-lg:text-7 max-sm:text-5 max-[400px]:text-4 leading-[95%]">
									{points.text}
								</Markdown>
							</SlideFade>
						</li>
					))}
				</ul>

				<SlideFade delay={0.5} className="mt-8 flex items-center gap-4">
					<Button variant="blue" className="group text-5 rounded-full" asChild>
						<Link href="/#about">
							About Myself <AnimatedArrowIcon size={14} />
						</Link>
					</Button>

					<Button variant="secondary" className="text-5 rounded-full" size="lg" asChild>
						<Link href="/guestbook">Guestbook</Link>
					</Button>
				</SlideFade>
			</div>
		</section>
	);
};

export default IntroductionSection;
