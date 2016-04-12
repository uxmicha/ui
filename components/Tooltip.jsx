import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/tooltip.scss'

const classNames = classNamesBind.bind(styles)

export default function Tooltip ({ className, arrow, children, border }) {
  const cls = classNames('cui__tooltip', arrow, className, { border })

  return (
    <div className={cls}>
      {children}
    </div>
  )
}

Tooltip.arrows = [
  'top', 'top-left', 'top-right',
  'bottom', 'bottom-left', 'bottom-right',
  'left', 'left-top', 'left-bottom',
  'right', 'right-top', 'right-bottom'
]

Tooltip.propTypes = {
  className: PropTypes.string,
  arrow: PropTypes.oneOf(Tooltip.arrows),
  children: PropTypes.node,
  border: PropTypes.bool
}
