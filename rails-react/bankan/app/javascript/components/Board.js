import React from "react";
import PropTypes from "prop-types";
import { Alert } from 'react-bootstrap';

function Board({ boardId }) {
  return (
    <React.Fragment>
      <Alert variant="primary"></Alert>
      Board: {boardId}
    </React.Fragment>
  );
}

Board.propTypes = {
  boardId: PropTypes.number
};

export default Board;
