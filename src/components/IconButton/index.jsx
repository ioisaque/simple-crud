import React from 'react';

export default function IconBtn({ icon, text, color, onClick, ...rest }) {
  return (
    <a className={`p-1 text-${color}`} onClick={onClick} {...rest}>
      {icon && <i className="mIcon">{icon}</i>}
      {text}
    </a>
  );
}
