import React from "react";

// function Hello(props) {
//     return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>;
// }
// export default Hello;

function Hello({ color, name, isSpecial }) {
    return (
        <div style={{ color }}>
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name: "이름없음",
};
export default Hello;
