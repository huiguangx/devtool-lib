/**
 * @author        guang <531311582@qq.com>
 * @date          2024-10-20 10:11:00
 * Copyright © YourCompanyName All rights reserved
 */
import { defineConfig } from "rollup";
// 导入根目录下导入build-config.mjs的配置
import { buildConfig } from "../../scripts/build-config.mjs";
// 参数 packageName 的作用是在打包输出 umd 时，作为 umd 的包名
const configs = buildConfig({ packageName: "dnhyxcTools" });

export default defineConfig(configs);
