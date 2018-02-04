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
          <Facility
            key={`f${i}`}
            pullRight={i & 1}
            facility={facility}
            handleFacilityClick={handleFacilityClick}
          />
        ))}
      </Facilities>
    );
  }
}

const Facilities = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;
