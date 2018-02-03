import React, { Component } from "react";
import styled from "styled-components";

import Facility from "../GameComponents/Facility";

import Flex from "../Layout/Flex";

export default class FacilitiesContainer extends Component {
  render() {
    const { facilities, handleFacilityClick } = this.props;

    return (
      <Facilities>
        {facilities.map((facility, i) => (
          <Facility key={`f${i}`} facility={facility} handleFacilityClick={handleFacilityClick} />
        ))}
      </Facilities>
    );
  }
}

const Facilities = Flex.extend`
  justify-content: space-between;
`;
