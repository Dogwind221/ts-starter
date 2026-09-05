/**
 * Shared library for the ts-starter monorepo.
 * Everything here is consumed by `apps/web` and `apps/cli`.
 */

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export function add(a: number, b: number): number {
  return a + b;
}

export function sum(values: readonly number[]): number {
  return values.reduce((acc, value) => acc + value, 0);
}
