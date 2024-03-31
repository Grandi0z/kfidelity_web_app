import React from 'react'
import SideBarMenuItem from './SideBarMenuItem'
const SidebarConfiguration = () => {
   
    const sideConfigsItems = [
        {
          address: "pages/calendar.html",
          icon: "nav-icon fas fa-calendar-alt",
          label: "Calendar",
          badge: { text: "2", classes: "right badge badge-info" }
        },
        {
          address: "pages/gallery.html",
          icon: "nav-icon far fa-image",
          label: "Gallery"
        },
        {
          address: "pages/kanban.html",
          icon: "nav-icon fas fa-columns",
          label: "Kanban Board"
        },
        {
          address: "#",
          icon: "nav-icon far fa-envelope",
          label: "Mailbox",
          scdIcon: "fas fa-angle-left right",
          children: [
            { address: "pages/mailbox/mailbox.html", icon: "far fa-circle nav-icon", label: "Inbox" },
            { address: "pages/mailbox/compose.html", icon: "far fa-circle nav-icon", label: "Compose" },
            { address: "pages/mailbox/read-mail.html", icon: "far fa-circle nav-icon", label: "Read" }
          ]
        }
      ];

    const listSidebarMenuItems = sideConfigsItems.map((sideBarMenuItem) => (
        <li className="nav-item menu-open" key={Math.random() * (10 - 1) + 1}>
            <SideBarMenuItem sideBarMenuItem = {sideBarMenuItem}/>
        </li>
         )
    )
        
  return (
    <nav className='mt-2'>
        <li class="nav-header">CONFIGURATION</li>
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {listSidebarMenuItems}
        </ul>
    </nav>
  )
}

export default SidebarConfiguration