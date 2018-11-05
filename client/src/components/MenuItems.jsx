import React from 'react';
import styles from '../../dist/styles.css';

const oddOrEven = (val) => {
  if (val % 2 === 0) {
    return styles.leftsideDishes;
  } else {
    return styles.leftsideDishes;
  }
};

const MenuItems = (props) => (
  <div id={styles.restaurantMenu}>
    {props.selectedMenu.sections.map((section, sectionIndex) => (
      <div className={styles.sectionContainer} key={sectionIndex}>
        <div className={styles.sectionNames}>
          <h3>{section.sectionType}</h3>
        </div>
        <div className={styles.sectionItems}>
          {
            section.dishes.map((dish, index) => {
              if ((dish === section.dishes[section.dishes.length - 1]) && (sectionIndex === props.selectedMenu.sections.length - 1)) {
                return (
                  <div id={styles.theLastDish} className={`${styles.dishContainer} ${oddOrEven(index)}`} key={index}>
                    <div className={styles.dishNames}>{dish.item}</div>
                    <div className={styles.prices}>{dish.price}</div>
                  </div>
                );
              }
              return (
                <div className={`${styles.dishContainer} ${oddOrEven(index)}`} key={index}>
                  <div className={styles.dishNames}>{dish.item}</div>
                  <div className={styles.prices}>{dish.price}</div>
                </div>
              );
            }
            )
          }
        </div>
        <hr></hr>
      </div>
    )
    )}
  </div>
);

export default MenuItems;