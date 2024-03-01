import React from "react";
import whyData  from "./Whydata";
const Why = () => {
  return (
    <section id="why" className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xl font-bold tracking-widest purple1">Why our freelance platform</p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight head-color1 sm:text-4xl lg:text-5xl">Smoothly create your content machine</h2>
          <p className="mx-auto mt-4 text-gray-700 lg:leading-8">Freelance-agency is a simple yet powerful platform that helps create superfast projects with Notion as a CMS. It's just set and forget!</p>
        </div>
      </div>


      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-2 md:gap-12 xl:gap-16">
        {whyData.map((reason) => (
            <div key={reason.id} className="flex gap-5">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-slate-900">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 shrink-0 text-white">
                        {/* Depending on your design, you can use different icons for each reason */}
                        <path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 9.79086 17.5228 8 12 8C6.47715 8 2 9.79086 2 12M22 12C22 14.2091 17.5228 16 12 16C6.47715 16 2 14.2091 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold head-color1">{reason.title}</h3>
                    <p className="mt-2 text-base font-normal text-gray-700">{reason.description}</p>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
 