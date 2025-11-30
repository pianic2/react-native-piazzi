const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Consenti a Metro di vedere i pacchetti condivisi
config.watchFolders = [
  path.resolve(__dirname, "../../packages/ui"),
  path.resolve(__dirname, "../../packages/auth"),
];

// Importa correttamente TS/JS da fuori l'app
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, "node_modules"),
  path.resolve(__dirname, "../../packages/ui/node_modules"),
  path.resolve(__dirname, "../../packages/auth/node_modules"),
];

// IMPORTANTISSIMO: Estensioni
config.resolver.sourceExts = ["ts", "tsx", "js", "jsx", "json"];

module.exports = config;
