import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import MenuItems from './components/MenuItems.jsx';
import sampleData from './sampleData.js';
import styles from '../dist/styles.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantMenus: sampleData,
      selectedMenuIndex: null,
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

    // the following lines fixes bug where new menu isn't visually rendered (even though html is updated) when selected (by momentarily undoing the top to bottom text transparency)
    document.getElementById('restaurant-menu').style.background = 'none';
    document.getElementById('restaurant-menu').style.WebkitBackgroundClip = 'none';
    document.getElementById('restaurant-menu').style.WebkitTextFillColor = 'black';
    // reapplies top to bottom text gradient if menu is collapsed.
    if (document.getElementById('collapseMenuButton').style.display === 'none') {
      document.getElementById('restaurant-menu').style.background = '-webkit-linear-gradient(black, #d8d9db)';
      document.getElementById('restaurant-menu').style.WebkitBackgroundClip = 'text';
      document.getElementById('restaurant-menu').style.WebkitTextFillColor = 'transparent';
    } else {
      document.getElementById('restaurant-menu').style.background = 'none';
      document.getElementById('restaurant-menu').style.WebkitBackgroundClip = 'none';
      document.getElementById('restaurant-menu').style.WebkitTextFillColor = 'black';
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
    document.getElementById('restaurant-menu').style.height = 'auto';
    document.getElementById('restaurant-menu').style.background = 'none';
    document.getElementById('restaurant-menu').style.WebkitBackgroundClip = 'none';
    document.getElementById('restaurant-menu').style.WebkitTextFillColor = 'black';

    document.getElementById('collapseMenuButton').style.display = 'inline-block';
    document.getElementById('viewFullMenuButton').style.display = 'none';
    
  }

  handleCollapseMenuButtonClick() {
    document.getElementById('restaurant-menu').style.height = '400px';
    document.getElementById('restaurant-menu').style.background = '-webkit-linear-gradient(black, #d8d9db)';
    document.getElementById('restaurant-menu').style.WebkitBackgroundClip = 'text';
    document.getElementById('restaurant-menu').style.WebkitTextFillColor = 'transparent';

    document.getElementById('viewFullMenuButton').style.display = 'inline-block';
    document.getElementById('collapseMenuButton').style.display = 'none';
    document.getElementById('collapseMenuButton').style.position = 'fixed';
    document.getElementById('collapseMenuButton').style.transform = 'translate(-50%, -50%)';
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
            <button id="viewFullMenuButton" className="viewCollapseMenuButtons" onClick={() => this.handleViewFullMenuButtonClick()}>View full menu</button>
            <button id="collapseMenuButton" style={{display: 'none'}} className="viewCollapseMenuButtons" onClick={() => this.handleCollapseMenuButtonClick()}>Collapse menu</button>
          </div>
        </div>
      );
    }
  }
}
ReactDOM.render(<Menu />, document.getElementById('menu'));