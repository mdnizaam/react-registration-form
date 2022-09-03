import React, { useState } from "react";

const Registration = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    setInput({
      fullname: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <h1>Registration Form</h1>
        <div className="form-input">
          <label>Fullname</label>
          <input
            type="text"
            name="fullname"
            value={input.fullname}
            onChange={inputHandler}
          />
        </div>
        <div className="form-input">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={inputHandler}
          />
        </div>
        <div className="form-input">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={inputHandler}
          />
        </div>
        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
