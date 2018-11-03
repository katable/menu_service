import React from 'react';

const oddOrEven = (val) => {
  if (val % 2 === 0) {
    return 'leftsideDishes';
  } else {
    return 'leftsideDishes';
  }
};

const MenuItems = (props) => (
  <div id="restaurant-menu" style={{background: '-webkit-linear-gradient(black, #d8d9db)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
    {props.selectedMenu.sections.map((section, index) => (
      <div className="section-container" key={index}>
        <div className="section-names">
          <h3>{section.sectionType}</h3>
        </div>
        <div className="section-items">
          {
            section.dishes.map((dish, index) => (
              <div id={`dish-${index}`} className={`dish-container ${oddOrEven(index)}`} key={index}>
                <div className="dish-names" >{dish.item}</div>
                <div className="prices">{dish.price}</div>
              </div>
            ))
          }
        </div>
        <hr></hr>
      </div>
    )
    )}
  </div>
);

export default MenuItems;