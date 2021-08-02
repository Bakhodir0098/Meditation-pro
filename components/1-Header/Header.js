import classes from './header.module.css';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.header}>
        <div className={classes.header_body}>
          <h1 className={classes.title}>
            Meditations Helps You Detoxify Your Body
          </h1>

          <p className={classes.paragraph}>
            “It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout point of
            using Lorem Ipsum is that it has a more-or-less.”
          </p>

          <button className={classes.btn}>Get Started</button>
          <div className={classes.girl_img}>
            <div className={classes.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
