import React from 'react';
import { StarIcon } from "@heroicons/react/24/solid";

const CustomerReview = ({ user }) => {
  const { name, picture, company, Comment, rating } = user;

    return (
        <div>
             <div className="p-4">
      <div className="flex items-center ">
        <img className="w-20 rounded-full" src={picture} alt="Image" />
        <span className="ml-10">
          <div className="ml-[5px]">
            <h2 className="font-bold ">{name}</h2>
            <p className="font-normal text-gray-400">{company}</p>
          </div>
          <p className="flex items-center font-semibold mb-2">
            <StarIcon className="w-5 text-yellow-500 mr-2" />{" "}
            <span>{rating}/5</span>
          </p>
        </span>
      </div>
      <div className="mt-4">
        <p className="font-mono">"{Comment}"</p>
      </div>
    </div>
        </div>
    );
};

export default CustomerReview;