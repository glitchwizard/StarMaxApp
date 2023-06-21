import React from 'react';
import { AppBar, Toolbar, Typography, MenuItem, Menu, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" id='AppBarComponent' 
    sx={{
    }}
      >
      <Toolbar >
        <Typography variant="h3" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>STARMAX</Link>
        </Typography>
        <Button color="inherit" component={Link} to="/shop">Shop</Button>
        <Button color="inherit" component={Link} to="/shop">Sell/Trade</Button>
        <Button color="inherit" component={Link} to="/finance">Finance</Button>
        <Button color="inherit" onClick={handleClick}>
          More <ArrowDropDownIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose} component={Link} to="/about">About</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/contact">Contact</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
