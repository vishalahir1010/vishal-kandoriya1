import React from 'react'
import "../assets/style.css"

const Home = ({title,vk}) => {
    
    
  return (
   <>
   
   <header>
    {title}

   
</header>

<section className="hero">
    <div className="hero-text">
        <h1>Build Your Dream Website</h1>
        <p>
            Create stunning websites with modern design,
            fast performance, and responsive layouts.
        </p>

        <a href="#" className="btn">Get Started</a>
    </div>

    <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800" alt="Hero Image"/>
    </div>
</section>

<section className="features">
    <h2>Why Choose Us?</h2>

    <div className="cards">
        <div className="card">
            <h3>Fast Performance</h3>
            <p>Optimized websites for speed and efficiency.</p>
        </div>

        <div className="card">
            <h3>Responsive Design</h3>
            <p>Looks perfect on mobile, tablet, and desktop.</p>
        </div>

        <div className="card">
            <h3>Modern UI</h3>
            <p>Professional and attractive user interface.</p>
        </div>
    </div>
</section>
{vk?
<footer>
    <p>© 2026 MyBrand. All Rights Reserved.</p>
</footer>:"no"
}
   
   </>
  )
}

export default Home
