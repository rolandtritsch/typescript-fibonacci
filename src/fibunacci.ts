function recursive(n: number): bigint {
  if (n === 0) return 0n
  else if (n === 1) return 1n
  else if (n >= 2) return recursive(n - 1) + recursive(n - 2)
  else throw new Error('n must be a non-negative integer')
}

export { recursive };
