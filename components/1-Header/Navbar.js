import classes from './navbar.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, IconButton } from '@material-ui/core';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.nav_box}>
        <div className={classes.logo} />
        <ul className={classes.ul_list}>
          <li className={classes.list_item}>Home</li>
          <li className={classes.list_item}>Explore</li>
          <li className={classes.list_item}>Classes</li>
          <li className={classes.list_item}>About Us</li>
          <li className={classes.list_item}>Privicy</li>
          <li className={classes.list_item}>Services</li>
        </ul>
        <div className={classes.bars_icon}>
          <IconButton>
            <MenuIcon className={classes.icon} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
