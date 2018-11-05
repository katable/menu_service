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
    if (this.state.restaurantMenus !== null) {
      document.getElementsByClassName(styles.menuButtons)[this.state.selectedMenuIndex].id = styles.renderedMenu;
    }
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
    for (var i = 0; i < document.getElementsByClassName(styles.menuButtons).length; i++) {
      if (menuIndex === i) {
        document.getElementsByClassName(styles.menuButtons)[i].id = styles.renderedMenu;
      } else {
        document.getElementsByClassName(styles.menuButtons)[i].id = '';
      }
    }
    // the following lines fixes bug where new menu isn't visually rendered (even though html is updated) when selected (by momentarily undoing the top to bottom text transparency)
    document.getElementById(styles.restaurantMenu).style.background = 'none';
    document.getElementById(styles.restaurantMenu).style.WebkitBackgroundClip = 'none';
    document.getElementById(styles.restaurantMenu).style.WebkitTextFillColor = 'black';
    // reapplies top to bottom text gradient if menu is collapsed.
    if ((document.getElementById(styles.collapseMenuButton).style.display === ('none')) ||
    (document.getElementById(styles.collapseMenuButton).style.display === (''))) {
      document.getElementById(styles.restaurantMenu).style.background = '-webkit-linear-gradient(black, #d8d9db)';
      document.getElementById(styles.restaurantMenu).style.WebkitBackgroundClip = 'text';
      document.getElementById(styles.restaurantMenu).style.WebkitTextFillColor = 'transparent';
    } else {
      document.getElementById(styles.restaurantMenu).style.background = 'none';
      document.getElementById(styles.restaurantMenu).style.WebkitBackgroundClip = 'none';
      document.getElementById(styles.restaurantMenu).style.WebkitTextFillColor = 'black';
    }
  }

  handleViewFullMenuButtonClick() {
    document.getElementById(styles.restaurantMenu).style.height = 'auto';
    document.getElementById(styles.restaurantMenu).style.background = 'none';
    document.getElementById(styles.restaurantMenu).style.WebkitBackgroundClip = 'none';
    document.getElementById(styles.restaurantMenu).style.WebkitTextFillColor = 'black';
    document.getElementById(styles.collapseMenuButton).style.display = 'inline-block';
    document.getElementById(styles.viewFullMenuButton).style.display = 'none';
    var repositionCollapseMenuButton = this.repositionCollapseMenuButton.bind(this);
    document.body.onscroll = () => repositionCollapseMenuButton();
  }

  handleCollapseMenuButtonClick() {
    document.getElementById(styles.restaurantMenu).style.height = '400px';
    document.getElementById(styles.restaurantMenu).style.background = '-webkit-linear-gradient(black, #d8d9db)';
    document.getElementById(styles.restaurantMenu).style.WebkitBackgroundClip = 'text';
    document.getElementById(styles.restaurantMenu).style.WebkitTextFillColor = 'transparent';
    document.getElementById(styles.viewFullMenuButton).style.display = 'inline-block';
    document.getElementById(styles.collapseMenuButton).style.position = 'fixed';
    document.getElementById(styles.collapseMenuButton).style.display = 'none';
    document.getElementById(styles.collapseMenuButton).style.transform = 'translate(-50%, -50%)';
    document.body.onscroll = '';
  }

  repositionCollapseMenuButton() {
    if ((document.getElementById(styles.collapseMenuButton).getBoundingClientRect().bottom >= document.getElementById('theLastDish').getBoundingClientRect().top) || (document.getElementById(styles.collapseMenuButton).getBoundingClientRect().top === document.getElementById('menu').getBoundingClientRect().top)) {
      document.getElementById(styles.collapseMenuButton).style.position = 'relative';
      document.getElementById(styles.collapseMenuButton).style.bottom = '32px';
      document.getElementById(styles.collapseMenuButton).style.transform = 'translate(0%, 50%)';
    }
  }

  render() {
    if (this.state.restaurantMenus === null) {
      return (
        <div>
          <h2>Menu</h2>
          <hr></hr>
          <span>
            At present, we do not have menu information for this restaurant. Please see their website or wait to visit the restaurant to learn more.
          </span>
        </div>
      );
    } else {
      return (
        <div id={styles.menuComponent}>
          <h2 id='menuComponentTitle'>Menu</h2>
          <hr></hr>
          <Nav restaurantMenus = {this.collectRestaurantMenuTitles()} handleMenuSelection = {this.handleMenuSelection.bind(this)}/>
          <MenuItems selectedMenu = {this.state.restaurantMenus.menus[this.state.selectedMenuIndex]}/>
          <div className={styles.toRenderFullMenuButtons}>
            <button id={styles.viewFullMenuButton} className={styles.viewCollapseMenuButtons} onClick={() => this.handleViewFullMenuButtonClick()}>View full menu</button>
            <button id={styles.collapseMenuButton} className={styles.viewCollapseMenuButtons} onClick={() => this.handleCollapseMenuButtonClick()}>Collapse menu</button>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(<Menu />, document.getElementById('menu'));