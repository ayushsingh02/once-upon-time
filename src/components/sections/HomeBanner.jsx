import React from 'react'
import PinkCard from '../snippets/PinkCard'
const HomeBanner = () => {
  return (
    <div className='home-banner'>
<div className="container">
    <div className="home-banner-in">
        <div className="left">
            <h1>Therapy That Feels Like Coming Home</h1>
        </div>
        <div className="center">
            <div className="home-banner-img">
                <img src="" alt="Image" className="img" />
            </div>
            <PinkCard></PinkCard>
        </div>
        <div className="right">
            <p><span className='big-pink'>I</span>n a world that moves too quickly, this is your quiet corner — a place where your thoughts slow down, your feelings land safely, and your story can be held with softness.</p>
            <a href="#!" className="primary-btn">Book A Call</a>
        </div>
    </div>
</div>
    </div>
  )
}

export default HomeBanner