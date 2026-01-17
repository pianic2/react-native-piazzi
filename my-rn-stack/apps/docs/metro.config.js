const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

// Root del progetto mobile
const projectRoot = __dirname;
// Root monorepo
const monorepoRoot = path.resolve(projectRoot, "../..");

// Config di base Expo
const config = getDefaultConfig(projectRoot);

// Dichiariamo esplicitamente il root di Expo Router *nel modo corretto*
config.expoRouter = {
  origin: "app",
};

// Autorizziamo Metro a guardare i packages del monorepo
config.watchFolders = [monorepoRoot];

// Risoluzione moduli (per turborepo workspaces)
config.resolver.nodeModulesPaths = [
  path.join(projectRoot, "node_modules"),
  path.join(monorepoRoot, "node_modules"),
];

// Supporto a *.cjs
if (!config.resolver.sourceExts.includes("cjs")) {
  config.resolver.sourceExts.push("cjs");
}

config.resolver.sourceExts.push("ts", "tsx");

module.exports = config;
