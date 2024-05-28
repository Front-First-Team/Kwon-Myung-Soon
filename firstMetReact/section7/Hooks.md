<Hooks?>

1. 함수 Component: state 사용X, Lifecycle에 따른 기능 구현 불가
2. 보완을 위해서 Hooks가 탄생 (State, Lifecycle, 최적화 관련 함수)
3. 이름은 모두 use로 시작

<useState()>

1. useState 사용법: const [변수명, set함수명] = useState(초기값) => 배열로 return
   // 변수 각각에 대해 set함수가 따로 존재

<useEffect()>

1. side effect(효과, 영향) : 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링중에는 작업완료x
2. Lifecycle함수의 역할을 하는 함수
3. 사용법: useEffect(이펙트 함수, 의존성 배열)
    - useEffect(이펙트 함수, []): mount, unmount시에 단 한번씩만 실행됨
    - useEffect(이펙트 함수): 의존성배열 생략, 컴포넌트가 업데이트될 때마다 호출 됨
