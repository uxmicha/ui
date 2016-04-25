import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/illustration.scss'

const classNames = classNamesBind.bind(styles)

const iconPropTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse'])
}

export const BackButton = ({ className, color, ...props }) => (
  <svg
    className={classNames('cui__illustration', 'button', color, className)}
    strokeLinecap='round'
    strokeWidth='2'
    viewBox='0 0 25 25'
    {...props}>
    <path
      className={classNames('cui__illustration__stroke')}
      d='M15,6l-6.5,6.5l6.5,6.5'
    />
  </svg>
)

export const CloseButton = ({ className, color, ...props }) => (
  <svg
    className={classNames('cui__illustration', 'button', color, className)}
    strokeLinecap='round'
    strokeWidth='2'
    viewBox='0 0 25 25'
    {...props}>
    {[45, -45].map((deg) =>
      <line
        className={classNames('cui__illustration__stroke')}
        style={{transformOrigin: '50% 50%', transform: `rotate(${deg}deg)`}}
        key={deg} x1='3.3' x2='21.7' y1='12.5' y2='12.5'
      />
    )}
  </svg>
)

export const HamburgerButton = ({ className, color, ...props }) => (
  <svg
    className={classNames('cui__illustration', 'button', color, className)}
    viewBox='0 0 25 25'
    strokeLinecap='round'
    strokeWidth='2'
    {...props}>
    {[8, 13, 18].map((y) =>
      <line
        className={classNames('cui__illustration__stroke')}
        key={y} x1='6' x2='19' y1={y} y2={y}
      />
    )}
  </svg>
)

export const OptionsButton = ({ className, color, ...props }) => (
  <svg
    className={classNames('cui__illustration', 'button', color, className)}
    viewBox='0 0 25 25'
    {...props}>
    {[7, 13, 19].map((y) =>
      <circle
        className={classNames('cui__illustration__fill')}
        key={y} cx='12' cy={y} r='2'
      />
    )}
  </svg>
)

export const SearchButton = ({ className, color, ...props }) => (
  <svg
    className={classNames('cui__illustration', 'button', color, className)}
    viewBox='0 0 25 25'
    strokeWidth='2'
    strokeLinecap='round'
    {...props}>
    <circle
      className={classNames('cui__illustration__stroke')}
      cx={10.5} cy={10.5} r={5.5} />
    <line
      className={classNames('cui__illustration__stroke')}
      x1={15} x2={19.2} y1={15} y2={19.2} />
  </svg>
)

BackButton.propTypes = CloseButton.propTypes = HamburgerButton.propTypes = OptionsButton.propTypes = SearchButton.propTypes = iconPropTypes
