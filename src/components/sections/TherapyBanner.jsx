import React from 'react'
import PinkCard from '../snippets/PinkCard'

const TherapyBanner = () => {
  return (
    <section>
        <div className="therapy-banner">
            <div className="container">
                <div className="therapy-banner-ing">
                    <div className="top">
                        <h1>A Space to Come Together</h1>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <p><span className='big-pink'>I</span>n a world that moves too quickly, this is your quiet corner — a place where your thoughts slow down, your feelings land safely, and your story can be held with softness.</p>
                            <a href="#!">Book A Call</a>
                            <PinkCard></PinkCard>
                        </div>
                        <div className="right">
                            <div className="therapy-banner-img">
                                <img src="" alt="Image" className="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TherapyBanner