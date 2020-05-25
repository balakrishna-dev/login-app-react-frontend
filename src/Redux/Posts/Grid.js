import React from 'react';
import { createRowData, columns } from './createRowData';
import ReactDataGrid from 'react-data-grid';

function Example() {
	var rows = createRowData(100);
	// we can define number of rows
	let lastRow = 500;

	return (
		<div>
			<ReactDataGrid
				columns={columns}
				rowGetter={(i) => {
					if (i === rows.length - 1) {
						rows = rows.concat(createRowData(100));
						console.log(rows);
						console.log(rows.length);
						for (i; i < rows.length; i++) {
							return rows[i];
						}
					}
					return rows[i] || {};
				}}
				rowSelection={true}
				rowsCount={lastRow}
				minHeight={500}
				onColumnResize={(idx, width) => console.log(`Column ${idx} has been resized to ${width}`)}
			/>
		</div>
	);
}

export default Example;
