

const Footer = () =>{
    return(
        <footer className="mt-auto bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    <div className="flex items-center justify-center">
                    <a href="/"><img alt="" src="https://cdn.feather.blog?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Flogo-full.svg&amp;optimizer=image" class="h-8 w-auto transition-all duration-500 group-hover:rotate-180" className="h-8 w-auto transition-all duration-500 group-hover:rotate-180"></img>

                    </a>
                        
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2.5">

                    <a href="/Why" class="inline-block rounded-xl border border-transparent px-2.5 py-1 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300">Pricing</a>

                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer