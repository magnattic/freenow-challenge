export const fetchApi = async <T>(
	endpoint: 'free-now' | 'share-now',
): Promise<T> => {
	const response = await fetch(`http://localhost:5001/${endpoint}/vehicles`);
	if (!response.ok) {
		throw new Error(`Failed to fetch ${endpoint} vehicles`);
	}
	return response.json();
};
