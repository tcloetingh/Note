import React, { Component } from 'react';

class Nav extends Component {
  render() {
    const { toggle, show } = this.props; //recieved toggleNote() as props
    return (                      // and set to toggle const *name must be toggle*
      <div className="nav-container"> 
        <div className="nav-logo">Note</div>
        <div className="nav-button" onClick={() => toggle()} >
          { show ? 'what the heckkk' : '+ Note' }
        </div>
      </div>

    );
  }
}

export default Nav;