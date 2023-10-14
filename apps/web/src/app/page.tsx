import type React from "react";
import { SlideFade } from "@/components/animations/SlideFade";
import { Button } from "@whoami/ui/button";
import AnimatedArrowIcon from "@whoami/ui/AnimatedArrowIcon";
import Link from "next/link";

const Page: React.FC = () => {
	return (
		<div className="h-screen">
			<section className="h-[calc(80vh)] flex flex-col items-center justify-center">
				<div>
					<div>
						<SlideFade>
							<h2 className="text-blue-400 font-normal text-11 leading-none w-fit max-lg:text-9 max-sm:text-7 max-[400px]:text-6">
								HEY MY NAME IS
							</h2>
						</SlideFade>
						<SlideFade delay={0.1}>
							<h1 className="text-23 leading-[80%] w-fit max-lg:text-19 max-sm:text-13 max-[400px]:text-9 font-extrabold">
								DAAN KLARENBEEK
							</h1>
						</SlideFade>
					</div>

					<SlideFade delay={0.2}>
						<p className="dark:text-zinc-400 text-zinc-500 text-11 font-medium leading-[95%] pt-4 w-3/4 max-lg:text-9 max-md:w-full max-sm:text-7 max-[400px]:text-5 mb-10">
							<strong className="dark:text-white text-black">Full-stack</strong> developer building apps for the internet.
						</p>
					</SlideFade>

					<ul className="space-y-4">
						<li>
							<SlideFade delay={0.3} className="flex items-center gap-4">
								<img className="h-9 max-lg:h-7 max-md:h-5" alt="🚀" src="https://twemoji.maxcdn.com/v/latest/svg/1f680.svg" />
								<p className="text-9 dark:text-zinc-400 text-zinc-500 max-lg:text-7 max-sm:text-5 max-[400px]:text-3 leading-[95%]">
									Fan of <span className="text-blue-400">open-source</span> projects.
								</p>
							</SlideFade>
						</li>

						<li>
							<SlideFade delay={0.4} className="flex items-center gap-4">
								<img className="h-9 max-lg:h-7 max-md:h-5" alt="💻" src="https://twemoji.maxcdn.com/v/latest/svg/1f4bb.svg" />
								<p className="text-9 dark:text-zinc-400 text-zinc-500 max-lg:text-7 max-sm:text-5 max-[400px]:text-3 leading-[95%]">
									Specializing in <span className="text-blue-400">web-based</span> applications.
								</p>
							</SlideFade>
						</li>
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
		</div>
	);
};

export default Page;
