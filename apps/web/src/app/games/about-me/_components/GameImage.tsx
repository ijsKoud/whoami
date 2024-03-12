import React from "react";

import { UseGameController } from "./GameController";

const GameImage = () => {
	const { result } = UseGameController();
	return <img alt="image of the room you are currently in." src={result.image} className="h-96 w-full object-contain rounded-md" />;
};

export default GameImage;
