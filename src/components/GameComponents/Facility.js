import React, { Component } from "react";
import styled from "styled-components";

export default class Facility extends Component {
  renderProcessingStatus = () => {
    const { facility } = this.props;

    const readyProucts = facility.processing.filter(product => product.duration < 0);

    if (readyProucts.length < facility.requires.length) {
      return facility.processing.map((process, i) => (
        <p key={`process${i}`}>
          {process.name}, {process.duration > 0 ? `${Math.floor(process.duration)}s` : "Complete"}
        </p>
      ));
    } else {
      return <p>Ready for pickup</p>;
    }
  };

  render() {
    const { facility, handleFacilityClick } = this.props;

    return (
      <FacilityContainer onClick={() => handleFacilityClick(facility)}>
        {facility.name}
        {this.renderProcessingStatus()}
      </FacilityContainer>
    );
  }
}

const FacilityContainer = styled.div`
  width: 100px;

  background: gray;
  padding: 8px;
  margin: 8px;

  p {
    font-size: 8px;
    color: white;
  }
`;
