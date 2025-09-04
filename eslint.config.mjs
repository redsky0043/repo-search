import { FlatCompat } from "@eslint/eslintrc"
import typescriptParser from "@typescript-eslint/parser"
import reactCompiler from "eslint-plugin-react-compiler"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import unusedImports from "eslint-plugin-unused-imports"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:@typescript-eslint/recommended"
  ),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "env",
      "*.config.ts",
    ],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    plugins: {
      "react-compiler": reactCompiler,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      "@next/next/no-img-element": "off",
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": "off",
      "react/function-component-definition": [
        2,
        {
          namedComponents: "function-declaration",
        },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "function",
          format: ["PascalCase", "camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "import",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "off",
      "import/first": "warn",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // External packages (React, Next.js, third-party)
            ["^react", "^next", "^@?\\w"],
            // Internal packages - app layer (legacy)
            ["^@/app"],
            // Internal packages - core layers
            ["^@/shared", "^@/core"],
            ["^@/entities"],
            ["^@/features"],
            ["^@/widgets"],
            ["^@/views"],
            // Relative imports from parent directories
            ["^\\.\\."],
            // Same-level relative imports (same slice)
            ["^\\."],
          ],
        },
      ],
      "simple-import-sort/exports": "warn",
      "import/newline-after-import": "warn",
      "import/no-duplicates": "warn",
      "react-compiler/react-compiler": "error",
      "react/no-unescaped-entities": "off",
      "no-restricted-properties": [
        "error",
        {
          object: "process",
          property: "env",
          message: 'Use `import { env } from "~/env" instead`',
        },
      ],
    },
  },
]

export default eslintConfig
