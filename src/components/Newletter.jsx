import React from "react";

const Newletter = () => {
  return (
    <div className="py-16 w-full text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimise your flow?
          </h1>
          <p>Sign up to our newletters to stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="text"
              placeholder="Enter email here"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Notify Me
            </button>
          </div>
          <p>
            We care about the privacy of your data. Read our
            <span className="text-[#00df9a] underline">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
