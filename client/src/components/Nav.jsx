import React from 'react';
import styles from '../../dist/styles.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={styles.menu_nav}>
        {
          this.props.restaurantMenus.map((menu, index) => (
            <button id="" className={styles.menuButtons} key={index} onClick={()=> {
              this.props.handleMenuSelection(index);
            }} href="">{menu}</button>
          ))
        }
        <hr></hr>
      </div>
    );
  }
}

export default Nav;