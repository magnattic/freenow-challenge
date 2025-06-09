export const chunkArray = <T>(arr: T[], size: number): T[][] => {
	const chunkCount = Math.ceil(arr.length / size);
	return Array.from({ length: chunkCount }, (_, i) =>
		arr.slice(i * size, i * size + size),
	);
};
