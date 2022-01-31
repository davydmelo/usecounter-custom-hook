import { useEffect, useState } from "react";

const useCounter = (step, period) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + step);
		}, period);

		return () => clearInterval(interval);
	}, [step, period]);

	return counter;
};

export default useCounter;
