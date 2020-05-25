import faker from 'faker';
import { Editors } from 'react-data-grid-addons';

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
	width: 120
};

export const columns = [
	{
		key: 'id',
		name: 'ID'
	},
	{
		key: 'title',
		name: 'Title'
	},
	{
		key: 'firstName',
		name: 'First Name'
	},
	{
		key: 'lastName',
		name: 'Last Name'
	},
	{
		key: 'email',
		name: 'Email'
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
