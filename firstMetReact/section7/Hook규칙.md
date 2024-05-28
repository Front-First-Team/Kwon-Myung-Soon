<Hook의 규칙>

1. Hook은 무조건 최상위 레벨에서만 호출해야 한다.
    - 매번 같은 순서로 호출되야 한다.
2. 리액트 함수 컴포넌트에서만 Hook을 호출해야 한다.
3. eslint-plugin-react-hooks

<Custom Hook 만들기>

1. Custom Hook만들 상황: 중복되는 코드를 추출해서 새로운 함수를 만든다
2. 이름이 use로 시작하고 내부에서 다른 Hook을 호출하는 하난의 자바스크립트 함수
