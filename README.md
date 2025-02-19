# typescript-fibonacci

Simple typescript implementation to calculate the Fibonacci sequence.

To make this work you need to ...

- clone the repository
- install dependencies with `npm install`
- run tests with `npm test`

We are featuring 3 implementations ...

- recursive (slow and stack overflow for large numbers)
- tail recursive (fast and no stack overflow)
- iterative (fast and no stack overflow)

Note: To process large numbers we (obviously) need to use `bigint` instead of `number`.

Note: TypeScript has no integer type. Means we need to create our own type for integers.
