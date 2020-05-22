import React, { useState, useEffect } from 'react';
import { createRowData, columns } from './createRowData';
import ReactDataGrid from 'react-data-grid';

function Example() {
	const initialRows = createRowData(50);
	const [ loading, setLoading ] = useState(true);
	const [ rows, setRows ] = useState(initialRows);
	const [ hasMore, setHasMore ] = useState(false);
	const [ error, setError ] = useState(false);

	useEffect(
		() => {
			if (rows.length === 50) {
				setLoading(false);

				console.log(rows);
				setRows(createRowData(100));
				setHasMore(rows.length > 0);
				console.log(rows);
			}
			if (error) setError(true);
		},
		[ rows, hasMore ]
	);

	return (
		<div>
			<div>{loading && 'loading...'}</div>
			<div>{error && 'error'}</div>
			<ReactDataGrid
				columns={columns}
				rowGetter={(i) => rows[i]}
				rowsCount={rows.length}
				minHeight={500}
				onColumnResize={(idx, width) => console.log(`Column ${idx} has been resized to ${width}`)}
			/>
		</div>
	);
}

export default Example;
