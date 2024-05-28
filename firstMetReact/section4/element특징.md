<Elements 특징>

1. 불변성(immutable): Element생성후에는 children이나 attributes을 바꿀수없다.
2. 그래서 화면을 바꾸려면 기존의 element를 바꾸는 것이 아니라
   새로운 element을 만들어 기존의 element와 바꾼다.

<Elements 랜더링>

1. Root DOM Node: <div id="root"></div>
2. React element는 virtual dom에 존재 DOM element는 실제 브라우저 DOM에 존재
3. 랜더링은 가상돔에서 실제돔으로 이동하는 과정
