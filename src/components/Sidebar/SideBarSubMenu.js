import React from 'react'
import { Link } from 'react-router-dom';

const SideBarSubMenu = (props) => {
    const { subMenus } = props;
    let content = subMenus.map((subItem) =>  (
        <li className="nav-item">
            <Link to={subItem.address} className="nav-link">
                <i className={subItem.icon}></i>
                <p>{subItem.label}</p>
            </Link>
        </li>)
    )
    //console.log(content);
  return (
    <ul className="nav nav-treeview">
      {content}
    </ul>
  )
}

export default SideBarSubMenu