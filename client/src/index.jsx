import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> hello </div>
    );
  }
}

ReactDOM.render(<Menu />, document.getElementById('menu'));