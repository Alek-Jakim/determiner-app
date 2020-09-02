import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        className="big-button"
      >
        Determine my fate!
      </button>
    </div>
  );
};

export default Action;
