import React from "react";

const Infomation = () => {
  return (
    <div className="min-h-[6rem] min-w-[18rem] bg-neutral rounded-box shadow-2xl text-white p-4">
      <div className="text-4xl m-3">Information</div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-center">
          <img
            src="./src/images/My3.jpg"
            alt=""
            style={{ width: "300px" }}
            className="rounded-box shadow-2xl"
          />
        </div>
        <div className="bg-[#f3f4f6] rounded-box shadow-2xl p-8 text-black flex justify-start grid grid-rows-4 grid-flow-col ">
          <div className="text-4xl flex justify-start">
            Name : Prapatsorn Chaiprom
          </div>
          <div className="text-4xl flex justify-start">
            Age : 21
          </div>
          <div className="text-4xl flex justify-start">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infomation;
