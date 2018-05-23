const path = require('path');

module.exports = {
    "extends": [
        "react-app",
        "airbnb"
    ],
    "settings": {
        "import/resolver": {
        "node": { "paths": [path.resolve('./src')] },
        },
    },
    "rules": {
        "react/jsx-filename-extension": 0,
        "function-paren-newline": 0,
        "comma-dangle": 0,
        "no-use-before-define": 0,
        "no-underscore-dangle": 0,
        "react/prop-types": [1, { ignore: ['children'] }],
        "arrow-parens": 0,
        "arrow-body-style": 0,
        "no-param-reassign": 0,
        'jsx-a11y/anchor-is-valid': 0,
        "no-console": 0,
        "import/prefer-default-export": 0,
    },
    "overrides": {
        "files": ["src/*.js"],
    },
    "env": {
        "jest": true,
    },
}