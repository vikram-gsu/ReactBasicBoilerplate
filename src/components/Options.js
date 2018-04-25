import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button button--link" onClick={props.removeAll}>RemoveAll</button>
    </div>
    <div>
      {props.optionItems.length==0 && <div className="widget__message">Please enter your options here</div>}

      {props.optionItems.map((o,i) => <Option key={i+1} 
                                              listitem={o} 
                                              index = {i+1}
                                              removeOption={props.removeOption} />)}
    </div>
  </div>
);
export default Options;