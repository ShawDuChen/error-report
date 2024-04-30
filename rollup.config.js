import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import cleaner from "rollup-plugin-cleaner";

const config = [
  {
    input: "src/index.js",
    output: [
      {
        file: "./lib/error-report.js",
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      cleaner({
        targets: ["./lib/"], // 要清空的输出目录路径
      }),
      typescript({
        tsconfig: "./jsconfig.json",
      }),
    ],
  },
  // {
  //   input: "src/index.interface.ts",
  //   output: [{ file: "lib/index.interface.d.ts", format: "es" }],
  //   plugins: [dts()],
  // },
];
export default config;
