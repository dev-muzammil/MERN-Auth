import React, { useState } from "react";
import { Alert, Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    setUser({ ...user, [id]: value });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      if(res.ok){
        navigate('/sign-in')
      }else{
        setError(data.message)
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center pt-8">Sign Up</h1>
      <p className="text-xl text-center pt-2">
        SignUp to access all the amazing features!
      </p>
      {error && <Alert color='failure' className="max-w-[30%] mx-auto mt-2">{error}</Alert>}
      <div className="">
        <form
          className="flex max-w-md flex-col gap-4 mx-auto p-10"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="Username"
              required
              onChange={handleChange}
              value={user.username}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@company.com"
              required
              onChange={handleChange}
              value={user.email}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              id="password"
              type="password"
              required
              placeholder="********"
              onChange={handleChange}
              value={user.password}
            />
          </div>
          <Button className="bg-gradient-to-r from-pink-500 to-fuchsia-800 hover:bg-gradient-to-l" type="submit">
            Register
          </Button>
          <p>
            Already Have An Account?{" "}
            <Link to="/sign-in">
              <span className="text-blue-500 underline underline-offset-4">
                Sign In
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
