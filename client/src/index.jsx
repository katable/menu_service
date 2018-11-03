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
      selectedMenuIndex: null,
      toRenderFullMenu: false,
    };
  }

  componentWillMount() {
    this.setState({
      selectedMenuIndex: 0
    });
  }
  componentDidMount() {
    document.getElementsByClassName('menu-buttons')[this.state.selectedMenuIndex].id = 'renderedMenu';
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
      selectedMenuIndex: menuIndex
    });

    for (var i = 0; i < document.getElementsByClassName('menu-buttons').length; i++) {
      if (menuIndex === i) {
        document.getElementsByClassName('menu-buttons')[i].id = 'renderedMenu';
      } else {
        document.getElementsByClassName('menu-buttons')[i].id = '';
      }
    }
  }

  partialOrFullMenuRendering() {
    if (this.state.toRenderFullMenu === false) {
      return <button id="viewFullMenuButton" className="viewCollapseMenuButtons" onClick={() => this.handleViewFullMenuButtonClick()}>View full menu</button>;
    } else {
      return <button id="collapseMenuButton" className="viewCollapseMenuButtons" onClick={() => this.handleCollapseMenuButtonClick()}>Collapse menu</button>;
    }
  }

  handleViewFullMenuButtonClick() {
    this.setState({
      toRenderFullMenu: true
    });
    document.getElementById('restaurant-menu').style.height = 'auto';
  }

  handleCollapseMenuButtonClick() {
    this.setState({
      toRenderFullMenu: false
    });
    document.getElementById('restaurant-menu').style.height = '400px';
    document.getElementById('collapseMenuButton').style.position = 'relative';
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
        <div id="menu-component">
          <Nav restaurantMenus = {this.collectRestaurantMenuTitles()} handleMenuSelection = {this.handleMenuSelection.bind(this)}/>
          <MenuItems selectedMenu = {this.state.restaurantMenus.menus[this.state.selectedMenuIndex]}/>
          <div className="toRenderFullMenuButtons">
            {this.partialOrFullMenuRendering()}
          </div>
        </div>
      );
    }
  }
}
ReactDOM.render(<Menu />, document.getElementById('menu'));