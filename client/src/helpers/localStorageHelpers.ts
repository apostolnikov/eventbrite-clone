export const saveToLocalStorage = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (e) {
		console.log(e);
	}
};

export const loadFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) { return undefined; }
		return JSON.parse(serializedState);
	} catch (e) {
		console.log(e);
		return undefined;
	}
};
