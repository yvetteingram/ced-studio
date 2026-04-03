import React from 'react';

const variantClasses = {
  cjones: 'btn-cjones',
  hbmedia: 'btn-hbmedia',
  hbstream: 'btn-hbstream',
  lilsaid: 'btn-lilsaid',
  outline: 'btn-outline',
};

export default function Button({
  variant = 'outline',
  children,
  onClick,
  href,
  as: Tag,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `${variantClasses[variant] || 'btn-outline'} inline-block ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  const Element = Tag || 'button';
  return (
    <Element type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </Element>
  );
}
