<Props의 특징>

1. Read-Only: 값을 변경할 수 없다.
2. new props => new elements
3. js함수의 'pure': 입력값(input)을 변경하지 않으며, 같은 입력값에 대해서는
   항상 같은 출력값(output)을 리턴
4. js함수의 'impure' : 입력값(input)을 변경
5. 모든 리액트 컴포넌트는 Props를 직접 바꿀 수 없고, 같은 Props에 대해서는
   항상 같은 결과를 보여줄것!

<Props 사용법>

1. 자바스크립트 객체형태 ({key : value})
2. React에 props는 JSX형태로 구현
