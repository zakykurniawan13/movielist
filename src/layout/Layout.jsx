import './Layout.scss'

import {Header} from '../Component//Header/Header';
import { NavigationBar } from '../Component/NavigationBar/NavigationBar';
import React from 'react'

export const Layout = (props) => {
  return (
    <div className="layout-wrapper">
      {/* <div className="item1">
          
      </div>
      <div className="item2">
      </div>
      <div className="item3">{props.children}</div> */}
      <div className="item-left">
          <NavigationBar />
      </div>
      <div className="item-right">
        <Header/>
        {props.children}
      </div>
    </div>
  )
}
