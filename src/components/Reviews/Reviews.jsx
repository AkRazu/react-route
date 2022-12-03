import React, { useEffect, useState } from "react";
import "./Reviews.css";
import Person from "../Person/Person";

const Reviews = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("user.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
    <h1 className="text-2xl mb-2 text-center">Customer Reviews</h1>
    <hr className="text-2xl mb-10 " />
      <div className="md:grid grid-cols-3 gap-10">
        {users.slice(0,3).map((user) => (
          <Person key={user.id} user={user} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
      <button className="bg-[#F55155] uppercase text-white font-medium py-3 px-6">See All Reviews</button>
      </div>
    </>
  );
};

export default Reviews;
