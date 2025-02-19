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
    expect(fib.recursive(20)).toBe(6765n);
  });

  test('should throw error for n > 20', () => {
    expect(() => fib.recursive(21)).toThrow(/n must be between 0 and 20/);
  });

  test('should throw error for negative integers', () => {
    expect(() => fib.recursive(-1)).toThrow(/n must be a non-negative integer/);
  });

  test('should throw error for non-negative non-integers', () => {
    expect(() => fib.recursive(1.1)).toThrow(/n must be a non-negative integer/);
  });
});

describe('fib.tailRecursive', () => {
  test('should return 0 for n = 0', () => {
    expect(fib.tailRecursive(0)).toBe(0n);
  });

  test('should return 1 for n = 1', () => {
    expect(fib.tailRecursive(1)).toBe(1n);
  });

  test('should correctly calculate fibonacci numbers', () => {
    expect(fib.tailRecursive(2)).toBe(1n);
    expect(fib.tailRecursive(3)).toBe(2n);
    expect(fib.tailRecursive(4)).toBe(3n);
    expect(fib.tailRecursive(5)).toBe(5n);
    expect(fib.tailRecursive(6)).toBe(8n);
    expect(fib.tailRecursive(1000)).toBe(
      43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875n
    );
  });

  test('should throw error for negative integers', () => {
    expect(() => fib.tailRecursive(-1)).toThrow(/n must be a non-negative integer/);
  });
});

describe('fib.iterative', () => {
  test('should return 0 for n = 0', () => {
    expect(fib.iterative(0)).toBe(0n);
  });

  test('should return 1 for n = 1', () => {
    expect(fib.iterative(1)).toBe(1n);
  });

  test('should correctly calculate fibonacci numbers', () => {
    expect(fib.iterative(2)).toBe(1n);
    expect(fib.iterative(3)).toBe(2n);
    expect(fib.iterative(4)).toBe(3n);
    expect(fib.iterative(5)).toBe(5n);
    expect(fib.iterative(6)).toBe(8n);
    expect(fib.iterative(1000)).toBe(
      43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875n
    );
  });

  test('should throw error for negative integers', () => {
    expect(() => fib.iterative(-1)).toThrow(/n must be a non-negative integer/);
  });
});
