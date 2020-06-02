import React, { useEffect, useState } from 'react';
import { createRowData, columns } from './createRowData';
import ReactDataGrid from 'react-data-grid';

function Example() {
	// we can define number of rows
	const initialRows = createRowData(100);
	const [ rows, setRows ] = useState(initialRows);

	const [ length, setLength ] = useState([ { id: 10 }, { id: 20 } ]);
	const [ lastRow, setLastRow ] = useState(100);

	useEffect(
		() => {
			window.addEventListener('scroll', trackScrolling);
			return () => {
				window.removeEventListener('scroll', trackScrolling);
			};
		},
		[ length, rows ]
	);

	const isBottom = (el) => {
		return el.getBoundingClientRect().bottom <= window.innerHeight;
	};

	const trackScrolling = () => {
		const wrappedElement = document.getElementById('dix');
		if (isBottom(wrappedElement)) {
			setRows(rows.concat(createRowData(50)));
			setLength([ ...length, ...[ { id: 30 } ] ]);
			setLastRow(rows.length);
			window.removeEventListener('scroll', trackScrolling);
		}
	};

	return (
		<div id="dix">
			<ReactDataGrid
				columns={columns}
				id="dix"
				rowGetter={(i) => {
					return rows[i] || {};
				}}
				// rowSelection={true}
				onScroll={trackScrolling}
				rowsCount={lastRow}
				minWidth={850}
				minHeight={500}
				onGridSort={(sortColumn, sortDirection) => setRows(sortRows(initialRows, sortColumn, sortDirection))}
				onColumnResize={(idx, width) => console.log(`Column ${idx} has been resized to ${width}`)}
			/>
		</div>
	);
}
const sortRows = (initialRows, sortColumn, sortDirection) => (rows) => {
	const comparer = (a, b) => {
		if (sortDirection === 'ASC') {
			return a[sortColumn] > b[sortColumn] ? 1 : -1;
		} else if (sortDirection === 'DESC') {
			return a[sortColumn] < b[sortColumn] ? 1 : -1;
		}
	};
	return sortDirection === 'NONE' ? initialRows : [ ...rows ].sort(comparer);
};
export default Example;
