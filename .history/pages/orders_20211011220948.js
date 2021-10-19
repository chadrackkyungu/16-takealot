import React, { useState, useEffect } from "react";
import db from "../Firebase";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

function Orders({ user }) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  // console.log(user.email);

  useEffect(() => {
    const getdata = [];

    const db_data = db
      .collection("users")
      .doc(user.email)
      .collection("orders")
      .orderBy("timestamp", "desc")
      .get();

    console.log(db_data);
  });

  return (
    <div>
      <h1> hey </h1>
    </div>
  );
}

export default Orders;
export const getServerSideProps = withPageAuthRequired();
