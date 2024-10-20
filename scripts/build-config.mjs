/**
 * @author        guang <531311582@qq.com>
 * @date          2024-10-20 10:17:21
 * Copyright © YourCompanyName All rights reserved
 */
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";

export const buildConfig = ({ packageName }) => {
  // ... 省略其他配置

  const baseConfig = [
    {
      input: "./index.ts",
      plugins: [
        // ... 省略其他配置
        typescript({
          // 导入本地ts配置
          tsconfig: getPath("../tsconfig.json"),
          extensions: [".ts", "tsx"],
        }), // typescript 转义
      ],
    },
  ];

  // 单独生成声明文件
  const declaration = {
    input: "./index.ts",
    plugins: [
      dts(),
      // 配置别名，防止在构建时，无法找到使用别名的路径
      alias({
        entries: [{ find: "@", replacement: "./src" }],
      }),
    ],
    output: {
      format: "esm",
      file: "dist/index.d.ts",
    },
  };

  baseConfig.push(declaration);

  return baseConfig;
};
