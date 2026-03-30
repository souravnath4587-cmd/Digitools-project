import React from "react";

const Card = ({ data }) => {
  return (
    <div>
      <div className="sectionContent">
        <div className="card bg-base-100  shadow-sm relative">
          <div class="badge badge-primary absolute top-4 right-4 p-2">
            {data.id}
          </div>
          <figure className="px-10 pt-10 ">
            <div className="rounded-full p-4 bg-[#F3E8FE]">
              <img src={data.img} alt="Shoes" className="" />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{data.title}</h2>
            <p>{data.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
