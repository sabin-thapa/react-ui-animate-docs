import React from "react";
import { ActiveLink } from "react-auth-navigation";

import { NavGroup } from ".";

export const ParentGroup = ({ title, items }) => {
  return (
    <div className="sidenav-parent-group">
      <div className="sidenav-parent-group-title">{title}</div>

      <ul className="sidenav-parent-group-list">
        {items.map((item, index) => {
          if (item.items) {
            const { name, items } = item;

            return <NavGroup key={index} title={name} navItems={items} />;
          } else {
            const { name, path } = item;

            return (
              <li key={index} className="sidenav-parent-group-list-item">
                <ActiveLink
                  to={path}
                  className="link-item"
                  activeClassName="active"
                >
                  {name}
                </ActiveLink>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
