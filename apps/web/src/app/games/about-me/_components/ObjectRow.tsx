import { Button } from "@whoami/ui/button";
import React from "react";

import ActionButtonWrapper from "./ActionButton";
import { UseGameController } from "./GameController";

const ObjectRow = () => {
	const { result } = UseGameController();
	return (
		<div className="space-x-2">
			{result.objects?.map((action) => (
				<ActionButtonWrapper
					key={`${action.id}:${(action as any).object ?? ""}`}
					object={"object" in action ? (action.object as string) : undefined}
					action={action.id}
				>
					<Button variant="blue">{action.label}</Button>
				</ActionButtonWrapper>
			))}
		</div>
	);
};

export default ObjectRow;
