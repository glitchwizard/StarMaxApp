import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, MenuItem, Menu, Button, useMediaQuery, IconButton, SwipeableDrawer, List, ListItem, ListItemText, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  const menuItems = (
    <>
      <Button color="inherit" component={Link} to="/shop">Shop</Button>
      <Button color="inherit" component={Link} to="/finance">Finance</Button>
      <Button color="inherit" onClick={handleClick}>
        More <ArrowDropDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/about">About</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/contact">Contact</MenuItem>
      </Menu>
    </>
  );

  const drawerItems = (
    <List>
      <ListItem component={Link} onClick={toggleDrawer(false)} to="/shop" color="inherit">
        <ListItemText primary="Shop" />
      </ListItem>
      <ListItem component={Link} onClick={toggleDrawer(false)} to="/finance" color="inherit">
        <ListItemText primary="Finance" />
      </ListItem>
      <ListItem component={Link} onClick={toggleDrawer(false)} to="/about" color="inherit">
        <ListItemText primary="About" />
      </ListItem>
      <ListItem component={Link} onClick={toggleDrawer(false)} to="/contact" color="inherit">
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>STARMAX</Link>
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor='right'
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              {drawerItems}
            </SwipeableDrawer>
          </>
        ) : menuItems}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
