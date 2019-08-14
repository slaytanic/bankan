import React from "react"
import PropTypes from "prop-types"

function Board({ boardId }) {
  return (
    <React.Fragment>
      Board: {boardId}
    </React.Fragment>
  );
}

Board.propTypes = {
  boardId: PropTypes.number
};

export default Board
