import React, {useEffect, useState} from 'react'

import {AppBar, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme} from '@mui/material'
import DrawerComp from './DrawerComp';

import { Link, useLocation } from 'react-router-dom';

const ResponsiveAppBar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const path = useLocation().pathname;

  useEffect(() => {
    switch (path) {
      case '/blogs':
        setValue(0)
        break;
      case '/projects':
        setValue(1)
        break;
      case '/narwhal':
        setValue(2)
        break;
    }
  })

  


  return (
    <React.Fragment>
      <AppBar className='nav' style={{ background: '#F4F0E8', textColor: 'black', position: 'sticky', top: 0}}>
        <Toolbar sx={{marginLeft:'15vw',marginRight:'15vw'}}>
        <Link to='/' onClick={()=> setValue()}>ernestviola.com</Link>
          {
            isMatch ? (
              <>
              <DrawerComp />
              </>

            ) : (
              <>
                <Tabs sx={{marginLeft:'auto'}} textColor='inherit' value={value} indicatorColor='primary'>
                  <Tab key={0} label='Blog' component={Link} to='/blogs'/>
                  <Tab key={1} label='Projects' component={Link} to='/projects'/>
                  <Tab key={2} label='Narwhal' component={Link} to='/narwhal'/>
                </Tabs>
              </>
            )
          }
          
        </Toolbar>
        
      </AppBar>
    </React.Fragment>
  )
}

export default ResponsiveAppBar;