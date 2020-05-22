import faker from 'faker';

function createFakeRow(index) {
	return {
		id: index,
		avartar: faker.image.avatar(),
		county: faker.address.county(),
		email: faker.internet.email(),
		title: faker.name.prefix(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		street: faker.address.streetName(),
		zipCode: faker.address.zipCode(),
		date: faker.date.past().toLocaleDateString(),
		jobTitle: faker.name.jobTitle(),
		catchPhrase: faker.company.catchPhrase(),
		companyName: faker.company.companyName(),
		jobArea: faker.name.jobArea(),
		jobType: faker.name.jobType()
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
	},
	{
		key: 'date',
		name: 'Date'
	},
	{
		key: 'jobTitle',
		name: 'Job Title'
	},
	{
		key: 'catchPhrase',
		name: 'Catch Phrase'
	},
	{
		key: 'jobArea',
		name: 'Job Area'
	},
	{
		key: 'jobType',
		name: 'Job Type'
	}
].map((c) => ({ ...c, ...defaultColumnProperties }));
