import React from 'react';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Buttons = (props) => {
  const { newStatus } = props;

  let btn;

  if (newStatus) {
    btn = (
      <div className="btn-container">
        <button type="submit" className="save-btn">
          Save
        </button>
        <button type="button" className="cancel-btn">
          Cancel
        </button>
      </div>
    );
  } else {
    btn = (
      <div className="edit-btn-container">
        <div>
          <button type="submit" className="save-btn">
            Save
          </button>
          <button type="button" className="cancel-btn">
            Cancel
          </button>
        </div>
        <button type="button" className="trash-btn">
          <FontAwesomeIcon icon={faTrashAlt} className="trash-icon" />
          Delete
        </button>
      </div>
    );
  }

  return btn;
};

export default Buttons;
