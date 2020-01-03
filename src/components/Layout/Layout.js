import React from "react";

import classes from "./Layout.css"


const layout = props => (
  <React.Fragment>
    <div>Toolbars, SideDrawer, Backdrop</div>
    <main className='Content' >{props.children}</main>
  </React.Fragment>
);



export default layout;


