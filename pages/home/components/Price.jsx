import Pricedata from "./Pricedata";

const Price = () => {
    return (
        <section id="price">
            <div className="bg-slate-900 py-20 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    
                    <div className="md:text-center">
                        <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                            <span className="relative whitespace-nowrap">
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 281 40"
                                    preserveAspectRatio="none"
                                    className="absolute left-0 top-1/2 h-[1em] w-full fill-blue-400"
                                >
                                    {/* SVG path data */}
                                </svg>
                                <span className="relative">Simple pricing,</span>
                            </span>
                            for everyone.
                        </h2>
                        <p className="mt-4 text-lg text-slate-400">It doesn’t matter what size your business is, our software won’t work well for you.</p>
                    </div>
                    <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
                        {Pricedata.map((Pricedata, index) => (
                            <section key={index} className={`flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8 ${Pricedata.name.toLowerCase() === 'small business' ? 'bg-blue-500' : ''}`}>
                                <h3 className="mt-5 font-display text-lg text-white">{Pricedata.name}</h3>
                                <p className="mt-2 text-base text-slate-400">{Pricedata.description}</p>
                                <p className="order-first font-display text-5xl font-light tracking-tight text-white">{Pricedata.price}</p>
                                <ul role="list" className="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200">
                                    {Pricedata.features.map((feature, index) => (
                                        <li key={index} className="flex">
                                            <svg aria-hidden="true" className="h-6 w-6 flex-none fill-current stroke-current text-slate-400">
                                                {/* SVG path data */}
                                            </svg>
                                            <span className="ml-4">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a className={`group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 ${Pricedata.name.toLowerCase() === 'small business' ? 'text-blue-500 bg-white' : 'text-white'} ${Pricedata.name.toLowerCase() === 'starter' || Pricedata.name.toLowerCase() === 'enterprise' ? 'border-2 border-blue-500' : ''} hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8`} variant="outline" color="white" aria-label={`Get started with the ${Pricedata.name} Pricedata for ${Pricedata.price}`} href="/register">
                                    Get started
                                </a>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;
