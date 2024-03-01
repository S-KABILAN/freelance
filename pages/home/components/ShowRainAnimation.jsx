import React, { useEffect } from 'react';
import { Star } from 'lucide-react';

const SnowRainAnimation = () => {
  useEffect(() => {
    const canvas = document.getElementById('snowCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let particles = [];
    const colors = ['#ccc', '#eee', '#fff', '#ddd'];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Adjust the maximum size of snow to 1.5 for a more subtle effect
        this.size = Math.random() * 1.5; 
        this.speedY = Math.random() * 3 + 1; // Increased the speed for faster animation
        this.color = colors[Math.floor(Math.random() * colors.length)];
        // Horizontal movement for dynamic flow
        this.speedX = Math.random() > 0.5 ? Math.random() * 2 : -Math.random() * 2; 
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
        if (this.x > canvas.width || this.x < 0) {
          this.speedX *= -1;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < 200; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    init();
    animate();
  }, []);

  return (
    
    <div className="bg-black min-h-screen flex items-center justify-center">
      <canvas id="snowCanvas"></canvas>
      <div className="absolute text-center">
        
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-11 ">
            
            <div className="mx-auto pt-9 max-w-xl text-center lg:max-w-4xl">
                <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent dark:bg-gradient-to-r bg-gradient-to-tr dark:from-white from-black to-neutral-600 dark:to-neutral-800 capitalize md:max-w-3xl lg:max-w-5xl">Get MVP in 15 Days</h1>
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


            <div className="py-8 mt-16 pb-32 border-y border-gray-800 sm:flex flex-col sm:flex-row justify-between items-center">
            <div className="text-center flex-1 mb-4 sm:mb-0"><h6 className="text-lg font-semibold text-white">SaaS Platforms</h6><p className="mt-2 text-gray-500 px-4">Have a SaaS Product idea? We got you. We will build your SaaS product.</p></div>
            <div className="text-center flex-1 mb-4 sm:mb-0"><h6 className="text-lg font-semibold text-white">Mobile &amp; Web Apps</h6><p className="mt-2 text-gray-500 px-4">Want to launch Mobile or Web Apps? No problem. We will make it happen.</p></div>
            <div className="text-center flex-1"><h6 className="text-lg font-semibold text-white">AI Apps</h6><p className="mt-2 text-gray-500 px-4">Have an AI platform idea? We will build that for you. And help you launch.</p></div>

            </div>
            </div>

            

            
 

        </div>
        
      </div>
    
  );
};

export default SnowRainAnimation;