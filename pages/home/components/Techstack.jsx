import React from "react";
import techStackData from "./Techstackdata.js";

const Techstack = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 mb-20">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight head-color1 sm:text-4xl lg:text-5xl">Our TechStack</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">We are flexible in choosing tech stack. But our favorite tech stacks below.</p>
        </div>
      </div>

      <div className="mt-16 mb-20 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-8">
        {techStackData.map((tech, index) => (
          <div key={index} className="group relative bg-info transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 flex justify-center">
            <div className="relative space-y-4 py-12 p-8">
              <tech.Icon className="md:text-4xl text-x2l" style={{ fontSize: '7rem' }} color={tech.color} />
              <p className="text-center text-lg font-semibold text-gray-800 mt-4">{tech.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techstack;
