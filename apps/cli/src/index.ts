#!/usr/bin/env node
import { greet } from "@ts-starter/lib";

const args = process.argv.slice(2);
const name = args[0] ?? "world";

console.log(greet(name));
