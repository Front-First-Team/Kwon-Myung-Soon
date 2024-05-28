<useMemo>
Memoized value를 리턴하는 Hook : 연산량이 높은 작업을 수행하여 결과를 반환

<useCallback>
useMemo() Hook과 비슷하지만 값이 아닌 함수를 반환
useCallback(함수, 의존성배열) = useMemo(() =>함수, 의존성배열)

<useRef>

1. Reference(특정 컴포넌트에 접근할 수 있는 객체)를 사용하기 위한 Hook
2. refObject.current(현재 참조하고 있는 Element)
3. 내부의 데이터가 변경되었을 때 별도로 알리지 않음: Callback ref
