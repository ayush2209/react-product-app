import { sum } from './sum';

test('Sum function should add two numbers correctly', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
});

test('Sum function should fail when the result is incorrect', () => {
    const failTest = sum(1, 2);
    expect(failTest).not.toBe(4);
});
