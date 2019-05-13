import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const Home = () => {
  return (
    <ParallaxBanner
      className="home-image"
      layers={[
        {
            image: 'https://www.hallevans.com/wp-content/uploads/2019/02/SLC_Media.jpg',
            amount: 0.4,
        },
      ]}
      style={{
        height: '650px',
      }}
    >
      <div className="name-style">
        <h3>Hello, I'm</h3>
        <h1>Josh Higgins</h1>
      </div>
    </ParallaxBanner>
  )
}

export default Home;