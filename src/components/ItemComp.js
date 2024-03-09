import React from "react";
import "../styles/Item.css";
import PropTypes from 'prop-types'; // Import PropTypes module

function Item({ name, price }) {
  return (
    <div className="item">
      <ul>
        <li>
          {name} = {price}
        </li>
      </ul>
    </div>
  );
}

// Define PropTypes for the component
Item.propTypes = {
    name: PropTypes.string.isRequired, // name prop is required and must be a string
    price: PropTypes.number.isRequired, // price prop is required and must be a string
  };

export default Item;
