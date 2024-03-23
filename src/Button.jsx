import React from 'react'
import PropTypes from 'prop-type'

function Button(props) {
    const title = props.title;
  return (
    <>
    <button>{title}</button>
    </>
  )
}

Button.defaultProps = {
    title : 'Default'
}
Button.PropTypes = {
    title : PropTypes.string.isRequired
}

export default Button

