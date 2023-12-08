import React from 'react'
import './Home.css'

function Home() { 
    return (
        <div className='home-container'>
            <div className='big-img-view'>
                <img src='./src/assets/iphone-banner.png'></img>

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
                        <h1>iPhone 15 Pro</h1>
                        <p>Titanium. So strong. So light. So Pro.</p>
                        
                        <a>Learn More</a> <span> &gt;</span>
                        <a>Buy</a><span> &gt;</span>
                    </div>
                </div>
                <div className='med-img-view'>
                    <img src='./src/assets/macbook-pro.png'></img>

                     <div className='med-info'>
                        <h1 style={{color: "black"}}>MacBook Pro</h1>
                        <p style={{color: "black"}}>Mind-blowing. Head-turning.</p>
                        
                        <a>Learn More</a> <span> &gt;</span>
                        <a>Buy</a><span> &gt;</span>
                    </div>
                </div>
            </div>
            
            <div className='med-container'>
                <div className='med-img-view'>
                    <img src='./src/assets/watch-ultra.png'></img>

                    <div className='med-info'>
                        <h1 style={{ color: 'transparent' }}>MacBook Pro</h1>
                        <p style={{color: "black"}}>Next level adventure.</p>
                        
                        <a>Learn More</a> <span> &gt;</span>
                        <a>Buy</a><span> &gt;</span>

                    </div>
                </div>
                <div className='med-img-view'>
                    <img src='./src/assets/airpods-pro.png'></img>

                    <div className='med-info'>
                        <h1>AirPods Pro</h1>
                        <p>Adaptive Audio. Now Playing</p>
                        
                        <a>Learn More</a> <span> &gt;</span>
                        <a>Buy</a><span> &gt;</span>

                    </div>
                </div>
            </div>
            <div className='med-container'>
                <div className='med-img-view'>
                    <img src='./src/assets/apple-card.png'></img>

                    <div className='med-info'>
                        <h1 style={{color: "transparent"}}>AirPods Pro</h1>
                        <p style={{color: "black"}}>Get up to 3% Daily Cash Back</p>
                        <p style={{color: "black"}}>with every purchase.</p>
                        
                        <a>Learn More</a> <span> &gt;</span>
                        <a>Buy</a><span> &gt;</span>
                    </div>
                </div>
                <div className='med-img-view'>
                    <img src='./src/assets/trade-in-screen.png'></img>

                    <div className='med-info'>
                        <h1 style={{color: "transparent"}}>AirPods Pro</h1>
                        <p style={{color: "black"}}>Get $200-$650 in credit when</p>
                        <p style={{color: "black"}}>you trade in iPhone 11 or higher.²</p>
                        
                        <a>Learn More</a> <span> &gt;</span>
                        <a>Buy</a><span> &gt;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;