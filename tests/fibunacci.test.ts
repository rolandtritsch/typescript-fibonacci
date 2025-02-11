import { fibonacci } from '../src/fibunacci';

describe('fibonacci', () => {
  test('should return 0 for n = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('should return 1 for n = 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('should correctly calculate fibonacci numbers', () => {
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(6)).toBe(8);
  });

  test('should throw error for negative numbers', () => {
    expect(() => fibonacci(-1)).toThrow('Input must be a non-negative integer');
  });
});
