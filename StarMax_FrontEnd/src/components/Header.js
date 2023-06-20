import React from 'react';
import { AppBar, Toolbar, Typography, MenuItem, Menu, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';

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
    <AppBar position="static" id='AppBarComponent'>
      <Toolbar>
        <Typography variant="h3" style={{ flexGrow: 1 }}>
          STARMAX
        </Typography>
        <Button color="inherit">Shop</Button>
        <Button color="inherit">Sell/Trade</Button>
        <Button color="inherit">Finance</Button>
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
          <MenuItem onClick={handleClose}>Service & Repairs</MenuItem>
          <MenuItem onClick={handleClose}>FAQ & Support</MenuItem>
          <MenuItem onClick={handleClose}>Why StarMax</MenuItem>
          <MenuItem onClick={handleClose}>Buying Online</MenuItem>
          <MenuItem onClick={handleClose}>Starship Research & Advice</MenuItem>
          <MenuItem onClick={handleClose}>Warranties & MaxCare</MenuItem>
          <MenuItem onClick={handleClose}>Search jobs at StarMax</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

const TransparentHeader = styled(Header)({
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // black with 80% opacity
});

export default TransparentHeader;
