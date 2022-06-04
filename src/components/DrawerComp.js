import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';



const DrawerComp = () => {
    const [openDrawer,setOpenDrawer] = useState(false)

  return (
    <React.Fragment>
        <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
            <List>
                <ListItemButton onClick={()=>setOpenDrawer(false)} key={0}><ListItemText>Blog</ListItemText></ListItemButton>
            </List>
        </Drawer>
        <IconButton sx= {{color:'white',marginLeft:'auto'}} onClick={()=>setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp