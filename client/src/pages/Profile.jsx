import React from "react";
import { useSelector } from "react-redux";
import { Label, TextInput } from "flowbite-react";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-center text-4xl font-semibold mt-4">
        Hi, <span className="text-fuchsia-700">{currentUser.username}</span>{" "}
        Welcome to MERN AUTH App!
      </h1>
      <div className="flex max-w-md flex-col gap-2">
        <Label htmlFor="">Username</Label>
        <TextInput type="text" disabled placeholder={currentUser.username} />
        <Label htmlFor="">Email</Label>
        <TextInput
          type="text"
          disabled
          readOnly
          placeholder={currentUser.email}
        />
      </div>
    </div>
  );
};

export default Profile;
