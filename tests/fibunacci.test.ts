import * as fib from '../src/fibunacci';

describe('fib.recursive', () => {
  test('should return 0 for n = 0', () => {
    expect(fib.recursive(0)).toBe(0n);
  });

  test('should return 1 for n = 1', () => {
    expect(fib.recursive(1)).toBe(1n);
  });

  test('should correctly calculate fibonacci numbers', () => {
    expect(fib.recursive(2)).toBe(1n);
    expect(fib.recursive(3)).toBe(2n);
    expect(fib.recursive(4)).toBe(3n);
    expect(fib.recursive(5)).toBe(5n);
    expect(fib.recursive(6)).toBe(8n);
    expect(fib.recursive(40)).toBe(102334155n);
  });

  test('should throw error for n > 40', () => {
    expect(() => fib.recursive(41)).toThrow(/n must be between 0 and 40/);
  });

  test('should throw error for negative numbers', () => {
    expect(() => fib.recursive(-1)).toThrow(/n must be a non-negative integer/);
  });
});
