import React, { useEffect } from 'react'
import './Macbook.css'

function Macbooks() { 
    useEffect(() => {
        document.title = "Mac - Apple"
        window.scrollTo(0, 0)

        const watchScroll = document.addEventListener('scroll', () => {
            checkElements()
        })
        checkElements()

        return () => {
            document.removeEventListener('scroll', watchScroll)
        }
    }, [])

    const checkElements = () => {
        const scrollWatchList = document.querySelectorAll('.fadeIn')
        for (let i=0; i<scrollWatchList.length; i++) {
            const position = scrollWatchList[i].getBoundingClientRect()
            if (position.top < window.innerHeight) {
                scrollWatchList[i].classList.add('fadeUp')
            }
        }
    }

    const handleSelection = (e) => {
        const selected = document.querySelector('.sel-ected')
        selected.classList.remove('sel-ected')
        e.target.classList.add('sel-ected')
    }

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
                <div className='section-header fadeIn'>
                    <h3>Get to know Mac.</h3>
                </div>

                <div className='slide fadeIn'>
                    <div className='tall-slide'>
                        <img src='https://www.apple.com/v/mac/home/bx/images/overview/consider/mac_ease__bvgkz2zdltxy_large_2x.jpg' />
                        <div className='slide-info'>
                            <h3>MacBook Air</h3>
                            <p>Power. It’s in the Air.</p>
                        </div>
                    </div>
                    <div className='tall-slide'>
                        <img src='https://www.apple.com/v/mac/home/bx/images/overview/consider/mac_compatibility__cu59oukz81ci_large_2x.jpg' />
                        <div className='slide-info'>
                            <h3>MacBook Pro</h3>
                            <p>Supercharged for pros.</p>
                        </div>
                    </div>
                    <div className='tall-slide'>
                        <img src='https://www.apple.com/v/mac/home/bx/images/overview/consider/mac_iphone__gh1tblkt6bqm_large_2x.jpg' />
                        <div className='slide-info'>
                            <h3>iMac</h3>
                            <p>Say hello.</p>
                        </div>
                    </div>
                    <div className='tall-slide'>
                        <img src='https://www.apple.com/v/mac/home/bx/images/overview/consider/mac_compatibility__cu59oukz81ci_large_2x.jpg' />
                        <div className='slide-info'>
                            <h3>Mac mini</h3>
                            <p>Mighty. Small.</p>
                        </div>
                    </div>
                    <div className='tall-slide'>
                        <img src='https://www.apple.com/v/mac/home/bx/images/overview/consider/mac_security__gfwda10khdym_large_2x.jpg' />
                        <div className='slide-info'>
                            <h3>Mac Pro</h3>
                            <p>Power to change everything.</p>
                        </div>
                    </div>
                    <div className='tall-slide'>
                        <img src='https://www.apple.com/v/mac/home/bx/images/overview/consider/mac_durability__epiwcuk7zkeq_large_2x.jpg' />
                        <div className='slide-info'>
                            <h3>Mac Studio</h3>
                            <p>Power to change everything.</p>
                        </div>
                    </div>
                    <div className='tall-slide'>
                        <img src='https://www.apple.com/v/mac/home/bx/images/overview/consider/mac_values__c9gck9qi4kia_large_2x.jpg' />
                        <div className='slide-info'>
                            <h3>Mac Studio</h3>
                            <p>Power to change everything.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section slide-container' style={{ backgroundColor: '#fafafa' }}>
                <div className='section-header fadeIn'>
                    <h3>Explore the lineup.</h3>
                </div>

                <div className='selecter fadeIn'>
                    <p className='sel-ected' onClick={handleSelection}>Laptops</p>
                    <p onClick={handleSelection}>Desktops</p>
                    <p onClick={handleSelection}>Displays</p>
                </div>

                <div className='slide macs fadeIn'>
                    

                    <div className='mac'>
                        <div className='mac-info'>
                            <img src="https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_mba_13__ci4jh6tvqvyq_large_2x.png"></img>
                            <div className='colors'>
                                <div className='color' style={{backgroundColor: "#7d7e80"}}></div>
                                <div className='color' style={{backgroundColor: "#e3e4e5"}}></div>
                                <div className='color' style={{backgroundColor: "#f9d4c2"}}></div>
                            </div>

                            <h6>MacBook Air 13"</h6>
                            <h5>M1 chip</h5>
                            <p>The most affordable Mac laptop to get things done on the go.</p>
                            <h3>From $999 or $83.25/mo for 12 mo.*</h3>

                            <div className='mac-actions'>
                                <button>Learn More</button>
                                <p>Buy <span> &gt;</span></p>
                            </div>
                        </div>
                        <div className='mac-details'>
                            <div className='mac-detail'>
                                <p className='big'>13.3"</p>
                                <p className='small'>Retina display with 400 nits of brightness delivers sharp and vibrant detail</p>

                            </div>
                            <div className='mac-detail'>
                                <img src='https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_icon_m1__fer7yjnje9e2_large_2x.png'/>
                                <p className='small'>Apple M1 chip</p>

                            </div>
                            <div className='mac-detail'>
                                <p className='small'>up to</p>
                                <p className='big'>18 hours</p>
                                <p className='small'>battery life</p>

                            </div>
                            <div className='mac-detail'>
                                <p className='big'>3 ports</p>
                                <p className='small'>2x Thunderbolt / USB 4, headphone jack</p>

                            </div>
                            <div className='mac-detail'>
                                <p className='big'>2.8 lb.</p>
                                <p className='small'>Weight</p>

                            </div>

                        </div>
                    </div>
                    <div className='mac'>
                        <div className='mac-info'>
                            <img src="https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large_2x.png"></img>
                            <div className='colors'>
                                <div className='color' style={{backgroundColor: "#2f3642"}}></div>
                                <div className='color' style={{backgroundColor: "#f0e4d3"}}></div>
                                <div className='color' style={{backgroundColor: "#7d7e80"}}></div>
                                <div className='color' style={{backgroundColor: "#e3e4e5"}}></div>
                            </div>
                            <h6>MacBook Air 13" and 15"</h6>
                            <h5>M2 chip</h5>
                            <p>Strikingly thin and fast so you can work, play, or create anywhere.</p>
                            <h3>From $1099 or $91.58/mo for 12 mo.*</h3>

                            <div className='mac-actions'>
                                <button>Learn More</button>
                                <p>Buy <span> &gt;</span></p>
                            </div>

                        </div>
                        <div className='mac-details'>
                            <div className='mac-detail'>
                                <p className='big'>13.6" or 15.3"</p>
                                <p className='small'>Liquid Retina display with 500 nits of brightness and support for 1 billion colors</p>

                            </div>
                            <div className='mac-detail'>
                                <img src='https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_icon_m2__5gxbtvpfgaaq_large_2x.png'/>
                                <p className='small'>Apple M2 chip</p>

                            </div>
                            <div className='mac-detail'>
                                <p className='small'>up to</p>
                                <p className='big'>18 hours</p>
                                <p className='small'>battery life</p>

                            </div>
                            <div className='mac-detail'>
                                <p className='big'>4 ports</p>
                                <p className='small'>2x Thunderbolt / USB 4, headphone jack, MagSafe</p>

                            </div>
                            <div className='mac-detail'>
                                <p className='big'>2.7 lb. or 3.3 lb.</p>
                                <p className='small'>Weight</p>

                            </div>

                           
                        </div>
                    </div>
                    <div className='mac'>
                        <div className='mac-info'>
                            <img src="https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large_2x.png"></img>
                            <div className='colors'>
                                <div className='color' style={{backgroundColor: "#2f3642"}}></div>
                                <div className='color' style={{ backgroundColor: "#e3e4e5" }}></div>
                                <div className='color' style={{backgroundColor: "#7d7e80"}}></div>
                            </div>
                            <h6>Macbook Pro 14" and 16"</h6>
                            <h5>M3, M3 Pro, or M3 Max chip</h5>
                            <p>The most advanced Mac laptops for demanding workflows.</p>
                            <h3>From $1599 or $133.25/mo for 12 mo.*</h3>

                            <div className='mac-actions'>
                                <button>Learn More</button>
                                <p>Buy <span> &gt;</span></p>
                            </div>

                        </div>
                        <div className='mac-details'>
                            <div className='mac-detail'>
                                <p className='big'>14.2" or 16.2"</p>
                                <p className='small'>Liquid Retina XDR display  with 1000 nits of HDR and up to 120Hz refresh rates</p>

                            </div>
                            <div className='mac-detail'>
                                <img src='https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_icon_m3_pro_max__wg8d2vblzmqi_large_2x.png' style={{width: "129px"}}/>
                                <p className='small'>Apple M3, M3 Pro, or M3 Max chip</p>

                            </div>
                            <div className='mac-detail'>
                                <p className='small'>up to</p>
                                <p className='big'>22 hours</p>
                                <p className='small'>battery life</p>

                            </div>
                            <div className='mac-detail'>
                                <p className='big'>7 ports</p>
                                <p className='small'>2x Thunderbolt / USB 4, headphone jack</p>

                            </div>
                            <div className='mac-detail'>
                                <p className='big'>3.4 lb. or 4.7 lb.</p>
                                <p className='small'>Weight</p>

                            </div>


                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Macbooks