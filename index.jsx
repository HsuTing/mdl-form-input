'use strict'

import jQuery from 'jquery';
import React from 'react';

export default class input extends React.Component {
  render() {
    let data = this.props.data;
    let defaultValue = data.default != undefined ? data.default : '';
    this.props.getData(data.id, defaultValue);
    this.props.getComponents(data.id, this);

    return (
      <div ref="component" className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={data.style}>
        <input className="mdl-textfield__input"
          type={data.type}
          id={data.id}
          name={data.id}
          maxLength={data.max}
          pattern={data.regular_expression}
          onChange={this._onChange.bind(this)}
          onKeyDown={this.props.keyDown}
          defaultValue={defaultValue}
        />
        <label className="mdl-textfield__label" htmlFor={data.id}>{data.label}</label>
        <span className="mdl-textfield__error">{data.error}</span>
      </div>
    );
  }

  _onChange(e) {
    let data = this.props.data;
    let val = jQuery(e.target).val();
    if(data.change != undefined) {
      let temp = data.change(val);
      if(temp != undefined) {
        val = temp;
      }
    }

    if(data.isNotRequire) {
      this.props.getData(data.id, val);
      return;
    }

    if(!jQuery(this.refs.component).hasClass('is-dirty') || jQuery(this.refs.component).hasClass('is-invalid')) {
      jQuery(this.refs.component).addClass('is-invalid');
      this.props.getData(data.id, '');
    }
    else {
      this.props.getData(data.id, val);
    }
  }
};
