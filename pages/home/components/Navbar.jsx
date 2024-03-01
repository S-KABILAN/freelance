// components/Navbar.js
import Link from "next/link";
import React, { useEffect } from 'react';
import { Star } from 'lucide-react';

const Navbar = () => {

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
      
      <div className="relative flex items-center justify-between p-8 bg-black">
        <div className="lg:hidden">
          <button type="button" class="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white p-2 text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </button>
          </div>
          <div className="relative z-10 shrink-0 b">
            <a href="/" title="Feather" class="flex bg-white"><img alt="Feather Logo" src="https://cdn.feather.blog?src=https%3A%2F%2Ffeather.so%2Fbuild%2F_assets%2Flogo-full-W6NCDN3K.svg&amp;optimizer=image" class="block h-8 w-auto">
              </img>
              </a>
              </div>
              <div className="hidden lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center lg:gap-4">
               <Link href="#price" className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium text-white">
                  Pricing</Link>
                  <Link href="#testimonials" className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium text-white">
                    testimonials
                    </Link>
                    <Link href="./home/components/Affiliates" className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium text-white">
                    Affiliates
                      </Link>
                      <Link href="#showcase" className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium text-white">
                        Our Work
                        </Link>
                        <Link href="#why" className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium text-white">
                          How We Work
                          </Link>
                          </div>
                          <div className="relative z-10 flex items-center gap-x-3">
                            <div className="hidden sm:block">
                              <Link href="" className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-base font-semibold text-white transition-all duration-200 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 btn-bg-2">
                                Contact Us
                                </Link>
                                </div>
                                
                                  </div>
                                  </div>

      
    )
  }
  
  export default Navbar;
  