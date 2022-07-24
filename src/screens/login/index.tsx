import React, { FormEvent } from "react";

interface Base {
  id: number;
}
interface Person extends Base {
  name: string;
}
const P: Person = { name: "1213", id: 1212 };

export const LoginScreen = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {};
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input value={"username"} type="text" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input value={"password"} type="password" />
      </div>
      <button type={"submit"}>登录</button>
    </form>
  );
};
