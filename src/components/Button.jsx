import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default function Button({ margin, padding, weight, border, text, bgColor, height, width, textColor }) {
  if(!weight) { //default font weight to light/thin

    weight = 200
  }
  if(!margin) {
    margin = 0
  }

    return (
      <div onClick={() => console.log('we here')}
        style={{ margin: margin }}>
        <a className="btn" style={{
          backgroundColor: bgColor,
          // height: 45,
          // width: 160,
          border: border,
          //height: parseInt(height),
          //width: parseInt(width),
          color: textColor,
          fontFamily: 'Roboto',
          borderRadius: 2,
          marginRight: 30,
          fontWeight: weight,
          padding: padding
        }}>
          <span style={{
            verticalAlign: 'middle',
            textAlign: 'center'
          }}>{text}</span>
        </a>
      </div>
    )
  }
//}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired
}