/**
 * Calculates the nth number in the Fibonacci sequence using recursion.
 * @param n The position in the Fibonacci sequence (0-based)
 * @returns The nth Fibonacci number
 * @throws Error if n is negative
 */
export function fibonacci(n: number): number {
  // Check for negative input
  if (n < 0) {
    throw new Error('Input must be a non-negative integer');
  }

  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Recursive case: F(n) = F(n-1) + F(n-2)
  return fibonacci(n - 1) + fibonacci(n - 2);
}
