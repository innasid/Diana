import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Dashboard() {
  // Access user data from the Redux store
  const { username } = useParams();
  const user = useSelector((state) => state.user);

  // Check if the user is logged in
  if (!user) {
    return (
      <div>
        <p>You are not logged in.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>This is your Dashboard.</p>
    </div>
  );
}

export default Dashboard;