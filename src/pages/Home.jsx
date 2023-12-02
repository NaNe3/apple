import React from 'react'
import './Home.css'

function Home() { 
    return (
        <div className='home-container'>
            <div className='big-img-view'>
                <img src='./src/assets/phone-huge.png'></img>

                <div className='view-info'>
                    <h1>iPhone 15</h1>
                    <p>New camera. New design. Newphoria</p>
                    <div className='view-options'>
                        <a>Learn More</a> <span> &gt;</span>
                        <a>Buy</a><span> &gt;</span>
                    </div>
                </div>
            </div>

            <div className='med-container'>
                <div className='med-img-view'>
                    <img src='./src/assets/iphone-pro.png'></img>

                    <div className='med-info'>

                    </div>
                </div>
                <div className='med-img-view'>
                    <img src='./src/assets/iphone-pro.png'></img>

                    <div className='med-info'>

                    </div>
                </div>
            </div>
            
            <div className='med-container'>
                <div className='med-img-view'>
                    <img src='./src/assets/'></img>

                    <div className='med-info'>

                    </div>
                </div>
                <div className='med-img-view'>
                    <img src='./src/assets/'></img>

                    <div className='med-info'>

                    </div>
                </div>
            </div>
            <div className='med-container'>
                <div className='med-img-view'>
                    <img src='./src/assets/'></img>

                    <div className='med-info'>

                    </div>
                </div>
                <div className='med-img-view'>
                    <img src='./src/assets/'></img>

                    <div className='med-info'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;