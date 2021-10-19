import { NavLink } from "react-router-dom"
import "./index.css"

export const Header = () => {
    return (
        <div className="header">
            <NavLink to = "/articles">
                     SHARETRADE.com
            </NavLink>
        </div>
    )
}