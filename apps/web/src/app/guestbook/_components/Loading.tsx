import React from "react";
import { Skeleton } from "@whoami/ui/skeleton";

const Loading: React.FC = () => {
	return (
		<div className="flex flex-col gap-10 mt-8">
			{Array(3)
				.fill(null)
				.map((_, key) => (
					<div key={key} className="flex flex-col gap-y-4">
						<div className="flex items-center gap-4">
							<Skeleton className="w-10 h-10 rounded-full" />

							<div className="flex flex-col">
								<Skeleton className="w-[140px] h-4" />
								<Skeleton className="w-[220px] h-4 mt-1" />
							</div>
						</div>

						<Skeleton className="w-96 h-5" />
					</div>
				))}
		</div>
	);
};

export default Loading;
