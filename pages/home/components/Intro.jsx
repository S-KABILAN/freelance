
import React from "react"
import Image from "next/image"

const Intro = () => {
    return(

        <div className=" overflow-hidden relative">
      {[...Array(150).keys()].map((i) => (
        <div
          key={i}
          className="snowflake absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${-10 - Math.random() * 20}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      <style>
        {`
          .snowflake {
            width: 10px;
            height: 10px;
            background-color: rgba(255, 255, 255, 0.8);
            opacity: 0.5;
            border-radius: 50%;
            will-change: transform;
            animation-name: fall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @keyframes fall {
            0% {transform: translateY(0) scale(0.2);}
            30% {opacity: 1;}
            to {
              transform: translateY(100vh) scale(1);
              opacity: 0;
            }
          }
        `}
      </style>


        <div className=" bg-slate-900">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-11 ">
            
            <div className="mx-auto pt-9 max-w-xl text-center lg:max-w-4xl">
                <h1 class="text-3xl font-bold sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent dark:bg-gradient-to-r bg-gradient-to-tr dark:from-white from-black to-neutral-600 dark:to-neutral-800 capitalize md:max-w-3xl lg:max-w-5xl">Get MVP in 15 Days</h1>
                <h2 className="mt-4 text-lg font-normal leading-7 bg-clip-text text-transparent dark:bg-gradient-to-r bg-gradient-to-tr dark:from-white from-black to-neutral-600 dark:to-neutral-800  sm:text-xl lg:mx-auto lg:max-w-3xl xl:text-2xl xl:leading-9">With a budget-friendly and fixed pricing, we'll craft, build,
and bring your idea to life within a 15 days. </h2>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center lg:mt-10">
                <a href="" className="inline-flex h-12 items-center justify-center rounded-xl border border-transparent bg-primary-900 px-6 py-2.5 text-base font-semibold text-white transition-all duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 btn-bg-1" role="button">
                      See Our Work

                </a>

                <a href="" className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-300 px-6 py-2.5 text-base font-semibold text-white transition-all duration-200 hover:border-gray-500 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 " role="button">
                    Contact us

                </a>
            </div>

            {/* <div className="mx-auto mt-8 max-w-xs md:flex md:max-w-lg md:flex-col md:items-center md:justify-center md:space-y-4 lg:mt-12">
                <div className="flex shrink-0 justify-center -space-x-3 overflow-hidden">

                    <img alt="Roberto" src="https://cdn.feather.blog?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Froberto.png&amp;optimizer=image" class="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"></img>
                    <img alt="Anthony" src="https://cdn.feather.blog?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Fanthony.png&amp;optimizer=image" class="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"></img>
                    <img alt="Damon" src="https://cdn.feather.blog?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Fdamon.png&amp;optimizer=image" class="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"></img>
                    <img alt="Ayush" src="https://cdn.feather.blog?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Fayush.png&amp;optimizer=image" class="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"></img>
                    <img alt="Alex MacCaw" src="https://cdn.feather.blog?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Falex.png&amp;optimizer=image" class="inline-block h-10 w-10 rounded-full ring-2 ring-primary-100"></img>
                    <img alt="Tibo" src="https://cdn.feather.blog?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Ftibo.png&amp;optimizer=image" class="inline-block h-10 w-10 rounded-full ring-2 ring-primary-100"></img>
                    <img alt="Corey Haines" src="https://cdn.feather.blog?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Fcorey.png&amp;optimizer=image" class="inline-block h-10 w-10 rounded-full ring-2 ring-primary-100"></img>
                    <img alt="Vensy" src="https://cdn.feather.blog?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Fvensy.png&amp;optimizer=image" class="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"></img>
                    <img alt="Tom" src="https://cdn.feather.blog?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Ftom.png&amp;optimizer=image" class="inline-block h-10 w-10 rounded-full ring-2 ring-primary-100"></img>
                </div>

                <p className="mt-4 text-center text-base text-white md:mt-0 md:ml-4"><span class="block">Join<span class="font-semibold">175+ creators, and new-age startups</span> </span><span class="block">and start publishing your content today</span></p>

                <p></p>
            </div> */}

            <div className="py-8 mt-16 pb-32 border-y border-gray-800 sm:flex flex-col sm:flex-row justify-between items-center">
            <div className="text-center flex-1 mb-4 sm:mb-0"><h6 class="text-lg font-semibold text-white">SaaS Platforms</h6><p class="mt-2 text-gray-500 px-4">Have a SaaS Product idea? We got you. We will build your SaaS product.</p></div>
            <div className="text-center flex-1 mb-4 sm:mb-0"><h6 class="text-lg font-semibold text-white">Mobile &amp; Web Apps</h6><p class="mt-2 text-gray-500 px-4">Want to launch Mobile or Web Apps? No problem. We will make it happen.</p></div>
            <div className="text-center flex-1"><h6 class="text-lg font-semibold text-white">AI Apps</h6><p class="mt-2 text-gray-500 px-4">Have an AI platform idea? We will build that for you. And help you launch.</p></div>

            </div>
            </div>

            

            
 

        </div>
        </div>

    )
    
}

export default Intro 