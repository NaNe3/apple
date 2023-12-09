import React, { useEffect } from 'react'

function Macbooks() {
    useEffect(() => {
        document.title = "Mac - Apple"
    }, [])

    return (
        <div className='macbooks-container'>
            <div className='product-display'>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-air.png' />
                    <h2>MacBook Air</h2>
                    <h3>New</h3>

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
                    <h3>New</h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-studio.png' />
                    <h2>Mac Studio</h2>
                    <h3>New</h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-behemoth.png' />
                    <h2>Mac Pro</h2>
                    <h3>New</h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-compare.png' />
                    <h2>Compare</h2>
                    <h3>New</h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-displays.png' />
                    <h2>Displays</h2>
                    <h3>New</h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-acc.png' />
                    <h2>Accessories</h2>
                    <h3>New</h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-os.png' />
                    <h2>Sonoma</h2>
                    <h3>New</h3>

                </div>
                <div className='product'>
                    <img src='./src/assets/Macbook/product-shop.png' />
                    <h2>Shop Mac</h2>
                    <h3>New</h3>

                </div>

            </div>
        </div>
    )
}

export default Macbooks