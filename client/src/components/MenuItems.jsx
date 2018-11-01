import React from 'react';

const MenuItems = (props) => (
  <div>
    {props.selectedMenu.sections.map((section) => (
      <div>
        <h3>{section.sectionType}</h3>
        {
          section.dishes.map((dish) => [
            <div>{dish.item}</div>,
            <div>{dish.price}</div>
          ])
        }
      </div>
    )
    )}
  </div>
);

export default MenuItems;