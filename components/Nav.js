"use client"
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
    const [isPricingDropdownVisible, setPricingDropdownVisible] = useState(false);
    const [isFeaturesDropdownVisible, setFeaturesDropdownVisible] = useState(false);
    const [isResourcesDropdownVisible, setResourcesDropdownVisible] = useState(false);

    const togglePricingDropdown = () => {
        console.log("togglePricingDropdown")
        setPricingDropdownVisible(!isPricingDropdownVisible);
    };

    const toggleFeaturesDropdown = () => {
        console.log("toggleFeaturesDropdown")
        setFeaturesDropdownVisible(!isFeaturesDropdownVisible);
    };

    const toggleResourcesDropdown = () => {
        console.log("toggleResourcesDropdown")
        setResourcesDropdownVisible(!isResourcesDropdownVisible);
    };

    return (
        <div data-animation="default" className="navbar_component w-nav" data-easing2="ease"
            fs-scrolldisable-element="smart-nav" data-easing="ease" data-collapse="medium"
            data-w-id="ce73bc21-47e3-718d-4aed-ec1abf19dc58" role="banner" data-duration="400">
            <div className="nav_bg"></div>
            <div className="navbar_container">
                <Link href="/" aria-current="page" className="navbar_logo-link w-nav-brand w--current">
                    <img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e4c3d5f0708ca6cd80bba_logoHorizonalLight.svg"
                        loading="lazy" width="83" alt="logo-horizonal-light" className="navbar_logo" />
                </Link>
                <nav role="navigation" id="w-node-ce73bc21-47e3-718d-4aed-ec1abf19dc5d-bf19dc58"
                    className="navbar_menu shadows_3_pc_none w-nav-menu">
                    <div data-hover="true" data-delay="200" data-w-id="ce73bc21-47e3-718d-4aed-ec1abf19dc5e"
                        className="navbar_menu-dropdown w-dropdown">
                        <div className="navbar_dropdwn-toggle w-dropdown-toggle">
                            <div>Use Cases</div>
                            <div className="dropdown-chevron w-embed">
                                <svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
                                        fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        <nav className="navbar_dropdown-list w-dropdown-list">
                            <Link href="/" className="navbar_dropdown-link w-dropdown-link">Sales Outreach</Link>
                            <Link href="/" className="navbar_dropdown-link w-dropdown-link">Product Marketing
                            </Link>
                            <Link href="/" className="navbar_dropdown-link w-dropdown-link">Content Marketing </Link>
                            <Link href="/" className="navbar_dropdown-link w-dropdown-link">Learning
                                &amp;Development</Link>
                        </nav>
                    </div>
                    <div data-hover="true" data-delay="200" data-w-id="ce73bc21-47e3-718d-4aed-ec1abf19dc6c"
                        className="navbar_menu-dropdown w-dropdown">
                        <div className="navbar_dropdwn-toggle w-dropdown-toggle">
                            <div>Features</div>
                            <div className="dropdown-chevron w-embed">
                                <svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
                                        fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        <nav className="navbar_dropdown-list w-dropdown-list">
                            <Link href="/" className="navbar_dropdown-link w-dropdown-link">Instant Avatar</Link>
                            <Link href="/" className="navbar_dropdown-link w-dropdown-link">Studio Avatar</Link>
                            <Link href="/" className="navbar_dropdown-link w-dropdown-link">Video Translate</Link>
                            <Link href="/" className="navbar_dropdown-link w-dropdown-link">Voice Cloning</Link>
                            <Link href="/" className="navbar_dropdown-link w-dropdown-link">Photo Avatar</Link>
                            <Link href="/" className="navbar_dropdown-link w-dropdown-link">AI Voices</Link>
                            <Link href="/" className="navbar_dropdown-link w-dropdown-link">Personalized
                                Video</Link>
                            <Link href="/" className="navbar_dropdown-link w-dropdown-link">Realtime Avatar</Link>
                            <Link href="/" className="navbar_dropdown-link w-dropdown-link">AI Avatars</Link>
                            <Link href="/" className="navbar_dropdown-link w-dropdown-link">Templates</Link>
                            <Link href="/"
                                className="navbar_dropdown-link w-dropdown-link">Zapier</Link>
                        </nav>
                    </div>
                    <div data-hover="true" data-delay="200" data-w-id="ce73bc21-47e3-718d-4aed-ec1abf19dc82"
                        className="navbar_menu-dropdown w-dropdown">
                        <div className="navbar_dropdwn-toggle w-dropdown-toggle">
                            <div>Resources</div>
                            <div className="dropdown-chevron w-embed">
                                <svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
                                        fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        <nav className="navbar_dropdown-list w-dropdown-list">
                            <Link href="/" data-track-data="type=weekly-demo" data-track-event="CLK_TO_NAV_WHILTE"
                                data-with-sid="true" className="navbar_dropdown-link w-dropdown-link">Blog</Link>
                            <Link href="/" data-track-data="type=weekly-demo"
                                data-track-event="CLK_TO_NAV_WHILTE" data-with-sid="true" target="_blank"
                                className="navbar_dropdown-link w-dropdown-link">Weekly Webinar</Link>
                            <Link href="/" data-track-data="type=weekly-demo" data-track-event="CLK_TO_NAV_WHILTE"
                                data-with-sid="true" className="navbar_dropdown-link w-dropdown-link">Case Studies</Link>
                            <Link href="/" data-track-data="type=help-center"
                                data-track-event="CLK_TO_NAV_WHILTE" data-with-sid="true" target="_blank"
                                className="navbar_dropdown-link w-dropdown-link">Help Center</Link>
                        </nav>
                    </div>
                    <Link href="/" className="navbar_link w-nav-link">Pricing</Link>
                </nav>
                <div id="w-node-ce73bc21-47e3-718d-4aed-ec1abf19dc92-bf19dc58" className="navbar_button-wrapper">
                    <Link href="/" target="_blank"
                        className="navbar_link_nocolor w-nav-link">Contact Sales</Link>
                    <Link href="/" target="_blank" className="button_primary_nav shadows_3 w-button">Get
                        started</Link>
                    <div className="navbar_menu-button w-nav-button">
                        <div className="menu-icon2">
                            <div className="menu-icon2_line-top"></div>
                            <div className="menu-icon2_line-middle">
                                <div className="menu-icon_line-middle-inner"></div>
                            </div>
                            <div className="menu-icon2_line-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div data-animation="default" classNameName="navbar_component w-nav" data-easing2="ease" fs-scrolldisable-element="smart-nav" data-easing="ease" data-collapse="medium" data-w-id="ce73bc21-47e3-718d-4aed-ec1abf19dc58" role="banner" data-duration="400">
        //     <div classNameName="nav_bg"></div>
        //     <div classNameName="navbar_container">
        //         <div aria-current="page" classNameName="navbar_logo-link w-nav-brand w--current">
        //             <Link href="/">
        //                     <img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e4c3d5f0708ca6cd80bba_logoHorizonalLight.svg" loading="lazy" width="83" alt="logo-horizonal-light" classNameName="navbar_logo" />
        //             </Link>
        //         </div>

        //         <nav role="navigation" id="w-node-ce73bc21-47e3-718d-4aed-ec1abf19dc5d-bf19dc58" classNameName="navbar_menu shadows_3_pc_none w-nav-menu">
        //             {/* Use Cases Dropdown */}
        //             <div classNameName="navbar_menu-dropdown w-dropdown" onMouseEnter={togglePricingDropdown} onMouseLeave={togglePricingDropdown}>
        //                 <div classNameName="navbar_dropdwn-toggle w-dropdown-toggle">
        //                     <div>Use Cases</div>
        //                     <div classNameName="dropdown-chevron w-embed">
        //                         {/* Your SVG code for the chevron */}
        //                     </div>
        //                 </div>
        //                 {isPricingDropdownVisible && (
        //                     <nav classNameName="navbar_dropdown-list w-dropdown-list">
        //                         <Link classNameName='navbar_dropdown-link w-dropdown-link' href="/">
        //                             Sales Outreach
        //                         </Link>
        //                         {/* Add more Use Cases links as needed */}
        //                     </nav>
        //                 )}
        //             </div>

        //             {/* Features Dropdown */}
        //             <div classNameName="navbar_menu-dropdown w-dropdown" onMouseEnter={toggleFeaturesDropdown} onMouseLeave={toggleFeaturesDropdown}>
        //                 <div classNameName="navbar_dropdwn-toggle w-dropdown-toggle">
        //                     <div>Features</div>
        //                     <div classNameName="dropdown-chevron w-embed">
        //                         {/* Your SVG code for the chevron */}
        //                     </div>
        //                 </div>
        //                 {isFeaturesDropdownVisible && (
        //                     <nav classNameName="navbar_dropdown-list w-dropdown-list">
        //                         <Link classNameName="navbar_dropdown-link w-dropdown-link" href="/">
        //                             Instant Avatar
        //                         </Link>
        //                         {/* Add more Features links as needed */}
        //                     </nav>
        //                 )}
        //             </div>

        //             {/* Resources Dropdown */}
        //             <div classNameName="navbar_menu-dropdown w-dropdown" onMouseEnter={toggleResourcesDropdown} onMouseLeave={toggleResourcesDropdown}>
        //                 <div classNameName="navbar_dropdwn-toggle w-dropdown-toggle">
        //                     <div>Resources</div>
        //                     <div classNameName="dropdown-chevron w-embed">
        //                         {/* Your SVG code for the chevron */}
        //                     </div>
        //                 </div>
        //                 {isResourcesDropdownVisible && (
        //                     <nav classNameName="navbar_dropdown-list w-dropdown-list">
        //                         <Link classNameName="navbar_dropdown-link w-dropdown-link" href="/">
        //                             Blog
        //                         </Link>
        //                         {/* Add more Resources links as needed */}
        //                     </nav>
        //                 )}
        //             </div>

        //             {/* Pricing Link */}
        //             <Link classNameName="navbar_link w-nav-link cursor-pointer" href="/">
        //                 Pricing
        //             </Link>
        //         </nav>

        //         <div id="w-node-ce73bc21-47e3-718d-4aed-ec1abf19dc92-bf19dc58" classNameName="navbar_button-wrapper">
        //             <span classNameName="navbar_link_nocolor w-nav-link">Contact Sales</span>
        //             <span classNameName="button_primary_nav shadows_3 w-button">Get started</span>
        //             <div classNameName="navbar_menu-button w-nav-button">
        //                 <div classNameName="menu-icon2">
        //                     <div classNameName="menu-icon2_line-top"></div>
        //                     <div classNameName="menu-icon2_line-middle">
        //                         <div classNameName="menu-icon_line-middle-inner"></div>
        //                     </div>
        //                     <div classNameName="menu-icon2_line-bottom"></div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Nav;
