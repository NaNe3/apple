import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function NavBar() {
    const [dropdown, setDropdown] = useState(false)
    const drop = () => {
        document.addEventListener("mousemove", checkMouse)

    }

    const checkMouse = (e) => {
        var targetClass = e.target.className
        console.log(targetClass)
        if (targetClass.includes("safe") == false) {
            setDropdown(false)
            document.removeEventListener("mouseover", checkMouse)
            // setTimeout(() => {
            //     document.getElementsByClassName('modal')[0].style.display = "none"
            // }, 600)
            // document.getElementsByClassName('modal')[0].style.display = "none"
        } else if (dropdown == false) {
            setDropdown(true)
            // document.getElementsByClassName('modal')[0].style.display = "block"
        }
    }

    return (
        <>
            <nav style={ dropdown ? { backgroundColor: "rgba(249, 249, 251, 1)"} : { backgroundColor: "rgba(249, 249, 251, 0.8)"}}>
                <Link to="/"><img src={'./src/assets/apple.png'} /></Link>

                <ul className='links safe' onMouseOver={ dropdown ? console.log("already open fool") : drop }>
                    <li className='safe'><Link className='safe' to="/Store">Store</Link></li>
                    <li className='safe'><Link className='safe' to="/Macbooks">Mac</Link></li>
                    <li className='safe'><Link className='safe' to="">iPad</Link></li>
                    <li className='safe'><Link className='safe' to="">iPhone</Link></li>
                    <li className='safe'><Link className='safe' to="">Watch</Link></li>
                    <li className='safe'><Link className='safe' to="">Vision</Link></li>
                    <li className='safe'><Link className='safe' to="">AirPods</Link></li>
                    <li className='safe'><Link className='safe' to="">TV & Home</Link></li>
                    <li className='safe'><Link className='safe' to="">Entertainment</Link></li>
                    <li className='safe'><Link className='safe' to="">Accessories</Link></li>
                    <li className='safe'><Link className='safe' to="">Support</Link></li>
                </ul>


                <Link to="/"><img src='./src/assets/search.png' /></Link>
                <Link to="/"><img src='./src/assets/cart.png' /></Link>
            </nav>

            <div className={`modal ${dropdown ? 'visible' : ''}`}>
                <div className={`dropdown-container safe ${dropdown ? 'visible' : '' }`}></div>
            </div>
        </>
    )
}

