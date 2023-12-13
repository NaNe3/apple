import React, { useEffect } from 'react'
import './Macbook.css'

function Macbooks() {
    useEffect(() => {
        document.title = "Mac - Apple"
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='macbooks-container'>
            <div className='product-display'>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-air.png' />
                    <h2>MacBook Air</h2>
                    <h3></h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-macpro.png' />
                    <h2>MacBook Pro</h2>
                    <h3>New</h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-imac.png' />
                    <h2>iMac</h2>
                    <h3>New</h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-mini.png' />
                    <h2>Mac mini</h2>
                    <h3></h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-studio.png' />
                    <h2>Mac Studio</h2>
                    <h3></h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-behemoth.png' />
                    <h2>Mac Pro</h2>
                    <h3></h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-compare.png' />
                    <h2>Compare</h2>
                    <h3></h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-displays.png' />
                    <h2>Displays</h2>
                    <h3></h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-acc.png' />
                    <h2>Accessories</h2>
                    <h3></h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-os.png' />
                    <h2>Sonoma</h2>
                    <h3></h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-shop.png' />
                    <h2>Shop Mac</h2>
                    <h3></h3>

                </div>

            </div>

            <div className='banner-info'>
                <p>Get your holiday gifts on time. See when to order</p>
            </div>

            <div className='section slide-container'>
                <div className='section-header'>
                    <h3>Get to know Mac.</h3>
                </div>

                <div className='slide'>
                    <div className='tall-slide'>
                        <img src='./src/assets/Macbook/slide-1.png' />
                        <div className='slide-info'>
                            <h3>MacBook Air</h3>
                            <p>Power. It’s in the Air.</p>
                        </div>
                    </div>
                    <div className='tall-slide'>
                        <img src='./src/assets/Macbook/slide-2.png' />
                        <div className='slide-info'>
                            <h3>MacBook Pro</h3>
                            <p>Supercharged for pros.</p>
                        </div>
                    </div>
                    <div className='tall-slide'>
                        <img src='./src/assets/Macbook/slide-3.png' />
                        <div className='slide-info'>
                            <h3>iMac</h3>
                            <p>Say hello.</p>
                        </div>
                    </div>
                    <div className='tall-slide'>
                        <img src='./src/assets/Macbook/slide-4.png' />
                        <div className='slide-info'>
                            <h3>Mac mini</h3>
                            <p>Mighty. Small.</p>
                        </div>
                    </div>
                    <div className='tall-slide'>
                        <img src='./src/assets/Macbook/slide-5.png' />
                        <div className='slide-info'>
                            <h3>Mac Pro</h3>
                            <p>Power to change everything.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Macbooks