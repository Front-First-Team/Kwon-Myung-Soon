<State>

1. 리액트 Component의 변경가능한 데이터
2. 개발자가 정의한다.
3. 랜더링이나 데이터 흐름에 사용되는 값만 state에 포함
4. javaScript 객체이다
5. 직접 수정 할 수 없다. => 변경시 setState를 사용해서 수정

<Lifecycle>
1. 출생: Mounting -> Constructor -> componentDidMount
2. 인생: Updating -> New props / setState() / forceUpdat() ->componentDidUpdate
3. 사망: Unmounting -> componentWillUnmount
