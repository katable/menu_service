import React from 'react';

const Nav = (props) => (
  <div id="menu_nav">
    {
      props.restaurantMenus.map((menu, index) => (
        <button id={`menu-button-${index}`} className="menu-buttons" href="">{menu}</button>
      ))
    }
  </div>
);

export default Nav;