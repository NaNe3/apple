import React from 'react'
import './Store.css'

function Store() {
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
                            <img src='#'></img>
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
                    <img src='./src/assets/cat-mac.png'></img>
                    <p>Mac</p>
                </div>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-mac.png'></img>
                    <p>Mac</p>
                </div>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-mac.png'></img>
                    <p>Mac</p>
                </div>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-mac.png'></img>
                    <p>Mac</p>
                </div>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-mac.png'></img>
                    <p>Mac</p>
                </div>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-mac.png'></img>
                    <p>Mac</p>
                </div>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-mac.png'></img>
                    <p>Mac</p>
                </div>
                <div className='catalog-item'>
                    <img src='./src/assets/cat-mac.png'></img>
                    <p>Mac</p>
                </div>
            </div>

            <div className='slide-container'>
                <p className='slide-top gray'><span className='red'>The latest.</span> Gifts for that special everyone.</p>
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
            </div>
        </div>
    )
}

export default Store