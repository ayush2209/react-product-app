import { sum } from './sum';

test('Sum function should add two Number', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
});