function Footer() {
    return (
        <footer>
            <div id='footer-parent'>
                <div className='info-section'>
                    <p>1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.</p>
                    <p>To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.</p>
                    <p>If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.</p>
                    <p>Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</p>
                    <p>A subscription is required for Apple TV+.</p>

                </div>

                <div className='footer-container'>
                    <div className='footer-col'>
                        <p className='foot-link-head'>Shop and Learn</p>
                        <p className='foot-link'>Store</p>
                        <p className='foot-link'>Mac</p>
                        <p className='foot-link'>iPhone</p>
                        <p className='foot-link'>iPad</p>
                        <p className='foot-link'>Watch</p>
                        <p className='foot-link'>Vision</p>
                        <p className='foot-link'>AirPods</p>
                        <p className='foot-link'>TV & Home</p>
                        <p className='foot-link'>Air Tag</p>
                        <p className='foot-link'>Accessories</p>
                        <p className='foot-link' style={{ marginBottom: "30px" }}>Gift Cards</p>

                        <p className='foot-link-head'>Apple Wallet</p>
                        <p className='foot-link'>Wallet</p>
                        <p className='foot-link'>Apple Card</p>
                        <p className='foot-link'>Apple Pay</p>
                        <p className='foot-link'>Apple Cash</p>
                    </div>
                    <div className='footer-col'>
                        <p className='foot-link-head'>Account</p>
                        <p className='foot-link'>Manage your Apple ID</p>
                        <p className='foot-link'>Apple Store Account</p>
                        <p className='foot-link' style={{ marginBottom: "30px" }}>iCloud.com</p>

                        <p className='foot-link-head'>Entertainment</p>
                        <p className='foot-link'>Apple One</p>
                        <p className='foot-link'>Apple TV+</p>
                        <p className='foot-link'>Apple Music</p>
                        <p className='foot-link'>Apple Arcade</p>
                        <p className='foot-link'>Apple Fitness+</p>
                        <p className='foot-link'>Apple News+</p>
                        <p className='foot-link'>Apple Podcasts</p>
                        <p className='foot-link'>Apple Books</p>
                        <p className='foot-link'>App Store</p>
                    </div>
                    <div className='footer-col'>
                        <p className='foot-link-head'>Apple Store</p>
                        <p className='foot-link'>Find a Store</p>
                        <p className='foot-link'>Genius Bar</p>
                        <p className='foot-link'>Today at Apple</p>
                        <p className='foot-link'>Apple Camp</p>
                        <p className='foot-link'>Apple Store App</p>
                        <p className='foot-link'>Certified Refurbished</p>
                        <p className='foot-link'>Apple Trade In</p>
                        <p className='foot-link'>Financing</p>
                        <p className='foot-link'>Carrier Deals at Apple</p>
                        <p className='foot-link'>Order Status</p>
                        <p className='foot-link'>Shopping Help</p>
                    </div>
                    <div className='footer-col'>
                        <p className='foot-link-head'>For Business</p>
                        <p className='foot-link'>Apple and Business</p>
                        <p className='foot-link' style={{ marginBottom: "30px" }}>Shop for Business</p>

                        <p className='foot-link-head'>For Education</p>
                        <p className='foot-link'>Apple and Education</p>
                        <p className='foot-link'>Shop for K-12</p>
                        <p className='foot-link' style={{ marginBottom: "30px" }}>Shop for College</p>

                        <p className='foot-link-head'>For Healthcare</p>
                        <p className='foot-link'>Apple in Healthcare</p>
                        <p className='foot-link'>Health on Apple Watch</p>
                        <p className='foot-link' style={{ marginBottom: "30px" }}>Health Records on iPhone</p>

                        <p className='foot-link-head'>For Government</p>
                        <p className='foot-link'>Shop for Government</p>
                        <p className='foot-link'>Shop for Veterans and Military</p>
                    </div>
                    <div className='footer-col'>
                        <p className='foot-link-head'>Apple Values</p>
                        <p className='foot-link'>Accessibility</p>
                        <p className='foot-link'>Education</p>
                        <p className='foot-link'>Environment</p>
                        <p className='foot-link'>Inclusion and Diversity</p>
                        <p className='foot-link'>Privacy</p>
                        <p className='foot-link'>Racial Equity and Justice</p>
                        <p className='foot-link' style={{ marginBottom: "30px" }}>Supplier Responsibility</p>

                        <p className='foot-link-head'>About Apple</p>
                        <p className='foot-link'>Newsroom</p>
                        <p className='foot-link'>Apple Leadership</p>
                        <p className='foot-link'>Career Opportunities</p>
                        <p className='foot-link'>Investors</p>
                        <p className='foot-link'>Ethics & Compliance</p>
                        <p className='foot-link'>Events</p>
                        <p className='foot-link'>Contact Apple</p>
                    </div>
                </div>

                <div className='info-section' style={{ borderBottom: "0px", marginBottom: "0px" }}>
                    <p style={{ borderBottom: "1px solid grey", paddingBottom: "10px" }}>More ways to shop: Find an <span className='fake-link'>Apple Store</span> or <span className='fake-link'>other retailer</span> near you. Or call 1-800-MY-APPLE.</p>
                    <p style={{ marginTop: "-5px" }}>Copyright © 2023 Apple Inc. All rights reserved.</p>

                </div>
            </div>
        </footer>
    )
}

export { NavBar, Footer };