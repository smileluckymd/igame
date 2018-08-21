import React, { Component } from 'react';

const MyContainer = WrappendComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
      };
      this.onNameChange = this.onNameChange.bind(this);
    }

    onNameChange(event) {
      this.setState({
        name: event.target.value,
      });
    }

    render() {
      const { name } = this.state;
      const newProps = {
        name: {
          value: name,
          onChange: this.onNameChange,
        },
      };
      return <WrappendComponent {...this.props} {...newProps} />;
    }
  };

export default MyContainer;
