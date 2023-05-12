import React from "react";

const Signup = () => {
  return (
    <div className="p-20">
      <h4>회원가입</h4>
      <form action="/api/post/signup" method="POST">
        <input name="id" type="text" placeholder="id" />
        <input name="password" type="password" placeholder="password" />
        <button type="submit">가입</button>
      </form>
    </div>
  );
};

export default Signup;
