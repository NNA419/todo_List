import React from 'react'

function Header({title, subTitile}) {
  return (
    <h1 className="title">
      {title}
      <span>{subTitile}</span>
    </h1>
  );
}

export default Header;