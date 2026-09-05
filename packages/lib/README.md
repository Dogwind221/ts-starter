# @ts-starter/lib

Shared TypeScript library for the **ts-starter** monorepo. Built with tsup to
**ESM + CJS + `.d.ts`** (three outputs) and fully typed with `strict` mode.

## Install

```bash
npm install @ts-starter/lib
```

## Usage

```ts
import { add, greet, sum } from "@ts-starter/lib";

greet("world"); // "Hello, world!"
add(2, 3); // 5
sum([1, 2, 3, 4]); // 10
```

## Build / publish

```bash
pnpm build    # tsup → dist/ (ESM+CJS+d.ts)
npm publish   # auto-runs `tsup` via prepublishOnly
```

## License

MIT
