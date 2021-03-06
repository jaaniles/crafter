import React, { Component } from "react";
import styled from "styled-components";

import Facility from "../GameComponents/Facility";

export default class FacilitiesContainer extends Component {
  render() {
    const { facilities, handleFacilityClick } = this.props;

    return (
      <Facilities>
        {facilities.map((facility, i) => (
          <Facility
            key={`f${i}`}
            pullRight={i & 1}
            i={i}
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
