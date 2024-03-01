import React from "react";
import projectData from "./Ourworkdata";
const Ourwork = () => {
  return (
    <section id="showcase" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-9 text-xl font-bold  tracking-widest purple1">Showcase</p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 head-color sm:text-4xl lg:text-5xl">Beautiful &amp; complex projects built by our agency</h2>
          <h3 className="mx-auto mt-4 max-w-2xl text-lg font-normal text-white lg:text-xl lg:leading-8">Check out these projects and discover Our's works.</h3>
        </div>

        <ul className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-x-10 gap-y-12 sm:mt-12 sm:grid-cols-2 lg:mt-16 xl:grid-cols-3">
          {projectData.map((project) => (
            <li key={project.id} className="group relative transition-all duration-200 hover:-translate-y-1">
              <div className="aspect-w-16 aspect-h-10 overflow-hidden rounded-2xl border border-gray-100 h-[200px] bg-slate-600">
                {/* Replace 'project.imageUrl' with your actual image URL */}
                <img src={project.imageUrl} alt={project.name} className="object-cover w-full h-full" />
              </div>
              <div className="mt-4 flex items-start justify-between space-x-6">
                <div className="flex-1">
                  <p className="text-lg font-bold text-gray-900">{project.name}</p>
                  <p className="mt-0.5 text-sm font-normal text-gray-600">{project.developer}</p>
                </div>
              </div>
              <div className="shrink-0">
                <a href="" className="flex items-center gap-2 text-gray-900 opacity-0 transition-all duration-200 group-hover:opacity-100">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Ourwork;
