import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


function NavBar() {
    const dropInfo = [
        {
            id: "Store",
            headers: ["Shop", "Quick Links", "Shop Special Stores"],
            links: [["Shop the Latest", "Mac", "iPad", "iPhone", "Apple Watch", "Accessories"], ["Community", "Check Coverage", "Repair", "Contact Us"], ["Get AppleCare+", "Apple ID & Password", "Billing & Subscription", "Find My", "Accessibility"]]
        },
        {
            id: "Mac",
            headers: ["Explore Mac", "Shop Mac", "More from Mac"],
            links: [["Explore All mac", "Macbook Air", "Macbook Pro", "iMac", "Mac mini", "Mac Studio", "Mac Pro", "Displays"], ["Shop Mac", "Mac Accessories", "Apple Trade In", "Financing"], ["Mac Support", "AppleCare+ for Mac", "macOS Sonoma", "Apps by Apple", "Continuity", "iCloud+", "Mac for Business", "Education"]]
        }, 
        {
            id: "iPad",
            headers: ["Explore iPad", "Shop iPad", "More from iPad"],
            links: [["Explore All iPad", "iPad Pro", "iPad Air", "iPad", "iPad mini", "Apple Pencil", "Keyboards"], ["Shop iPad", "iPad Accessories", "Apple Trade In", "Financing"], ["iPad Support", "AppleCare+ for iPad", "iPadOS 17", "Apps by Apples", "iCloud+", "Education"]]
        },
        {
            id: "iPhone",
            headers: ["Explore iPhone", "shop iPhone", "More from iPhone"],
            links: [["Explore All iPhone", "iPhone 15 Pro", "iPhone 15", "iPhone 14", "iPhone 13", "iPhone SE"], ["Shop iPhone", "iPhone Accessories", "Apple Trade In", "Carrier Deals at Apple", "Financing"], ["iPhone Support", "AppleCare+ for iPhone", "iOS 17", "Apps by Apple", "iPhone Privacy", "iCloud+", "Wallet, Pay, Card", "Siri"]]
        },
        {
            id: "Watch",
            headers: ["Explore Watch", "Shop Watch", "More from Watch"],
            links: [["Explore All Apple Watch", "Apple Watch Series 9", "Apple Watch Ultra 2", "Apple Watch SE", "Apple Watch Nike", "Apple Watch Hermes"], ["Shop Apple Watch", "Apple Watch Studio", "Apple Watch Bands", "Apple Watch Accessories", "Applre Trade In", "Financing"], ["Apple Watch Support", "AppleCare+", "watchOS 10", "Apps by Apple", "Apple Fitness"]]
        },
        {
            id: "AirPods",
            headers: ["Explore AirPods", "Shop AirPods", "More from AirPods"],
            links: [["Explore All AirPods", "AirPods Pro 2nd Generation", "AirPods 2nd Generation", "AirPods 3rd Generation", "AirPods Max"], ["Shop AirPods", "AirPods Accessories"], ["AirPods Support", "AppleCare+ for Headphones", "Apple Music"]]
        },
        {
            id: "TV &amp; Home",
            headers: ["Explore TV & Home", "Shop TV & Home", "More from TV & Home"],
            links: [["Explore TV & Home", "Apple TV 4K", "HomePod", "HomePod mini"], ["Shop Apple TV 4K", "Shop HomePod", "Shop HomePod mini", "Shop Siri Remote", "TV & Home Accessories"], ["Apple TV Support", "HomePod Support", "AppleCare+", "Apple TV app", "Apple TV+", "Home app", "Apple Music", "Siri", "AirPlay"]]
        },
        {
            id: "Entertainment",
            headers: ["Explore Entertainment", "Support"],
            links: [["Explore Entertainment", "Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"], ["Apple TV+ Support", "Apple Music Support"]]
        },
        {
            id: "Accessories",
            headers: ["Shop Accessories", "Explore Accessories"],
            links: [["Shop All Accessories", "Mac", "iPad", "iPhone", "Apple Watch", "AirPods", "TV & Home"], ["Shop Holiday Gifts", "Made by Apple", "Beats by Dr. Dre", "AirTag"]]
        },
        {
            id: "Support",
            headers: ["Explore Support", "Get Help", "Helpful Topics"],
            links: [["iPhone", "Mac", "iPad", "Watch", "AirPods", "Music", "TV"], ["Community", "Check Coverage", "Repair", "Contact Us"], ["Get AppleCare+", "Apple ID & Password", "Billing & Subscriptions", "Find My", "Accessibility"]]
        }
    ]

    const handleDropdownItems = (e) => {
        if (!dropdown) {
            drop()
        }

        var id = e.target.innerHTML;
        var index = -1;
        for (var i=0; i<dropInfo.length; i++) {
            if (dropInfo[i].id == id) {
                index = i
                break
            }
        }

        if (index != -1) {
            document.getElementById("dropdown-item-container").innerHTML = ''


            for (var i=0; i<dropInfo[index].links.length; i++) {
                var div = document.createElement("div")
                div.className = "drop-item safe"

                var head = document.createElement("h2")
                head.innerHTML = dropInfo[index].headers[i]
                head.className = "safe"
                
                div.appendChild(head)

                for (var j=0; j<dropInfo[index].links[i].length; j++) {
                    var p = document.createElement("p")
                    p.innerHTML = dropInfo[index].links[i][j]
                    p.className = "safe"

                    div.appendChild(p);
                }

                document.getElementById("dropdown-item-container").appendChild(div)
            }
        }
    }


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
        } else if (dropdown == false) {
            setDropdown(true)
        }
    }

    return (
        <>
            <nav style={ dropdown ? { backgroundColor: "rgba(249, 249, 251, 1)"} : { backgroundColor: "rgba(249, 249, 251, 0.8)"}}>
                <Link to="/"><img src={'./src/assets/apple.png'} /></Link>
                {/* onMouseOver={ dropdown ? console.log("already open fool") : drop }> */}

                <ul className='links safe'> 
                    <li className='safe'><Link onMouseOver={handleDropdownItems} className='safe' to="/Store">Store</Link></li>
                    <li className='safe'><Link onMouseOver={handleDropdownItems} className='safe' to="/Macbooks">Mac</Link></li>
                    <li className='safe'><Link onMouseOver={handleDropdownItems} className='safe' to="">iPad</Link></li>
                    <li className='safe'><Link onMouseOver={handleDropdownItems} className='safe' to="">iPhone</Link></li>
                    <li className='safe'><Link onMouseOver={handleDropdownItems} className='safe' to="">Watch</Link></li>
                    <li><Link onMouseOver={handleDropdownItems} to="">Vision</Link></li>
                    <li className='safe'><Link onMouseOver={handleDropdownItems} className='safe' to="">AirPods</Link></li>
                    <li className='safe'><Link onMouseOver={handleDropdownItems} className='safe' to="">TV & Home</Link></li>
                    <li className='safe'><Link onMouseOver={handleDropdownItems} className='safe' to="">Entertainment</Link></li>
                    <li className='safe'><Link onMouseOver={handleDropdownItems} className='safe' to="">Accessories</Link></li>
                    <li className='safe'><Link onMouseOver={handleDropdownItems} className='safe' to="">Support</Link></li>
                </ul>


                <Link to="/"><img src='./src/assets/search.png' /></Link>
                <Link to="/"><img src='./src/assets/cart.png' /></Link>
            </nav>

            <div className={`modal ${dropdown ? 'visible' : ''}`}>
                <div className={`dropdown-container safe ${dropdown ? 'visible' : '' }`}>
                    <div id='dropdown-item-container' className='safe'>

                    </div>
                </div>
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