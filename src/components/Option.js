import React from 'react';

const Option = (props) => (
  <div className="option">
    <div className="option__text">
      {props.index}. {props.listitem}
    </div>
    <button
      className="button button--link"
      onClick={e => props.removeOption(props.listitem)}
    >
    Remove
    </button>
  </div>
  );

export default Option;
