import faker from 'faker';

function createFakeRow(index) {
	return {
		id: index,
		avatar: faker.image.avatar(),
		county: faker.address.county(),
		email: faker.internet.email(),
		title: faker.name.prefix(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		street: faker.address.streetName(),
		zipCode: faker.address.zipCode()
	};
}

export function createRowData(count) {
	return [ ...Array(count).keys() ].map((i) => createFakeRow(i));
}

const defaultColumnProperties = {
	resizable: true,
	width: 120,
	sortable: true
};

export const columns = [
	{
		key: 'id',
		name: 'ID',
		sortDescendingFirst: true
	},
	{
		key: 'title',
		name: 'Title'
	},
	{
		key: 'firstName',
		name: 'First Name',
		events: {
			onClick: function(ev, args) {
				console.log(
					'The user entered edit mode on title column with rowIdx: ' + args.rowIdx + ' & rowId: ' + args.rowId
				);
			}
		}
	},
	{
		key: 'lastName',
		name: 'Last Name',
		events: {
			onMouseOver: function(ev) {
				console.log(`Mouse over Last Name Column`);
			}
		}
	},
	{
		key: 'email',
		name: 'Email',
		events: {
			onFocus: function(ev) {
				console.log(`Context Menu is opened`);
			}
		}
	},
	{
		key: 'street',
		name: 'Street'
	},
	{
		key: 'zipCode',
		name: 'ZipCode'
	}
].map((c) => ({ ...c, ...defaultColumnProperties }));
