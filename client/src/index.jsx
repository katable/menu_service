import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import MenuItems from './components/MenuItems.jsx';
import sampleData from './sampleData.js';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantMenus: sampleData,
      selectedMenu: sampleData.menus[0],
      toRenderFullMenu: false,
    };
  }

  collectRestaurantMenuTitles() {
    var menuTitles = [];
    for (var i = 0; i < this.state.restaurantMenus.menus.length; i++) {
      menuTitles.push(this.state.restaurantMenus.menus[i].menuSeason);
    }
    return menuTitles;
  }

  handleMenuSelection(menuIndex) {
    this.setState({
      selectedMenu: sampleData.menus[menuIndex]
    });
  }

  handleViewFullMenuButtonClick() {
    this.setState({
      toRenderFullMenu: true
    });
    document.getElementById('restaurant-menu').style.height = 'auto';
    document.getElementById('restaurant-menu').style.background = 'black';
    document.getElementById('restaurant-menu').style.webkitBackgroundClip = '';
    document.getElementById('restaurant-menu').style.webkitTextFillColor = '';
  }

  handleCollapseMenuButtonClick() {
    this.setState({
      toRenderFullMenu: false
    });
    document.getElementById('restaurant-menu').style.height = '400px';
    document.getElementById('restaurant-menu').style.background = '-webkit-linear-gradient(black, #d8d9db)';
    document.getElementById('restaurant-menu').style.webkitBackgroundClip = 'text';
    document.getElementById('restaurant-menu').style.webkitTextFillColor = 'transparent';
  }

  partialOrFullMenuRendering() {
    if (this.state.toRenderFullMenu === false) {
      return <button id="viewFullMenuButton" className="viewCollapseMenuButtons" onClick={() => this.handleViewFullMenuButtonClick()}>View full menu</button>;
    } else {
      return <button id="collapseMenuButton" className="viewCollapseMenuButtons" onClick={() => this.handleCollapseMenuButtonClick()}>Collapse menu</button>;
    }
  }

  render() {
    if (this.state.restaurantMenus === null) {
      return (
        <div>
          <span>
            At present, we do not have menu information for this restaurant. Please see their website or wait to visit the restaurant to learn more.
          </span>
        </div>
      );
    } else {
      return (
        <div className="menu-component">
          <Nav restaurantMenus = {this.collectRestaurantMenuTitles()} handleMenuSelection = {this.handleMenuSelection.bind(this)}/>
          <MenuItems selectedMenu = {this.state.selectedMenu}/>
          <div className="toRenderFullMenuButtons">
            {this.partialOrFullMenuRendering()}
          </div>
        </div>
      );
    }
  }
}
ReactDOM.render(<Menu />, document.getElementById('menu'));