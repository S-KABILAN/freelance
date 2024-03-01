
const Footer = () =>{
    return(
        <footer className="mt-auto bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    <div className="flex items-center justify-center">
                    <a href="/"><img alt="" src="https://cdn.feather.blog?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Flogo-full.svg&amp;optimizer=image" className="h-8 w-auto transition-all duration-500 group-hover:rotate-180"></img>

                    </a>
                        
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2.5">
                    <a href="#showcase" className="inline-block rounded-xl border border-transparent px-2.5 py-1 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300">Showcase</a>

                    <a href="#testimonials" className="inline-block rounded-xl border border-transparent px-2.5 py-1 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300">Reviews</a>
                    <a href="#price" className="inline-block rounded-xl border border-transparent px-2.5 py-1 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300">Pricing</a>


                    </div>

                    <div className="flex items-center justify-center space-x-4">

                    <a target="_blank" href="https://twitter.com/KabilanSelvaku2" className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-1.5 text-sm font-medium leading-6 text-primary-700 transition-all duration-200 hover:border-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2" rel="noopener"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23 3.30361C23 6.17647 21.3577 7.23529 21.3577 7.23529V8.0747C21.3577 14.1036 16.67 21 8.12676 21C5.47082 21 3.03622 20.2627 1 18.9614C3.44338 19.2607 5.91219 18.5817 7.86117 17.0964C5.82495 17.053 4.09859 15.7518 3.52314 13.9301C4.2429 14.0309 4.89236 14.0176 5.60362 13.8434C3.43329 13.4003 1.88531 11.4941 1.88531 9.33253C2.50503 9.67952 3.25754 9.85301 4.01006 9.89639C2.00439 8.60881 1.30896 5.84966 2.5493 3.8241C4.85111 6.55663 8.30382 8.37831 12.1549 8.59518C12.0664 8.24819 12.0221 7.90121 12.0221 7.55422C12.0221 5.03855 14.1026 3 16.67 3C17.998 3 19.1932 3.52048 20.0785 4.43133C21.0966 4.21446 22.1147 3.8241 23 3.30361Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>Follow us on Twitter</a>
                    <a target="_blank" href="https://www.linkedin.com/in/kabilan-s-3aab74256/" className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-1.5 text-sm font-medium leading-6 text-primary-700 transition-all duration-200 hover:border-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2" rel="noopener"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23 3.30361C23 6.17647 21.3577 7.23529 21.3577 7.23529V8.0747C21.3577 14.1036 16.67 21 8.12676 21C5.47082 21 3.03622 20.2627 1 18.9614C3.44338 19.2607 5.91219 18.5817 7.86117 17.0964C5.82495 17.053 4.09859 15.7518 3.52314 13.9301C4.2429 14.0309 4.89236 14.0176 5.60362 13.8434C3.43329 13.4003 1.88531 11.4941 1.88531 9.33253C2.50503 9.67952 3.25754 9.85301 4.01006 9.89639C2.00439 8.60881 1.30896 5.84966 2.5493 3.8241C4.85111 6.55663 8.30382 8.37831 12.1549 8.59518C12.0664 8.24819 12.0221 7.90121 12.0221 7.55422C12.0221 5.03855 14.1026 3 16.67 3C17.998 3 19.1932 3.52048 20.0785 4.43133C21.0966 4.21446 22.1147 3.8241 23 3.30361Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>Follow us on LinkedIn</a>

                    </div>

                    <p className="text-center text-xs font-medium text-gray-500">© 2023 Freelance-agency - All Rights Reserved</p>

                </div>

            </div>
        </footer>
    )
}

export default Footer;