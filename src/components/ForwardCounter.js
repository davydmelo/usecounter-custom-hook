import React from "react";
import useCounter from "../hooks/useCounter";
import Card from "./Card";

const ForwardCounter = () => {
	const counter = useCounter(1, 500);

	return <Card value={counter} />;
};

export default ForwardCounter;
