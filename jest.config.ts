import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    verbose: true,
    testMatch: [
      // "**/__tests__/**/*.[jt]s?(x)",
      "**/src/**/?(*.)+(test).[jt]s?(x)",
    ],
  };
};
