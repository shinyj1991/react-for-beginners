/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    type: 'module',
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-unused-vars': 'off', // 사용하지 않는 변수 체크 : off - 사용안함
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'no-console': 0,
    'prettier/prettier': [
      'error',
      {
        printWidth: 80, // 한 줄 최대 문자 수
        tabWidth: 2, // 들여쓰기 시, 탭 너비
        useTabs: false, // 스페이스 대신 탭 사용
        semi: true, // 문장 끝 세미콜론 사용
        singleQuote: true, // 작은 따옴표 사용
        trailingComma: 'all', // 꼬리 콤마 사용
        bracketSpacing: true, // 중괄호 내에 공백 사용
        arrowParens: 'always', // 화살표 함수 단일 인자 시, 괄호 생략
        proseWrap: 'never', // 마크다운 포매팅 제외
        endOfLine: 'auto', // 개행문자 유지 (혼합일 경우, 첫 줄 개행문자로 통일)
      },
    ],
  },
};
