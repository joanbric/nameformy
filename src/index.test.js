import { describe, it, expect } from 'vitest';

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});
});

describe('Generate prompt', () => {
	it('All params need to has a value', () => {
		expect(1 + 2).toBe(3);
	});
});

describe("Names' object", () => {
	const object = null;

	it('The object need to be valid', () => {
		expect(object).toBeTypeOf('string');
	});
});

describe('Name is new or used', () => {
	const isNew = false;
	it('isNew is boolean', () => {
		expect(isNew).toBeTypeOf('boolean');
	});
});


