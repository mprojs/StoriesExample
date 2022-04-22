module.exports = {
  root: true,
  plugins: [
    '@ngneat/reactive-forms'
  ],
  ignorePatterns: [
    'tools/**/*.ts',
  ],
  env: {
    "jest": true
  },
  overrides: [
    {
      files: ['*.ts'],
      excludedFiles: [],
      parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true
        // ecmaVersion: 2017,
      },
      extends: [
        'eslint:recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      env: {
        browser: true,
        node: true,
        jest: true
      },
      rules: {
        'no-restricted-imports': ['error', {paths: ['@angular/localize/init']}],
        "@ngneat/reactive-forms/no-angular-forms-imports": "error",
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case'
          }
        ],
        '@angular-eslint/no-input-rename': 'off',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: ['field', 'constructor', 'method']
          }
        ],
        'no-trailing-spaces': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-useless-constructor': 'off',
        'object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/naming-convention': 'off',
        'prefer-arrow/prefer-arrow-functions': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'no-shadow': 'off',
        eqeqeq: 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        'implicit-arrow-linebreak': 'off',
        'no-console': 'off',
        '@angular-eslint/no-empty-lifecycle-method': 'off',
        '@angular-eslint/no-output-native': 'off',
        '@angular-eslint/no-output-rename': 'off',
        '@angular-eslint/template/eqeqeq': 'off',
        '@angular-eslint/directive-selector': 'off'
      }
    },
    {
      files: ['*.component.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        '@angular-eslint/template/eqeqeq': 'off'
      }
    }
  ]
};
