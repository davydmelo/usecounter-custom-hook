import React from "react";
import useCounter from "../hooks/useCounter";
import Card from "./Card";

const BackwardCounter = () => {
	const counter = useCounter(-1, 1000);

	return <Card value={counter} />;
};

export default BackwardCounter;
