module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint'
  ],
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:import/electron",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  env: {
    'browser': true,
    'es6': true,
    'node': true,
    'jest': true
  },
  globals: {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'project': './tsconfig.json'
  },
  rules: {
    'global-require': 0,
    'no-useless-escape': 0,
    'semi': [2, 'never'],
    'jsx-quotes': ["error", "prefer-single"],
    'import/prefer-default-export': 0,
    'import/no-useless-path-segments': 1,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/newline-after-import': 1,
    'import/no-named-as-default-member': 0,
    'import/namespace': 0,
    'import/extensions': 0,
    'import/named': 0,
    'react/jsx-wrap-multilines': [
      2,
      {
        'declaration': 'parens-new-line',
        'assignment': 'parens-new-line',
        'return': 'parens-new-line',
        'arrow': 'ignore',
        'condition': 'ignore',
        'logical': 'ignore',
        'prop': 'ignore'
      }
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-indent': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-closing-bracket-location': [
      2,
      {
        'selfClosing': 'props-aligned',
        'nonEmpty': 'after-props'
      }
    ],
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'react/jsx-tag-spacing': [
      2,
      {
        'beforeSelfClosing': 'always'
      }
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-curly-spacing': 0,
    'react/no-access-state-in-setstate': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-no-bind': 0,
    'react/require-default-props': 0,
    'react/display-name': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': 0,
    'react/state-in-constructor': 0,
    'react/no-did-update-set-state': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/member-delimiter-style': [
      2, 
      {
        'multiline': {
          'delimiter': 'comma',
          'requireLast': false
        },
        'singleline': {
            'delimiter': 'comma',
            'requireLast': false
        }  
      }
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-angle-bracket-type-assertion': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-types': 0,
    'react/prefer-stateless-function': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/aria-activedescendant-has-tabindex': 0,
    'jsx-a11y/aria-props': 0,
    'jsx-a11y/aria-proptypes': 0,
    'jsx-a11y/aria-role': 0,
    'jsx-a11y/aria-unsupported-elements': 0,
    'jsx-a11y/autocomplete-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/html-has-lang': 0,
    'jsx-a11y/iframe-has-title': 0,
    'jsx-a11y/img-redundant-alt': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/no-access-key': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-distracting-elements': 0,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/no-onchange': 0,
    'jsx-a11y/no-redundant-roles': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/role-has-required-aria-props': 0,
    'jsx-a11y/role-supports-aria-props': 0,
    'jsx-a11y/scope': 0,
    'jsx-a11y/tabindex-no-positive': 0,
    'no-console': 0
  }

}