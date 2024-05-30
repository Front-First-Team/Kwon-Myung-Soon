import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <botton onClick={onCreate}>등록</botton>
        </div>
    );
}
export default CreateUser;
