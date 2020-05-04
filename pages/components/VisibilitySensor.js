// VisibilitySensor.jsx

import React, { Component } from "react";
import PropTypes from "prop-types";
import VSensor from "react-visibility-sensor";

class VisibilitySensor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  render() {
    const { active } = this.state;
    const { once, ...theRest } = this.props;
    return (
      <VSensor
        active={active}
        onChange={isVisible =>
          once &&
          isVisible &&
          this.setState({ active: false }, () =>
            console.log("turned the thing off!")
          )
        }
        {...theRest}
      />
       
    );
  }
}

VisibilitySensor.propTypes = {
  once: PropTypes.bool,
  children: PropTypes.func.isRequired
};

VisibilitySensor.defaultProps = {
  once: false
};

export default VisibilitySensor;