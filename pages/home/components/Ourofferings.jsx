import React from "react";
import offeringsData from "./componentsdata/Ourofferingsdata";

const Ourofferings = () => {
  return (
    <div className="pt-11 bg-slate-900 pb-20 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight head-color sm:text-4xl lg:text-5xl">Freelance-agency Offerings</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-white lg:text-xl lg:leading-8">We can do many things and can help you build the following:</p>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-2 md:gap-12 xl:gap-16">
        {offeringsData.map((offering) => (
          <div key={offering.id} className="flex gap-5">
            <div className="flex-1">
              <h3 className="text-xl font-bold purple1">{offering.title}</h3>
              <h4 className="mt-2 text-base font-normal text-white">{offering.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourofferings;
