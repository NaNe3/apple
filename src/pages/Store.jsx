import React, { useEffect } from 'react'
import './Store.css'

function Store() {
    useEffect(() => {
        document.title = "Apple Store Online - Apple"
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id='store-container'>
            <div className='full-page'>
                <div className='store-intro'>

                    <div>
                        <h1 className="store-head gray"><span className='red'>Store.</span> The holidays are here.</h1>
                        <h1 className="store-head gray">Wonder awaits.</h1>
                    </div>

                    <div className='helpful-container'>
                        <div className='helpful'>
                            <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202311?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1696434169893'></img>
                            <div>
                                <p>Need shopping help?</p>
                                <a className='store-link'>Ask a specialist</a>
                            </div>
                        </div>
                        <div className='helpful'>
                            <img src='#'></img>
                            <div>
                                <p>Visit an Apple Store</p>
                                <a className='store-link'>Find one near you <span> &gt;</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>

            <div className='slide' style={{marginBottom: "110px"}}>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-mac.png'></img>
                    <p>Mac</p>
                </div>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-phone.png'></img>
                    <p>iPhone</p>
                </div>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-ipad.png'></img>
                    <p>iPad</p>
                </div>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-watch.png'></img>
                    <p>Apple Watch</p>
                </div>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-airpods.png'></img>
                    <p>AirPods</p>
                </div>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-tags.png'></img>
                    <p>AirTag</p>
                </div>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-tv.png'></img>
                    <p>Apple TV 4K</p>
                </div>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-pod.png'></img>
                    <p>HomePod</p>
                </div>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-acc.png'></img>
                    <p>Accessories</p>
                </div>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-card.png'></img>
                    <p>Apple Gift Card</p>
                </div>
            </div>

            <div className='slide-container'>
                <p className='slide-top gray'><span className='red'>The latest.</span> Gifts for that special everyone.</p>
                <div className='slide'>
                    <div className='slide-item'>
                        <div className='slide-info'>
                            <p>NEW</p>
                            <h2>iPhone 15 Pro</h2>
                            <h3>From $999 or $41.62/mo. for 24 mo.*</h3>
                        </div>
                        <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696863030449' />
                    </div>
                    <div className='slide-item'>
                        <div className='slide-info'>
                            <p>NEW</p>
                            <h2>Apple Watch Series 9</h2>
                            <h3>From $399 or $33.25/mo. for 12 mo</h3>
                        </div>
                        <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696865069259' />
                    </div>
                    <div className='slide-item'>
                        <div className='slide-info'>
                            <p>NEW</p>
                            <h2>Macbook Pro</h2>
                            <h3>From $1599 or $133.25/mo. for 12/mo.*</h3>
                        </div>
                        <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696872235281' />
                    </div>
                    <div className='slide-item'>
                        <div className='slide-info'>
                            <p>NEW</p>
                            <h2>iPhone 15</h2>
                            <h3>From $799 or $33.29/mo. for 24 mo.*</h3>
                        </div>
                        <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-15-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1698188084112' />
                    </div>
                    <div className='slide-item'>
                        <div className='slide-info'>
                            <p>NEW</p>
                            <h2>Apple Watch Ultra 2</h2>
                            <h3>From $799 or $66.58/mo. for 24 mo.*</h3>
                        </div>
                        <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-watch-ultra-2-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1698766696911' />
                    </div>
                    <div className='slide-item'>
                        <div className='slide-info'>
                            <p style={{color: "transparent"}}>NEW</p>
                            <h2>iPad Air</h2>
                            <h3>From $599 or $49.91/mo. for 24 mo.*</h3>
                        </div>
                        <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-ipad-air-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696863032946' />
                    </div>
                    <div className='slide-item'>
                        <div className='slide-info'>
                            <p style={{color: "transparent"}}>NEW</p>
                            <h2>iPad</h2>
                            <h3>From $449 or $37.41/mo. for 24 mo.*</h3>
                        </div>
                        <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-ipad-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696863030352' />
                    </div>
                    <div className='slide-item'>
                        <div className='slide-info'>
                            <p>NEW</p>
                            <h2>MacBook Air</h2>
                            <h3>From $1299 or $108.25/mo. for 24 mo.*</h3>
                        </div>
                        <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-macbook-air-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696863032996' />
                    </div>
                    <div className='slide-item'>
                        <div className='slide-info'>
                            <p>NEW</p>
                            <h2>Apple Watch SE</h2>
                            <h3>From $249 or $20.75/mo. for 24 mo.*</h3>
                        </div>
                        <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-watch-se-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696863032977' />
                    </div>
                </div>
            </div>
            {/* <div className='slide-container'>
                <p className='slide-top gray'><span className='red'>Personalization. </span>Good tidings from you.</p>
                <div className='slide'>
                    <div className='slide-item'>

                    </div>
                    <div className='slide-item'>

                    </div>
                    <div className='slide-item'>

                    </div>
                    <div className='slide-item'>

                    </div>
                </div>
            </div>
            <div className='slide-container'>
                <p className='slide-top gray'><span className='red'>Quick picks. </span>Dashing through your list.</p>
                <div className='slide'>
                    <div className='slide-item'>

                    </div>
                    <div className='slide-item'>

                    </div>
                    <div className='slide-item'>

                    </div>
                    <div className='slide-item'>

                    </div>
                </div>
            </div>
            <div className='slide-container'>
                <p className='slide-top gray'><span className='red'>Only at Apple. </span>The perfect place to enjoy your holidays.</p>
                <div className='slide'>
                    <div className='slide-item'>

                    </div>
                    <div className='slide-item'>

                    </div>
                    <div className='slide-item'>

                    </div>
                    <div className='slide-item'>

                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Store