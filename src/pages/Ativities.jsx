import React from "react";
import Openhouse from "../images/Openhouse.jpg"
const Ativities = () => {
  return (
    <div>
      <div className=" min-h-[6rem] min-w-[18rem] bg-neutral rounded-box shadow-2xl text-white p-4">
        <div className="card lg:card-side bg-base-100 shadow-xl transition duration-300 ease-in-out">
          <figure>
            <img
              src={Openhouse}
              alt="Album"
              style={{ height: "400px", width: "700px" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl">ComEdu Open House</h2>
            <h2 className="card-title text-4xl">KMUTNB</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ativities;
