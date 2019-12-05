module.exports = {
  "extends": ["airbnb", "airbnb/hooks", "plugin:jest-formatting/recommended"],
  "env": { "jest": true },
  "parser": "babel-eslint",
  "rules": {
    "array-bracket-spacing": "off",
    "arrow-parens": ["warn", "as-needed"],
    "comma-dangle": ["error", "always-multiline"],
    "consistent-return": "off",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "jsx-quotes": ["warn", "prefer-single"],
    "jsx-a11y/label-has-associated-control": ["warn"],
    "linebreak-style": ["error", "unix"],
    "object-curly-newline": ["error", {
      "ObjectExpression": { "multiline": true, "minProperties": 4 },
      "ObjectPattern": { "multiline": true },
      "ImportDeclaration": { "multiline": true },
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    }],
    "padded-blocks": "off",
    "prefer-template": ["warn"],
    "quotes": ["warn", "single", { "avoidEscape": true }],
    "react/destructuring-assignment": ["warn"],
    "react/jsx-tag-spacing": ["warn"],
    "react/prop-types": "off",
    "react/state-in-constructor": "off",
    "semi": ["warn", "never"],
    "space-before-function-paren": ["warn", {
      "anonymous": "always",
      "named": "ignore",
      "asyncArrow": "always"
    }],
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  }
}
