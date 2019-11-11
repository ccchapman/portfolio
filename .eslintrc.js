module.exports = {
  extends: ['airbnb'],
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-array-index-key': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
};
