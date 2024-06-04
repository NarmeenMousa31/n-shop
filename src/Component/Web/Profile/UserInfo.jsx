import React, { useContext } from "react";
import { UserContext } from "../Context/User";

export default function UserInfo() {
  const { userData, loading } = useContext(UserContext);

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div className="user-info">
      <h2>{userData.userName}</h2>
      <img src={userData.image.secure_url} />
    </div>
  );
}
