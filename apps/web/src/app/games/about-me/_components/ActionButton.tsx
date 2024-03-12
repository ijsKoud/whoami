"use client";

import { Slot } from "@radix-ui/react-slot";
import type { FC, PropsWithChildren } from "react";
import React from "react";

import { UseGameController } from "./GameController";

const ActionButtonWrapper: FC<PropsWithChildren<ActionButtonProps>> = ({ action, object, children }) => {
	const { game, setResult } = UseGameController();

	function onButtonClick() {
		const result = game.handleAction(action, object);
		setResult(result);
	}

	return (
		<Slot className="font-mono" onClick={onButtonClick}>
			{children}
		</Slot>
	);
};

export type ActionButtonProps = {
	action: string;
	object?: string;
};

export default ActionButtonWrapper;
