/**
 * @author        guang <531311582@qq.com>
 * @date          2024-10-20 10:57:13
 * Copyright © YourCompanyName All rights reserved
 */
import path from "path";

// folder 参数对应每个包的文件名称，如果是 core，则 folder 就是 core，如果是 tools 则 folder 就是 tools
export const vitestConfig = ({ folder }) => {
  return {
    resolve: {
      // 配置路径别名，防止在包中使用路径别名时，测试用例无法找到对应的路径
      alias: {
        "@": path.resolve(__dirname, `../packages/${folder}/src`),
      },
    },
  };
};
