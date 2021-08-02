import classes from './footer.module.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_inside}>
        <div className={classes.footer_logo} />
        <ul className={classes.ul_list}>
          <li className={classes.list_item}>Home</li>
          <li className={classes.list_item}>Explore</li>
          <li className={classes.list_item}>Classes</li>
          <li className={classes.list_item}>About Us</li>
          <li className={classes.list_item}>Privicy</li>
          <li className={classes.list_item}>Services</li>
        </ul>

        <div className={classes.social_icons}>
          <InstagramIcon className={classes.icon} />
          <FacebookIcon className={classes.icon} />
          <LinkedInIcon className={classes.icon} />
          <TwitterIcon className={classes.icon} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
