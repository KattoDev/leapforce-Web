/** @type {import('ts-jest').JestConfigWithTsJest} **/

export const testEnvironment = "node";
export const transform = {
  "^.+.ts?$": ["ts-jest", {}],
};
