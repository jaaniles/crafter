import React, { Component } from "react";
import styled from "styled-components";
import KeyHandler, { KEYPRESS } from "react-key-handler";

import KeyboardKey from "../KeyboardKey";
import ProgressBar from "../ProgressBar";
import getFacilityKey from "../../utils/getFacilityKey";
export default class Facility extends Component {
  renderProcessingStatus = () => {
    const { facility } = this.props;

    const readyProucts = facility.processing.filter(product => product.duration < 0);

    if (readyProucts.length < facility.requires.length) {
      return facility.processing.map((process, i) => (
        <Processing key={`process${i}`}>
          {`${process.duration > 0 ? "> processing.. " : "Complete: "}`}
          {process.name}
        </Processing>
      ));
    } else {
      return <Processing>Ready for pickup</Processing>;
    }
  };

  renderProgressBar = () => {
    const { facility } = this.props;

    if (facility.processing.length < 1) {
      return null;
    }

    const processingItem = facility.processing.find(product => product.duration > 0);

    if (!processingItem || !processingItem.duration) {
      return null;
    }

    const durationProgress = processingItem.duration / processingItem.maxDuration * 100;
    return <ProgressBar progress={durationProgress} />;
  };

  render() {
    const { facility, handleFacilityClick, pullRight, i } = this.props;

    const processing = facility.processing.length > 0;

    return (
      <FacilityContainer
        pullRight={pullRight}
        onClick={() => handleFacilityClick(facility)}
        processing={processing}
      >
        <KeyHandler
          keyEventName={KEYPRESS}
          keyValue={getFacilityKey(i)}
          onKeyHandle={() => handleFacilityClick(facility)}
        />
        <p>{facility.name}</p>
        <KeyboardKey>
          <span>{getFacilityKey(i)}</span>
        </KeyboardKey>
        <ProcessingStatus>{this.renderProcessingStatus()}</ProcessingStatus>
        {this.renderProgressBar()}
      </FacilityContainer>
    );
  }
}

const FacilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  background: none;
  color: #3c3c3c;

  border: ${props => (props.processing ? "2px solid #3c3c3c" : "2px dashed #3c3c3c")};

  justify-self: ${props => (props.pullRight ? "end" : "initial")};
  margin: 32px 0;
  padding: 8px 0;
`;
const ProcessingStatus = styled.div`
  margin: 8px 0;
`;
const Processing = styled.p`
  font-size: 12px;
`;
