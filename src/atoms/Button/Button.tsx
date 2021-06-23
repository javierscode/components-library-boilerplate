import React from 'react'
import classnames from 'classnames'
import styles from './Button.module.css'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

type StyleSize = 'button--small' | 'button--medium' | 'button--large'

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const StyleSize: StyleSize = `button--${size}`

  return (
    <button
      type='button'
      className={classnames(
        styles.button,
        styles[StyleSize],
        primary ? styles['button--primary'] : styles['button--secondary']
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
