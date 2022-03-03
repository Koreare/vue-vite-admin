module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },

  plugins: [
    'vue'
  ],

  extends: [
    'standard'
  ],

  rules: {
    /**
     * DESC:
     * javascript custom rules
     */
    'no-undef': 'off',
    'no-return-assign': 'off',
    'no-useless-catch': 'off',
    'no-prototype-builtins': 'off',
    'no-unused-expressions': 'off',
    'no-useless-escape': 'off',
    'import/no-absolute-path': 'off',

    /**
     * DESC:
     * vue custom rules
     */
    'vue/no-unused-vars': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/html-quotes': ['error', 'double'],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: {
        max: 1
      }
    }],

    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }],

    'vue/html-closing-bracket-spacing': ['error', {
      selfClosingTag: 'always'
    }],

    'vue/no-multi-spaces': ['error', {
      ignoreProperties: false
    }],

    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true
    }],

    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0
    }],

    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      allowEmptyLines: false
    }],

    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'always',
        component: 'any'
      },

      svg: 'always',
      math: 'always'
    }],

    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'CONDITIONALS',
        'LIST_RENDERING',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ]
    }],

    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],

    'vue/no-parsing-error': ['error', {
      'x-invalid-end-tag': false,
      'invalid-first-character-of-tag-name': false
    }]
  }
}
