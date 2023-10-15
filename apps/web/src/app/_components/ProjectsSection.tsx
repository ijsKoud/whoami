import React from "react";
import { PROJECTS_LIST } from "./constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@whoami/ui/button";
import { SlideFade } from "@/components/animations/SlideFade";

const ProjectsSection: React.FC = () => {
	return (
		<section>
			<h1 id="projects" className="text-16 font-semibold leading-[80%] w-fit max-lg:text-14 max-sm:text-12 max-[400px]:text-10 mb-8">
				Featured Projects
			</h1>
			<div className="grid place-content-center gap-y-12 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-8">
				{PROJECTS_LIST.map((project, key) => (
					<SlideFade useInView key={key} className="group/card">
						<Image
							className="rounded-lg group-hover/card:scale-[.99] group-hover/card:opacity-80 transition-all duration-500"
							src={project.image}
							alt={project.name}
							width={496}
							height={496}
						/>
						<div className="pt-2">
							<div className="flex items-center justify-between">
								<span className="font-semibold text-5 group-hover/card:text-blue-400 transition-colors">{project.name}</span>
								<div className="flex items-center gap-1">
									{project.urls.map((url, key) => (
										<Button key={key} asChild variant="ghost" size="icon">
											<Link href={url.url}>
												<span className="sr-only">{url.alt}</span>
												{url.icon}
											</Link>
										</Button>
									))}
								</div>
							</div>
							<p className="text-muted-foreground">{project.description}</p>
						</div>
					</SlideFade>
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
