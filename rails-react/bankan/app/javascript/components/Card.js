import React from "react"
import PropTypes from "prop-types"

function Card({ cardId }) {
  return (
    <React.Fragment>
      Card: {cardId}
    </React.Fragment>
  );
}

Card.propTypes = {
  cardId: PropTypes.number
};

export default Card
