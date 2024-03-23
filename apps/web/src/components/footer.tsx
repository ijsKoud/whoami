import { Code2Icon, GitForkIcon, HeartIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import type { GitHubRepoData } from "@/lib/types";

const GitHubStats: React.FC = async () => {
	const response = await fetch("https://api.github.com/repos/ijsKoud/website", { next: { revalidate: 36e3 } }); // revalidate every hour
	const data = (await response.json()) as GitHubRepoData;

	return (
		<Link href="https://ijskoud.dev/github/website" target="_blank" className="flex gap-4 hover:text-primary transition-colors">
			<p className="text-4 flex items-center">
				<GitForkIcon className="mr-2 h-4 w-4" /> {data.forks_count ?? 0}
			</p>
			<p className="text-4 flex items-center">
				<StarIcon className="mr-2 h-4 w-4" /> {data.stargazers_count ?? 0}
			</p>
		</Link>
	);
};

const Footer: React.FC = () => {
	return (
		<footer className="my-8 flex items-center justify-center gap-x-40 px-16 max-sm:gap-x-8">
			<Suspense fallback={<Skeleton className="w-20 h-6" />}>
				<GitHubStats />
			</Suspense>

			<div>
				<p className="text-4 flex items-center">
					<Code2Icon className="mr-1 h-4 w-4" /> with <HeartIcon className="h-4 w-4 mx-1" /> by
					<Link className="hocus:text-blue-400 transition-colors ml-1" href="https://ijskoud.dev/">
						ijsKoud
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
