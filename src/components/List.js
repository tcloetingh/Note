import React from 'react';

class List extends React.Component {

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="list-container">
        List Container
      </div>
    );
  }
}

export default List;