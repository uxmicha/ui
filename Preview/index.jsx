import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import contains from '../lib/contains'
import defaultStyles from './styles.scss'

const baseClass = 'preview'

const classes = {
  content: `${baseClass}__content`,
  footer: `${baseClass}__footer`,
  footerLink: `${baseClass}__footer__link`,
  title: `${baseClass}__title`
}

export function Main ({ className, children, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames(
    baseClass,
    { 'has-link': contains(Link, children) },
    className
  )

  return (
    <div className={cls} {...props}>
      {children}
    </div>
  )
}

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.object
}

export function Content ({ children, className, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames(classes.content)} {...props}>
      {children}
    </div>
  )
}

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.object
}

export function Title ({ children, className, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <h2 className={classNames(classes.title, className)} {...props}>
      {children}
    </h2>
  )
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.object
}

export function Link ({ children, className, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames(classes.footer)}>
      <a className={classNames(classes.footerLink, className)} {...props}>
        {children}
      </a>
    </div>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.object
}
