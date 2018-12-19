module.exports = {
  rootDir: "../",
  testPathIgnorePatterns: ["node_modules", "config"],
  setupTestFrameworkScriptFile: "<rootDir>/config/enzyme-conf.js",
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/js/**/*.{js,jsx}"],
  coverageReporters: ["html", "json"]
  // coverageThreshold: {
  //   global: {
  //     branches: 90,
  //     functions: 90,
  //     lines: 90,
  //     statements: 90
  //   }
  // }
};
