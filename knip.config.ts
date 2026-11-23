import type { KnipConfig } from "knip";

const config: KnipConfig = {
	entry: ["src/**/*.test.*", "src/index.ts"],
	ignoreExportsUsedInFile: { interface: true, type: true },
	project: ["src/**/*.ts"],
	treatConfigHintsAsErrors: true,
};

export default config;
