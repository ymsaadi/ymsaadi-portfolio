import React from 'react'
import classNames from 'classnames'
import "../styles/aboutMenu.css"

const AboutMenuItem = ({title, active, onClick}) => {
  console.log(title);
  return (
    <div className={classNames("item", {active})} onClick={onClick}>
        <h2 className="title">{title}</h2>
    </div>
  )
}

export default AboutMenuItem