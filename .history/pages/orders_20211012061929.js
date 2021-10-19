import React, { useState, useEffect } from "react";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

function Orders({ user }) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  // useEffect(() => {

  //   db.collection("users")
  //     .doc(user.email)
  //     .collection("orders")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) =>
  //       setPosts(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: data.data(),
  //         }))
  //       )
  //     );
  // }, [user.email]);
  useEffect(() => {
    async function dataDB() {
      const user = await getDocs(collection(db, "users"));
      user.forEach((doc) => {
        setPosts(doc.data());
      });
    }
    dataDB();
  }, [user.email]);

  console.log(posts);

  return (
    <div>
      <h1> hey </h1>
    </div>
  );
}

export default Orders;
export const getServerSideProps = withPageAuthRequired();
