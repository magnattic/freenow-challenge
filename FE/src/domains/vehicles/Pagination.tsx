import { Pagination as WavePagination, type PaginationProps as WavePaginationProps } from '@freenow/wave';

type PaginationProps = WavePaginationProps & {
	onPageChange: (page: number) => void;
}

export const Pagination = ({
	onPageChange,
	pageSize = 10,
	totalItems = 0,
	value = 1
}: PaginationProps) => {
	const handlePreviousPage = () => {
		onPageChange(Math.max(value - 1, 1));
	};

	const handleNextPage = () => {
		onPageChange(value + 1);
	};

	return (<WavePagination
		onSkipBackward={() => onPageChange(1)}
		onPrevPage={handlePreviousPage}
		onNextPage={handleNextPage}
		onSkipForward={() => onPageChange(Math.ceil(totalItems / pageSize))}
		ariaLabelFirst='First page'
		ariaLabelPrevious='Previous page'
		ariaLabelNext='Next page'
		ariaLabelLast='Last page'
		ariaLabelSelectPageSizeContainer='Select page size'
		label='Page navigation'
		pageSize={pageSize}
		totalItems={totalItems}
		value={value} />
	);
};
