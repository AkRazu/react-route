import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import useHookUser from "../HookUser/HookUser";

const MainReview = () => {
  const [users, setUsers] = useHookUser([]);
  return (
    <div>
      <>
        <div className="md:grid grid-cols-3 gap-10 md:mx-52 md:my-10">
          {users.map((user) => (
            <CustomerReview key={user.id} user={user} />
          ))}
        </div>
      </>
    </div>
  );
};

export default MainReview;
