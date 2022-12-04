import React from "react";
import { PuffLoader } from "react-spinners";
import CustomerReview from "../CustomerReview/CustomerReview";
import useHookUser from "../HookUser/HookUser";
import ClipLoader from "react-spinners/ClipLoader";

const MainReview = () => {
  const [users, setUsers] = useHookUser([]);
  return (
    <div className=" w-auto h-screen">
      <>
        {users ? (
          <div className="md:grid grid-cols-3 gap-10 md:mx-52 md:my-10">
            {users.map((user) => (
              <CustomerReview key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <PuffLoader color="#F55155" size={80} />
          </div>
        )}
      </>
    </div>
  );
};

export default MainReview;
