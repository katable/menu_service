import React from 'react';

const Nav = (props) => (
  <div id="menu_nav">
    {
      props.restaurantMenus.map((menu, index) => (
        <button id={`menu-button-${index}`} className="menu-buttons" key={index} href="">{menu}</button>
      ))
    }
    <hr></hr>
  </div>
);

export default Nav;