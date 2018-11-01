import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import Nav from './components/Nav.jsx';
import MenuItems from './components/MenuItems.jsx';

var sampleData = {"_id":"5bda6944a47a2f74e4d6e173","restaurantId":"51","menus":[{"sections":[{"dishes":[{"item":"neque quas quos accusamus alias blanditiis","price":"$631.00"},{"item":"cum illo quia voluptate esse inventore","price":"$357.00"},{"item":"atque vitae minus dignissimos aut illum","price":"$467.00"},{"item":"minus vel fugit quisquam voluptatem facilis","price":"$310.00"},{"item":"voluptas voluptatem pariatur voluptates harum voluptas","price":"$701.00"},{"item":"modi voluptatum est nam molestiae itaque","price":"$484.00"},{"item":"harum et corporis maxime exercitationem laudantium","price":"$694.00"},{"item":"veniam qui sequi eum consequatur modi","price":"$974.00"},{"item":"nam et dolorum occaecati harum aut","price":"$558.00"}],"sectionType":"Hot Beverages"},{"dishes":[{"item":"porro omnis blanditiis provident placeat quia","price":"$57.00"},{"item":"dolorem animi consequuntur aperiam aliquid quae","price":"$326.00"},{"item":"adipisci eveniet minus et optio deserunt","price":"$901.00"},{"item":"qui non ut soluta accusamus est","price":"$628.00"},{"item":"iste error quae voluptatem culpa eum","price":"$691.00"},{"item":"laudantium optio nobis est porro ullam","price":"$284.00"},{"item":"ea fuga neque error harum et","price":"$611.00"},{"item":"nesciunt eius accusamus est culpa dignissimos","price":"$528.00"},{"item":"omnis eligendi omnis omnis omnis corporis","price":"$969.00"}],"sectionType":"Primi‎"},{"dishes":[{"item":"ullam fugit et temporibus deserunt quos","price":"$260.00"},{"item":"omnis qui dolor atque est deserunt","price":"$4.00"},{"item":"consequatur quam ipsum impedit et sunt","price":"$884.00"},{"item":"quas tenetur porro et odit neque","price":"$133.00"},{"item":"nam aspernatur vero error itaque corporis","price":"$991.00"},{"item":"laborum deleniti quidem dolores dicta quia","price":"$283.00"},{"item":"earum accusantium minima magnam occaecati aut","price":"$753.00"},{"item":"ipsam quasi vel numquam deleniti debitis","price":"$556.00"},{"item":"aut perspiciatis aliquam ea incidunt non","price":"$254.00"}],"sectionType":"House Specialties"}],"menuSeason":"Dinner"},{"sections":[{"dishes":[{"item":"debitis officia molestiae ipsum amet cum","price":"$228.00"},{"item":"blanditiis qui quo asperiores quia similique","price":"$220.00"},{"item":"quidem ad nihil optio est quod","price":"$837.00"},{"item":"qui tenetur sed voluptas deserunt neque","price":"$60.00"},{"item":"molestiae consequuntur velit corporis incidunt laboriosam","price":"$388.00"},{"item":"quod quisquam dolor et itaque nisi","price":"$759.00"},{"item":"officia sed veritatis voluptatibus natus qui","price":"$970.00"},{"item":"quas occaecati consequatur blanditiis suscipit sit","price":"$107.00"},{"item":"fugit reprehenderit ut consequuntur sint non","price":"$254.00"}],"sectionType":"Soups"},{"dishes":[{"item":"tempora ea architecto minus numquam quas","price":"$411.00"},{"item":"neque voluptatibus necessitatibus et doloremque ratione","price":"$762.00"},{"item":"aspernatur et aliquam qui delectus qui","price":"$282.00"},{"item":"facilis voluptate perferendis voluptatem exercitationem labore","price":"$121.00"},{"item":"enim quia tempore sint ipsa fugiat","price":"$824.00"},{"item":"ut consequatur numquam debitis incidunt cum","price":"$398.00"},{"item":"blanditiis expedita pariatur libero debitis ut","price":"$330.00"},{"item":"in maxime dolorum incidunt consequatur facilis","price":"$558.00"},{"item":"rerum incidunt eum quia dignissimos dolores","price":"$515.00"}],"sectionType":"Entrees"},{"dishes":[{"item":"voluptates qui et modi aut sunt","price":"$1000.00"},{"item":"culpa et soluta mollitia fuga est","price":"$511.00"},{"item":"minima qui est itaque est et","price":"$112.00"},{"item":"ut voluptatem quo saepe nam fugiat","price":"$298.00"},{"item":"sapiente adipisci natus quae et laborum","price":"$493.00"},{"item":"blanditiis deserunt commodi minus doloremque soluta","price":"$537.00"},{"item":"est occaecati et quibusdam dolores tempore","price":"$156.00"},{"item":"aut inventore adipisci labore voluptatem eaque","price":"$54.00"},{"item":"eaque aspernatur hic error maxime iure","price":"$344.00"}],"sectionType":"Primi‎"}],"menuSeason":"Lunch"},{"sections":[{"dishes":[{"item":"ad molestiae ea recusandae et reiciendis","price":"$669.00"},{"item":"eveniet maiores at at mollitia aspernatur","price":"$577.00"},{"item":"pariatur omnis accusamus suscipit facilis aspernatur","price":"$473.00"},{"item":"soluta magni molestiae culpa laboriosam enim","price":"$527.00"},{"item":"dolores quaerat commodi quia nobis quos","price":"$557.00"},{"item":"dolor totam voluptas quam quae culpa","price":"$326.00"},{"item":"nihil optio eos dolorem vitae rerum","price":"$698.00"},{"item":"et qui tempora voluptas qui perspiciatis","price":"$553.00"},{"item":"eligendi totam asperiores iure repellendus reprehenderit","price":"$682.00"}],"sectionType":"Shareables"},{"dishes":[{"item":"ut nihil voluptas ipsum molestiae fugit","price":"$70.00"},{"item":"ut nobis quod voluptatum modi incidunt","price":"$84.00"},{"item":"repellat dolores quo sit deserunt nobis","price":"$89.00"},{"item":"est molestias dolor vero optio nihil","price":"$618.00"},{"item":"repudiandae consectetur consectetur vitae et et","price":"$435.00"},{"item":"provident hic neque perspiciatis quia assumenda","price":"$290.00"},{"item":"officiis a sed impedit dolorem voluptatem","price":"$789.00"},{"item":"minus autem qui id explicabo repellat","price":"$107.00"},{"item":"at magni ut sed corrupti sunt","price":"$40.00"}],"sectionType":"Starters"},{"dishes":[{"item":"suscipit blanditiis sapiente enim quas dignissimos","price":"$251.00"},{"item":"nesciunt similique sed ut corrupti dolore","price":"$72.00"},{"item":"nobis illo distinctio voluptatem voluptatem sunt","price":"$171.00"},{"item":"minima totam aut nemo laborum quo","price":"$374.00"},{"item":"eligendi aut inventore ut aut cupiditate","price":"$602.00"},{"item":"harum quasi dolorem modi officia qui","price":"$320.00"},{"item":"quam natus voluptatum cum voluptas quaerat","price":"$328.00"},{"item":"ut a minus alias tenetur est","price":"$964.00"},{"item":"reprehenderit est dicta soluta temporibus labore","price":"$401.00"}],"sectionType":"Seafood Entrée"}],"menuSeason":"Christmas's Eve"}]};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantMenus: sampleData
    };
  }

  collectRestaurantMenuTitles() {
    console.log(this.state.restaurantMenus.menus[0]);
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
        <MenuItems selectedMenu = {this.state.restaurantMenus.menus[0]} />
      ];
    }
  }
}
ReactDOM.render(<Menu />, document.getElementById('menu'));
