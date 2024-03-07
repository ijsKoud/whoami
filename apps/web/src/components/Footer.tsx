import { Skeleton } from "@whoami/ui/skeleton";
import { Code2Icon, GitForkIcon, HeartIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

const GitHubStats: React.FC = async () => {
	const response = await fetch("https://api.github.com/repos/ijsKoud/website");
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

interface GitHubRepoData {
	id: number;
	node_id: string;
	name: string;
	full_name: string;
	private: boolean;
	owner: GitHubRepoOwner;
	html_url: string;
	description: string;
	fork: boolean;
	url: string;
	forks_url: string;
	keys_url: string;
	collaborators_url: string;
	teams_url: string;
	hooks_url: string;
	issue_events_url: string;
	events_url: string;
	assignees_url: string;
	branches_url: string;
	tags_url: string;
	blobs_url: string;
	git_tags_url: string;
	git_refs_url: string;
	trees_url: string;
	statuses_url: string;
	languages_url: string;
	stargazers_url: string;
	contributors_url: string;
	subscribers_url: string;
	subscription_url: string;
	commits_url: string;
	git_commits_url: string;
	comments_url: string;
	issue_comment_url: string;
	contents_url: string;
	compare_url: string;
	merges_url: string;
	archive_url: string;
	downloads_url: string;
	issues_url: string;
	pulls_url: string;
	milestones_url: string;
	notifications_url: string;
	labels_url: string;
	releases_url: string;
	deployments_url: string;
	created_at: string;
	updated_at: string;
	pushed_at: string;
	git_url: string;
	ssh_url: string;
	clone_url: string;
	svn_url: string;
	homepage: string;
	size: number;
	stargazers_count: number;
	watchers_count: number;
	language: string;
	has_issues: boolean;
	has_projects: boolean;
	has_downloads: boolean;
	has_wiki: boolean;
	has_pages: boolean;
	has_discussions: boolean;
	forks_count: number;
	mirror_url: null;
	archived: boolean;
	disabled: boolean;
	open_issues_count: number;
	license: GitHubRepoLicense;
	allow_forking: boolean;
	is_template: boolean;
	web_commit_signoff_required: boolean;
	topics: string[];
	visibility: string;
	forks: number;
	open_issues: number;
	watchers: number;
	default_branch: string;
	temp_clone_token: null;
	network_count: number;
	subscribers_count: number;
}

interface GitHubRepoLicense {
	key: string;
	name: string;
	spdx_id: string;
	url: string;
	node_id: string;
}

interface GitHubRepoOwner {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
}
