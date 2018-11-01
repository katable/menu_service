import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Nav from './components/Nav.jsx';
import MenuItems from './components/MenuItems.jsx';
import sampleData from './sampleData.js';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantMenus: sampleData,
      selectedMenu: sampleData.menus[2]
    };
  }

  collectRestaurantMenuTitles() {
    var menuTitles = [];
    for (var i = 0; i < this.state.restaurantMenus.menus.length; i++) {
      menuTitles.push(this.state.restaurantMenus.menus[i].menuSeason);
    }
    return menuTitles;
  }

  render() {
    if (this.state.menus === null) {
      return (
        <div>
          <span>
            At present, we do not have menu information for this restaurant. Please see their website or wait to visit the restaurant to learn more.
          </span>
        </div>
      );
    } else {
      return [
        <Nav restaurantMenus = {this.collectRestaurantMenuTitles()} />,
        <MenuItems selectedMenu = {this.state.selectedMenu} />
      ];
    }
  }
}
ReactDOM.render(<Menu />, document.getElementById('menu'));
