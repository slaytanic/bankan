import React from "react"
import PropTypes from "prop-types"

function Column({ columnId }) {
  return (
    <React.Fragment>
      Column: {columnId}
    </React.Fragment>
  );
}

Column.propTypes = {
  columnId: PropTypes.number
};

export default Column
