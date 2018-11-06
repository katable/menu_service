import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import MenuItems from './components/MenuItems.jsx';
import styles from '../dist/styles.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantMenus: null,
      selectedMenuIndex: null,
    };
  }

  componentWillMount() {
    this.setState({
      selectedMenuIndex: 0
    });
  }
  
  componentDidMount() {
    $.ajax('/restaurants/22/menu')
      .done((data) => this.setState({ restaurantMenus: data}))
      .then( () => {
        if (this.state.restaurantMenus !== null && this.state.restaurantMenus !== '') {
          document.getElementsByClassName(styles.menuButtons)[this.state.selectedMenuIndex].id = styles.renderedMenu;
        }
      })
      .catch((err) => { throw err; });
  }

  collectRestaurantMenuTitles() {
    var menuTitles = [];
    for (var i = 0; i < this.state.restaurantMenus.menus.length; i++) {
      menuTitles.push(this.state.restaurantMenus.menus[i].menuSeason);
    }
    return menuTitles;
  }

  removeTextColorGradient() {
    var $restaurantMenuStyle = document.getElementById(styles.restaurantMenu).style;
    $restaurantMenuStyle.background = 'none';
    $restaurantMenuStyle.WebkitBackgroundClip = 'none';
    $restaurantMenuStyle.WebkitTextFillColor = 'black';
  }

  applyTextColorGradient() {
    var $restaurantMenuStyle = document.getElementById(styles.restaurantMenu).style;
    $restaurantMenuStyle.background = '-webkit-linear-gradient(black, #d8d9db)';
    $restaurantMenuStyle.WebkitBackgroundClip = 'text';
    $restaurantMenuStyle.WebkitTextFillColor = 'transparent';
  }

  handleMenuSelection(menuIndex) {
    this.setState({
      selectedMenuIndex: menuIndex
    });
    var $menuButtons = document.getElementsByClassName(styles.menuButtons);
    for (var i = 0; i < $menuButtons.length; i++) {
      if (menuIndex === i) {
        $menuButtons[i].id = styles.renderedMenu;
      } else {
        $menuButtons[i].id = '';
      }
    }
    this.removeTextColorGradient();
    if ((document.getElementById(styles.collapseMenuButton).style.display === ('none')) ||
    (document.getElementById(styles.collapseMenuButton).style.display === (''))) {
      this.applyTextColorGradient();
    } else {
      this.removeTextColorGradient();
    }
  }

  handleViewFullMenuButtonClick() {
    var $restaurantMenuStyle = document.getElementById(styles.restaurantMenu).style;
    $restaurantMenuStyle.height = 'auto';
    this.removeTextColorGradient();
    document.getElementById(styles.collapseMenuButton).style.display = 'inline-block';
    document.getElementById(styles.viewFullMenuButton).style.display = 'none';
    var repositionCollapseMenuButton = this.repositionCollapseMenuButton.bind(this);
    document.body.onscroll = () => repositionCollapseMenuButton();
  }

  handleCollapseMenuButtonClick() {
    var $restaurantMenuStyle = document.getElementById(styles.restaurantMenu).style;
    var $viewFullMenuButtonStyle = document.getElementById(styles.viewFullMenuButton).style;
    var $collapseMenuButtonStyle = document.getElementById(styles.collapseMenuButton).style;
    $restaurantMenuStyle.height = '400px';
    this.applyTextColorGradient();
    $viewFullMenuButtonStyle.display = 'inline-block';
    $collapseMenuButtonStyle.position = 'fixed';
    $collapseMenuButtonStyle.display = 'none';
    $collapseMenuButtonStyle.transform = 'translate(-50%, -50%)';
    document.body.onscroll = '';
  }

  repositionCollapseMenuButton() {
    var $collapseMenuButtonStyle = document.getElementById(styles.collapseMenuButton).style;
    // once incorporated with other components, consider comparing button position vs. bottom of component instead of the last item on the menu. Also need to refactor MenuItems.jsx if decision is to change.
    if ((document.getElementById(styles.collapseMenuButton).getBoundingClientRect().bottom >= document.getElementById(styles.theLastDish).getBoundingClientRect().top) || (document.getElementById(styles.collapseMenuButton).getBoundingClientRect().top <= document.getElementById(styles.menuComponent).getBoundingClientRect().top)) {
      $collapseMenuButtonStyle.position = 'relative';
      $collapseMenuButtonStyle.bottom = '32px';
      $collapseMenuButtonStyle.transform = 'translate(0%, 50%)';
    }
  }

  render() {
    if (this.state.restaurantMenus === null || this.state.restaurantMenus === '') {
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
          <h2 id={styles.menuComponentTitle}>Menu</h2>
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