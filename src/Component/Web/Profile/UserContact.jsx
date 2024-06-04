import React, { useContext } from "react";
import { UserContext } from "../Context/User.jsx";

export default function UserContact() {
    const { userData, loading } = useContext(UserContext);

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <h2>{userData?.email}</h2>
      <h2>{userData?.phone}</h2>
    </div>
  );
}
