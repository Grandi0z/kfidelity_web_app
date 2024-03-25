import React from 'react'
import SideBarMenuItem from './SideBarMenuItem'
const SidebarMenu = () => {
    const sideBarMenuItems = [
        {address:"home", icon:"nav-icon fas fa-tachometer-alt", label:"Dashboard", scdIcon:"right fas fa-angle-left"},
        {
            address: "mon_compte.html",  icon: "nav-icon fas fa-th", label: "Mon Compte", badge: { text: "New", classes: "right badge badge-danger" }
          },
          {
            address: "gestion_compte.html", icon: "nav-icon fas fa-th", label: "Gestion compte"
          },
          {
            address: "#", icon: "nav-icon fas fa-chart-pie", label: "Parrainage", scdIcon: "right fas fa-angle-left"
          },
          {
            address: "#", icon: "nav-icon fas fa-tree", label: "Parametre", scdIcon: "fas fa-angle-left right"
          },
          {
            address: "", icon: "nav-icon fas fa-edit", label: "Operations",scdIcon: "fas fa-angle-left right",
            children: [
              { address: "operarations_create.html", icon: "far fa-circle nav-icon", label: "Nouvelle Opération" },
              { address: "operarations.html", icon: "far fa-circle nav-icon", label: "Listes Opération" }
            ]
          },

    ]


    // const sideBarMenuItems = [
    //     {
    //       address: "home.html",
    //       icon: "nav-icon fas fa-tachometer-alt",
    //       label: "Dashboard",
    //       scdIcon: "right fas fa-angle-left"
    //     },
       
    //     {
    //       header: "CONFIGURATION"
    //     },
    //     {
    //       address: "pages/calendar.html",
    //       icon: "nav-icon fas fa-calendar-alt",
    //       label: "Calendar",
    //       badge: { text: "2", classes: "right badge badge-info" }
    //     },
    //     {
    //       address: "pages/gallery.html",
    //       icon: "nav-icon far fa-image",
    //       label: "Gallery"
    //     },
    //     {
    //       address: "pages/kanban.html",
    //       icon: "nav-icon fas fa-columns",
    //       label: "Kanban Board"
    //     },
    //     {
    //       address: "#",
    //       icon: "nav-icon far fa-envelope",
    //       label: "Mailbox",
    //       scdIcon: "fas fa-angle-left right",
    //       children: [
    //         { address: "pages/mailbox/mailbox.html", icon: "far fa-circle nav-icon", label: "Inbox" },
    //         { address: "pages/mailbox/compose.html", icon: "far fa-circle nav-icon", label: "Compose" },
    //         { address: "pages/mailbox/read-mail.html", icon: "far fa-circle nav-icon", label: "Read" }
    //       ]
    //     }
    //   ];

    const listSidebarMenuItems = sideBarMenuItems.map((sideBarMenuItem) => (
        <li className="nav-item menu-open" key={Math.random() * (10 - 1) + 1}>
            <SideBarMenuItem sideBarMenuItem = {sideBarMenuItem}/>
        </li>
         )
    )
        
  return (
    <nav className='mt-2'>
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {listSidebarMenuItems}
        </ul>
    </nav>
  )
}

export default SidebarMenu