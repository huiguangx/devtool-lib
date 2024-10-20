/**
 * @author        guang <531311582@qq.com>
 * @date          2024-10-20 10:57:28
 * Copyright © YourCompanyName All rights reserved
 */
import { defineConfig } from "vitest/config";
import { vitestConfig } from "../../scripts/vitest-config.mjs";

const config = vitestConfig({ folder: "core" });

export default defineConfig(config);
