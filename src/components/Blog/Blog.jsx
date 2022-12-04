import React from "react";
import api from "../images/Api.png";
import tag from "../images/tag.png";
import inline from "../images/inline.jpg";

const Blog = () => {
  return (
    <div className="md:mx-52 my-10">
      <h1 className="text-6xl font-bold text-center text-[#131313]">
        The Blog
      </h1>
      {/* What is Context Api ? */}
      <div className="md:grid grid-cols-2 my-10 border-2 rounded-md h-auto p-4">
        <div className="flex justify-center items-center">
          <img className="w-40" src={api} alt="Api" />
        </div>
        <div className="flex items-center">
          <div>
            <h1 className="text-4xl font-medium mb-10">
              What is Context Api ?
            </h1>
            <p className="text-gray-700">
              Context api is a component structure. Which allows us to share
              data across all levels of the from parent to children nested deep
              down the component tree directly.Instead of passing it down
              through a chain of props.
              <span className="ml-2 text-gray-400">Jun 4, 2022 </span>
            </p>
          </div>
        </div>
      </div>

      <div className="md:grid grid-cols-2 gap-10 my-10  h-auto">
        {/* What is semantic tag ? */}
        <div className="border-2 rounded-md p-4">
          <div className="flex justify-center items-center">
            <img className="w-40" src={tag} alt="Api" />
          </div>
          <div className="flex items-center">
            <div>
              <h1 className="text-4xl font-medium mb-10 text-center">
                What is semantic tag ?
              </h1>
              <p className="text-gray-700">
                Context api is a component structure. Which allows us to share
                data across all levels of the from parent to children nested
                deep down the component tree directly.Instead of passing it down
                through a chain of props.
              </p>
            </div>
          </div>
        </div>
        {/* What is semantic tag ? */}
        <div className="border-2 rounded-md p-4">
          <div className="flex justify-center items-center">
            <img className="w-56 " src={inline} alt="Api" />
          </div>
          <div className="flex items-center">
            <div>
              <h1 className="text-4xl font-medium mb-10 text-center">
                What is inline block inline ?
              </h1>
              <p className="text-gray-700">
                Compared to display: inline , the major difference is that
                display: inline-block allows to set a width and height on the
                element. Also, with display: inline-block , the top and bottom
                margins/paddings are respected, but with display: inline they
                are not.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
