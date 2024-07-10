module.exports = {
  packagerConfig: {
    asar: true,
    appBundleId: "io.github.pd4d10.debugtron",
    icon: "assets/icon",
    ignore: ["/node_modules/registry-js/build/node_gyp_bins/python3"],
  },
  makers: [
    { name: "@electron-forge/maker-squirrel", config: {} },
    { name: "@electron-forge/maker-zip", platforms: ["darwin"] },
    { name: "@electron-forge/maker-deb", config: {} },
    { name: "@electron-forge/maker-dmg", config: {} },
    { name: "@electron-forge/maker-rpm", config: {} },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-vite",
      config: {
        build: [
          { entry: "src/main/main.ts", config: "vite.main.config.mjs" },
          {
            entry: "src/preload.ts",
            config: "vite.preload.config.mjs",
          },
        ],
        renderer: [{ name: "main_window", config: "vite.renderer.config.mjs" }],
      },
    },
    { name: "@electron-forge/plugin-auto-unpack-natives", config: {} },
  ],
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "pengx17",
          name: "debugtron",
        },
      },
    },
  ],
};
