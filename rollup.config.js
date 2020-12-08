import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";

const extensions = [".js", ".ts"];

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: pkg.main,
				format: "cjs",
			},
			{
				file: pkg.module,
				format: "esm",
			},
		],
		plugins: [
			resolve({ extensions }),
			babel({ extensions, babelHelpers: "bundled" }),
		],
	},
	{
		input: "src/assembler.ts",
		output: [
			{
				file: "lib/assembler.js",
				format: "cjs",
			},
			{
				file: "lib/assembler.mjs",
				format: "esm",
			},
		],
		plugins: [
			resolve({ extensions }),
			babel({ extensions, babelHelpers: "bundled" }),
		],
	},
	{
		input: "src/runtime.ts",
		output: [
			{
				file: "lib/runtime.js",
				format: "cjs",
			},
			{
				file: "lib/runtime.mjs",
				format: "esm",
			},
		],
		plugins: [
			resolve({ extensions }),
			babel({ extensions, babelHelpers: "bundled" }),
		],
	},
];
