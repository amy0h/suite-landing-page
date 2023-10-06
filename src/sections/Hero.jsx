import React from 'react'
import StatisticsCard from '../components/StatisticsCard'

const Hero = () => {
  return (
    <section>
        <div>
            <h2>
                A <span>super solution</span> for your <span>business.</span>
            </h2>
            <p>
                Our marketing and sales automations help you scale your outreach
                to get more leads for your company.
            </p>
            <button>
                Request Beta Access
            </button>
        </div>

        <img
            src="./assets/image-hero-portrait.png"
            alt="Hero Image"
            class="block md:hidden" 
        />

        <img
            src="./assets/image-hero-landscape.png"
            alt="Hero Image"
            class="hidden md:block" 
        />
        <StatisticsCard />
        
        <div>
            <h3>
                2K+
            </h3>
        </div>
    </section>
  )
}

export default Hero