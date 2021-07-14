import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { SideBarData } from '../lib/SideBarData';
import FaceIcon from '@material-ui/icons/Face';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

interface Iprops {
    user: string | null
}

export default function DropDown(props: Iprops) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar-item">
      <div
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
          <FaceIcon />
        {props.user}
      </div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {SideBarData.map(menu => {
            return (
            <div>
                <StyledMenuItem
                onClick={() => { window.location.pathname = menu.link }}
                >
                <ListItemIcon>
                <div id="icon">{menu.icon}</div>{" "}
                </ListItemIcon>
                <ListItemText primary={menu.title} />
                </StyledMenuItem>
            </div>
          )})}
      </StyledMenu>
    </div>
  );
}