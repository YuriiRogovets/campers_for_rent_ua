import React from "react"
import { NavLink } from "react-router-dom"
import clsx from "clsx";
import css from "./Navigation.module.css"

const bildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const Navigation = () => {
  return (
      <header >
          <nav className={css.nav}>
                <NavLink className={bildLinkClass} to="/">
                    Home
                </NavLink>

                <NavLink className={bildLinkClass} to="/catalog">
                    Catalog
                </NavLink>
                <NavLink className={bildLinkClass} to="/favorites">
                    Favorites
                </NavLink>
            </nav> 
    </header>
  )
}

export default Navigation