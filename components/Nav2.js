// components/Nav.js
"use client"
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [isPricingDropdownVisible, setPricingDropdownVisible] = useState(false);
  const [isFeaturesDropdownVisible, setFeaturesDropdownVisible] = useState(false);
  const [isResourcesDropdownVisible, setResourcesDropdownVisible] = useState(false);

  const togglePricingDropdown = () => {
    console.log("togglePricingDropdown");
    setPricingDropdownVisible(!isPricingDropdownVisible);
  };

  const toggleFeaturesDropdown = () => {
    console.log("toggleFeaturesDropdown");
    setFeaturesDropdownVisible(!isFeaturesDropdownVisible);
  };

  const toggleResourcesDropdown = () => {
    console.log("toggleResourcesDropdown");
    setResourcesDropdownVisible(!isResourcesDropdownVisible);
  };

  return (
    <div data-animation="default" className="navbar_component w-nav" data-easing2="ease" fs-scrolldisable-element="smart-nav" data-easing="ease" data-collapse="medium" data-w-id="ce73bc21-47e3-718d-4aed-ec1abf19dc58" role="banner" data-duration="400">
      <div className="nav_bg"></div>
      <div className="navbar_container">
        <Link href="/" aria-current="page" className="navbar_logo-link w-nav-brand w--current">
          <img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e4c3d5f0708ca6cd80bba_logoHorizonalLight.svg" loading="lazy" width="83" alt="logo-horizonal-light" className="navbar_logo" />
        </Link>
        <nav role="navigation" id="w-node-ce73bc21-47e3-718d-4aed-ec1abf19dc5d-bf19dc58" className="navbar_menu shadows_3_pc_none w-nav-menu">
          {/* Use Cases Dropdown */}
          <div data-hover="true" data-delay="200" data-w-id="ce73bc21-47e3-718d-4aed-ec1abf19dc5e" className="navbar_menu-dropdown w-dropdown" onMouseEnter={togglePricingDropdown} onMouseLeave={togglePricingDropdown}>
            <div className="navbar_dropdwn-toggle w-dropdown-toggle">
              <div>Use Cases</div>
              <div className="dropdown-chevron w-embed">
                {/* Your SVG code for the chevron */}
              </div>
            </div>
            {isPricingDropdownVisible && (
              <nav className="navbar_dropdown-list w-dropdown-list">
                <Link href="/personalized-video-3">
                  <a className="navbar_dropdown-link w-dropdown-link">Sales Outreach</a>
                </Link>
                {/* Add more Use Cases links as needed */}
              </nav>
            )}
          </div>

          {/* Features Dropdown */}
          <div data-hover="true" data-delay="200" data-w-id="ce73bc21-47e3-718d-4aed-ec1abf19dc6c" className="navbar_menu-dropdown w-dropdown" onMouseEnter={toggleFeaturesDropdown} onMouseLeave={toggleFeaturesDropdown}>
            <div className="navbar_dropdwn-toggle w-dropdown-toggle">
              <div>Features</div>
              <div className="dropdown-chevron w-embed">
                {/* Your SVG code for the chevron */}
              </div>
            </div>
            {isFeaturesDropdownVisible && (
              <nav className="navbar_dropdown-list w-dropdown-list">
                <Link href="/instant-avatar">
                  <a className="navbar_dropdown-link w-dropdown-link">Instant Avatar</a>
                </Link>
                {/* Add more Features links as needed */}
              </nav>
            )}
          </div>

          {/* Resources Dropdown */}
          <div data-hover="true" data-delay="200" data-w-id="ce73bc21-47e3-718d-4aed-ec1abf19dc82" className="navbar_menu-dropdown w-dropdown" onMouseEnter={toggleResourcesDropdown} onMouseLeave={toggleResourcesDropdown}>
            <div className="navbar_dropdwn-toggle w-dropdown-toggle">
              <div>Resources</div>
              <div className="dropdown-chevron w-embed">
                {/* Your SVG code for the chevron */}
              </div>
            </div>
            {isResourcesDropdownVisible && (
              <nav className="navbar_dropdown-list w-dropdown-list">
                <Link href="/blog">
                  <a className="navbar_dropdown-link w-dropdown-link">Blog</a>
                </Link>
                {/* Add more Resources links as needed */}
              </nav>
            )}
          </div>

          {/* Pricing Link */}
          <Link href="/pricing">
            <a className="navbar_link w-nav-link">Pricing</a>
          </Link>
        </nav>

        <div id="w-node-ce73bc21-47e3-718d-4aed-ec1abf19dc92-bf19dc58" className="navbar_button-wrapper">
          <a href="https://am8evw00qys.typeform.com/enterprisecall" target="_blank" className="navbar_link_nocolor w-nav-link">Contact Sales</a>
          <a href="https://app.heygen.com/login" target="_blank" className="button_primary_nav shadows_3 w-button">Get started</a>
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
  );
};

export default Nav;
