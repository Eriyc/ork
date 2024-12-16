module.exports = function (api) {
  api.cache(true);
  return {
    plugins: ["@legendapp/state/babel"],
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
