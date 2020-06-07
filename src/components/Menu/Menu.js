import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'

const menus=[
    {
        name: 'Trang Chủ',
        exact:true,
        to:'/home-page'
    },
    {
        name: 'Quản lý sản phẩm',
        exact:false,
        to:'/product-list'
    }
]

const MenuLink =({label, to, activeOnlyWhenExact})=>{
    return (
        <Route path={to}
                exact={activeOnlyWhenExact}
                children={(match)=>{
                    var active = match ? 'active': '';
                    return(
                        <li  className={active} >
                        <Link to={to}>{label}</Link>
                     </li>
                    )
                }}
        ></Route>
    )
}

const resultMenus= menus.map((menu,index)=>{
    return <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact}></MenuLink>
})

export default class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <a className="navbar-brand" href="#">Call API</a>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            {resultMenus}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
