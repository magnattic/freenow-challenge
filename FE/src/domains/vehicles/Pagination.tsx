import { BackwardIcon, ForwardIcon } from '@freenow/wave';
import { IconButton } from '@freenow/wave/experimental';

interface PaginationProps {
	readonly currentPage: number;
	readonly totalPages: number;
	readonly onPageChange: (page: number) => void;
}

export const Pagination = ({
	currentPage,
	totalPages,
	onPageChange
}: PaginationProps) => {
	const handlePreviousPage = () => {
		onPageChange(Math.max(currentPage - 1, 1));
	};

	const handleNextPage = () => {
		onPageChange(currentPage + 1);
	};

	return (
		<div>
			<IconButton
				label='Previous'
				Icon={BackwardIcon}
				onClick={handlePreviousPage}
				isDisabled={currentPage === 1}
			/>
			<span>Page {currentPage}</span>
			<IconButton
				label='Next'
				Icon={ForwardIcon}
				onClick={handleNextPage}
				isDisabled={currentPage >= totalPages}
			/>
		</div>
	);
};
