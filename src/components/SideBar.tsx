import React from 'react';
import './SideBar.css';
import { SideBarData } from '../lib/SideBarData';
import {restSideBarData} from '../lib/SideBarData';

function SideBar() {
    return (
      <div className="Sidebar">
        <ul className="SidebarList">
          {SideBarData.map((val, key) => {
              return (
                <li key={key} className="row"
                  id={window.location.pathname === val.link ? "active" : ""}
                  onClick={() => { window.location.pathname = val.link }}>
                  <div id="icon">{val.icon}</div>{" "}
                  <div id="title">{val.title}</div>
                </li>
              );
          })}
        </ul>
        <hr />
        <ul className="SidebarList">
          {restSideBarData.map((val, key) => {
              return (
                <li key={key} className="row rest"
                  id={window.location.pathname === val.link ? "active" : ""}
                  onClick={() => { window.location.pathname = val.link }}>
                  <div id="title">{val.title}</div>
                </li>
              );
          })}
        </ul>
      </div>
    );
}

export default SideBar
