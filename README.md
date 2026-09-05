# ts-starter

Modern **TypeScript-first** monorepo starter（pnpm workspaces）。开箱即用：严格类型、统一 lint/format、内置测试与构建，三种项目形态一套模板通吃。

> 想要直接用？仓库顶部点 **"Use this template"** 复制成自己的新仓库，或 `git clone` 本仓库后改掉 `package.json` 里的 `name` 即可。

## 技术选型（推荐组合）

| 维度 | 选择 | 理由 |
|---|---|---|
| 包管理器 | **pnpm** | 严格 node_modules、省磁盘、monorepo 友好 |
| 运行时 | **Node 22+ / ESM**（`"type": "module"`） | 生态全、跨平台、CI 兼容好 |
| 类型 | **TypeScript `strict`** + `noUncheckedIndexedAccess` 等强约束 | `tsc --noEmit` 只咬类型，不做运行 |
| 打包 | 前端用 **Vite**；库/CLI 用 **tsup**(esbuild) | 快、三产物（ESM+CJS+`.d.ts`） |
| 测试 | **Vitest** | 与 Vite 同模块体系、TS 原生 |
| Lint/Format | **Biome** | 一个工具同时 lint+format，快 |
| dev 运行 | **tsx** | 直接在 dev 跑 TS，免编译 |

## 目录结构

```
ts-starter/
├── apps/
│   ├── web/              # Vite + React 前端
│   └── cli/              # Node CLI，tsup 打包带 bin
├── packages/
│   └── lib/              # 共享库，tsup 出 ESM+CJS+.d.ts
├── tsconfig.base.json    # 全局严格 TS 基座
├── biome.json            # lint + format 一体
├── pnpm-workspace.yaml
└── package.json
```

## 常用命令（在仓库根目录）

```bash
pnpm install            # 安装全部依赖
pnpm typecheck          # 全仓类型检查（tsc --noEmit）
pnpm test               # 全仓跑 Vitest
pnpm build              # 全仓构建（lib/cli/web 出 dist）
pnpm lint               # Biome 检查
pnpm format             # Biome 格式化

# 单包
pnpm --filter @ts-starter/web dev     # 起 Vite dev server
pnpm --filter @ts-starter/cli dev     # 用 tsx 直接跑 CLI
pnpm --filter @ts-starter/cli build   # 打包 CLI（生成 dist + bin）
node apps/cli/dist/index.js Alice     # 跑打包后的 CLI
```

## 说明

- **共享库源码直出**：`packages/lib` 的 `exports` 指向 `src/index.ts`，所以 `apps/*`（Vite/Vitest/tsc）能**直接消费 TS 源码，无需先构建** —— 改 `lib` 代码，前端/CLI 立即生效。`publishConfig` 里同时预留了发布形态（`dist` 的 ESM+CJS+`.d.ts`），`pnpm pack` 发布时会自动用 dist 产物。
- **CLI 单文件**：`apps/cli` 的 tsup 用 `noExternal: ["@ts-starter/lib"]` 把库打进产物，`dist/index.js` 独立可跑（不自带 node_modules）。
- **pnpm v10+ 必须放行 esbuild**：`pnpm-workspace.yaml` 已配置 `onlyBuiltDependencies: [esbuild]`，否则 Vite/tsup/Vitest 无法运行（esbuild postinstall 被 pnpm 默认拦截）。
- 版本号采用 caret 区间；如需锁定精确版本，请 `pnpm --save-exact`。

## 向 `lib` 添加可复用逻辑

在 `packages/lib/src/index.ts` 里导出，`apps/*` 直接 `import { ... } from "@ts-starter/lib"` 即可。当 lib 具备真实通用价值后，可单独发布到 npm。

## License

[MIT](./LICENSE)
