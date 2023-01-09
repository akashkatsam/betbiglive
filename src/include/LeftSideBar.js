import React from 'react'
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <>
      <div class="left-site-menu">
        <div class="left-box">  
          <header class="header">
            <nav class="menu">
              <ul class="main-list-menu">
                <li>
                  <ul class="menu-promot menu-promot-first">
                    <li>
                      <NavLink activeClassName="active" className={"activeTab"} to="/">
                        <div class="icon">
                          <i class="icon-home"></i>
                        </div>
                        <span>Home</span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul class="menu-promot menu-promot-bottom">
                    <li class="pro">Games</li>
                    <li>
                      <NavLink  to="/cricket">
                        <div class="icon">
                          <i class="icon-cricket"></i>
                        </div>
                        <span>Cricket</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" className={"activeTab"} to="/football">
                        <div class="icon">
                          <i class="icon-futsal"></i>
                        </div>
                        <span>Football</span>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink activeClassName="active" className={"activeTab"} to="/tennis">
                        <div class="icon">
                          <i class="icon-etennis"></i>
                        </div>
                        <span>Tennis </span>
                      </NavLink>
                    </li>
                  

                    <li>
                      <NavLink activeClassName="active" className={"activeTab"} to="/liveCasino">
                        <div class="icon">
                          <i class="icon-valor"></i>
                        </div>
                        <span> Live Casino </span>
                      </NavLink>
                    </li>
                 
                    <li>
                      <NavLink activeClassName="active" className={"activeTab"} to="/slotGames">
                        <div class="icon">
                          <i class="icon-valor"></i>
                        </div>
                        <span> Slot Games </span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
              <div class="hamburger">
                <span></span>
              </div>
              <div class="hamb">
                <span></span>
              </div>
              <div class="dimmer"></div>
            </nav>
          </header>
        </div>
      </div>
    </>
  );
}
