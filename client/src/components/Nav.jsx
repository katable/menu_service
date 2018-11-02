import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="menu_nav">
        {
          this.props.restaurantMenus.map((menu, index) => (
            <button id={`menu-button-${index}`} className="menu-buttons" key={index} onClick={()=> {
              this.props.handleMenuSelection(index);
            }} href={`#menu-button-${index}`}>{menu}</button>
          ))
        }
        <hr></hr>
      </div>
    );
  }
}

export default Nav;