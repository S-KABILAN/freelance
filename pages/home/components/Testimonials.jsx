import Tweet from '../components/Tweet';

const Testimonial = ({ quote, author ,profession }) => {
    return (
      <div className="border-l-4 border-indigo-400 pl-4 mb-4">
        <p className="text-lg text-black-400">{quote}</p>
        <p className="text-indigo-400 mt-2">- {author}</p>
        <p className="sm:ml-2 text-sm text-gray-400">{profession}</p>
      </div>
    );
  };

const Testimonials = () =>{

    /* const tweets = [
        {
          text: 'U get to know so many tools, hacks If u are working for someone and managing their companys page Surely this hacks will come handy .U get to know so many tools, hacks If u are working for someone and managing their companys page Surely this hacks will come handy .U get to know so many tools, hacks If u are working for someone and managing their companys page Surely this hacks will come handy .',
          size: 'w-[300px] h-[400px]',
          photo: 'data:image/jpeg;base64,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',
          name: 'John Doe',
          profession: 'Web Developer',
        },
        {
          text: 'U get to know so many tools, hacks If u are working for someone and managing their companys page Surely this hacks will come handy .',
          size: 'w-[300px] h-[200px]',
          photo: 'url_to_photo',
          name: 'Jane Smith',
          profession: 'Graphic Designer',
        },
        
        
        // Add more tweets as needed
       
        
        // Add more tweets as needed
      ]; */

    return(
        
        <section id="testimonials" className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-20 xl:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                        <p className=" text-xl font-bold  tracking-widest purple1">Testimonials</p>
                        <h2 className="mt-6 text-3xl font-bold tracking-tight head-color1 sm:text-4xl lg:text-5xl">Our growing wall of love ❤️</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">These are the stories of some of our very early customers about their experience of using feather.</p>
                        
                        </div>
                        

                    </div>

                    {/* <div className='grid h-[500px]'>
          <div className=''>
        {tweets.map((tweet, index) => (
          <Tweet key={index} {...tweet} />
        ))}
       </div>
       
      </div> */}

      
      <div className="flex items-center justify-center   text-black">
      <div className="max-w-4xl p-11 rounded-lg shadow-lg bg-white">
        
        <div className="space-y-4">
          <Testimonial 
            quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna varius, blandit rhoncus sem." 
            author="John Doe" profession="Web developer" />
          <Testimonial 
            quote="Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt. Etiam in turpis faucibus, vehicula est suscipit, tincidunt tellus." 
            author="Jane Doe" profession="UI/UX Designer" />
          <Testimonial 
            quote="Vehicula est suscipit, tincidunt tellus. Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum." 
            author="Alex Smith" profession="Software Engineer" />
        </div>
      </div>
    </div>



                   
                    

                    
            </section>
            
    
    )
 }

 export default Testimonials;