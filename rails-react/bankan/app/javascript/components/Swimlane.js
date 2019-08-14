import React from "react"
import PropTypes from "prop-types"

function Swimlane({ swimlaneId }) {
  return (
    <React.Fragment>
      Swimlane: {swimlaneId}
    </React.Fragment>
  );
}

Swimlane.propTypes = {
  swimlaneId: PropTypes.number
};

export default Swimlane
