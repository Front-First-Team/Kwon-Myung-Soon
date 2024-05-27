강의를 다 듣고, 예제도 다 풀었는데, 정리를 못했습니다. markdown파일도 처음 써봐서 익숙하지도 않았습니다. 처음 1장~7장까지만, 제가 중간중간 메모 한 것과 capture한 화면으로 정리하겠습니다. 8장부터는 잘 정리 하겠습니다.

<React란>

1. 라이브러리: 자주 사용되는 기능들을 정리해 모아 놓은 것
2. 사용자 인터페이스 (User Interface, UI)
3. UI 라이브러리
4. 프레임워크: 제어권한이 프레임워크 자신에게 있다.
5. 라이브러리: 제어권한이 사용자에게 있다.
6. React는 사용자와 웹사이트의 상호작용을 돕는 인터페이스를 만들기 위한 자바스크립트 기능 모음집
7. React = SPA (Single Page Application)

https://1drv.ms/i/s!Am7E4OavQN-8gS5JQK7h8c_odly4?e=O7okav

<React의 장점>

1. 빠른 update(Virtual DOM)과 랜더링
2. Component-Based
3. 재사용성(의존성을 낮추고, 호환이 잘되게) - 개발기간 단축, 유지보수 용이

<JSX>

1. A Syntax extension to Javascript: 자바스크립트 확장 문법
2. JS + XML/HTML
3. Component구성, DOM Rendering, elements, props
4. JSX의 장점: 간결한 코드, 가독성 향상, 버그발견용이, injection attacks방어

<Element>

1. React앱을 구성하는 가장 작은 블럭들
2. 자바스크립트 객체 형태 ({type, props,...children})
3. 불변성

<Props>

1. Property(속성)
2. Component의 속성: 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체
3. 특징: read only, pure, impure

<Component>

1. Function Component : hook에서 정의
2. Class Componet : Constructor(생성자)가 정의

<State>

1. React Component의 상태(데어터): 변경가능한 테이터
2. 개발자가 정의
3. 랜더링이나 데이터 흐름에 사용되는 값만 state에 포함
4. JS의 객체
5. 직접 수정은 안되고, setState을 사용해서 수정

<Hooks>

1. useState
2. useEffect
3. useRef


Hook으로 들어가니 개념이 점점 어려워졌다.  수업시간에 잘 이해했으면 좋겠다.


https://1drv.ms/f/s!Am7E4OavQN-8gThNxmOKp0KwycN0?e=iCKHDZ

