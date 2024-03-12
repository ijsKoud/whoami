import { Button } from "@whoami/ui/button";
import React from "react";

import ActionButtonWrapper from "./ActionButton";
import { UseGameController } from "./GameController";

const ActionRow = () => {
	const { result } = UseGameController();

	return (
		<div className="space-x-2">
			{result.actions?.map((action) => (
				<ActionButtonWrapper key={action.id} action={action.id}>
					<Button variant="default">{action.label}</Button>
				</ActionButtonWrapper>
			))}
		</div>
	);
};

export default ActionRow;
