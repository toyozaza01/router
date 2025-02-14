import React from "react";
import My1 from "../images/My1.jpg"

const Infomation = () => {
  return (
    <>
      <div className="min-h-[6rem] min-w-[18rem] bg-neutral rounded-box shadow-2xl text-white p-4">
        <div className="card lg:card-side bg-base-100 shadow-xl transition duration-300 ease-in-out">
          <figure>
            <img
              src={My1}
              alt="Album"
              style={{height:'500px',width:'400px'}}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl">Name : Prapatsorn Chaiprom</h2>
            <h2 className="card-title text-4xl">Call me : Toyo</h2>
            <h2 className="card-title text-4xl">Age : 21 Year old</h2>
            <h2 className="card-title text-4xl">Studying : Computer Education KMUTNB</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infomation;
