import React, { PropTypes } from 'react'
import defaultStyles from '../styles'
import withDisplayName from '../withDisplayName'
import {
  withHoverProps,
  withMouseDownProps,
  withTouchProps,
  overridable,
  themeable
} from '@klarna/higher-order-components'

import compose from 'ramda/src/compose'

const classes = {
  bgWrapper: 'bg-wrapper',
  iconButton: 'icon-button',
  fill: 'illustration__fill',
  label: 'illustration__label',
  stroke: 'illustration__stroke'
}

const Hamburger = ({
  active,
  color,
  hover,
  id,
  label,
  left,
  styles,
  topLeft,
  topRight,
  ...props
}) => {
  const ids = id
    ? {
      illustration: `${id}__illustration`,
      label: `${id}__label`,
      wrapper: `${id}__wrapper`
    } : {}

  const colorMode = color == null ? 'base' : color

  return <div
    id={id}
    style={{
      // TODO: Use `mobile` variation as well (styles.js:156)
      ...defaultStyles.base.main,
      ...(topRight ? defaultStyles.topRight.main : {}),
      ...(topLeft ? defaultStyles.topLeft.main : {}),
    }}
    {...props}>
    <div
      id={ids.wrapper}
      style={{
        ...defaultStyles.base.wrapper,
        ...(active ? defaultStyles.active[colorMode].wrapper : {})
      }}>
      <svg
        id={ids.illustration}
        viewBox='0 0 25 25'
        strokeLinecap='round'
        strokeWidth='2'
        height='20px'
        width='20px'>
        {[8, 13, 18].map((y) =>
          <line
            key={y} x1='6' x2='19' y1={y} y2={y}
            style={{
              ...defaultStyles[colorMode].stroke,
              ...(hover ? defaultStyles.hover[colorMode].stroke : {})
            }}
          />
        )}
      </svg>

      <span
        id={ids.label}
        style={{
          ...defaultStyles.base.label,
          ...(left ? defaultStyles.left.label : {}),
          ...defaultStyles[colorMode].label,
          ...(hover ? defaultStyles.hover[colorMode].label : {})
        }}>
        {label}
      </span>
    </div>
  </div>
}

Hamburger.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  hover: PropTypes.bool,
  id: PropTypes.string,
  styles: PropTypes.object
}

export default compose(
  themeable(() => ({color: 'gray'})),
  overridable(defaultStyles),
  withHoverProps({hover: true}),
  withMouseDownProps({active: true}),
  withTouchProps({active: true}),
  withDisplayName('Hamburger')
)(Hamburger)