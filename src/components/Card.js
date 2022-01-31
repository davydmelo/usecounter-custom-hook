import React from "react";
import classes from "./Card.module.css";

const Card = ({ value }) => {
	return (
		<div className={classes.card}>
			<p>{value}</p>
		</div>
	);
};

export default Card;
