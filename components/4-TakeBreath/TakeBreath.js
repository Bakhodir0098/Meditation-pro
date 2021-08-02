import classes from './takebreath.module.css';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

const TakeBreath = () => {
  return (
    <div className={classes.take_breath}>
      <div className={classes.take}>
        <h1 className={classes.title}>Take a Deep Breath</h1>
        <p className={classes.paragraph}>
          “Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore.”
        </p>

        <div className={classes.take_body}>
          <div className={classes.all_boxes}>
            <div className={classes.take_box}>
              <div>
                <h2 className={classes.box_h2}>Turning off Auto Pilot</h2>
                <p className={classes.box_p}>Introduction, Strees Assesment</p>
              </div>
              <PlayCircleFilledWhiteIcon className={classes.icon} />
            </div>

            <div className={classes.take_box}>
              <div>
                <h2 className={classes.box_h2}>Crazy Wind Sound</h2>
                <p className={classes.box_p}>Relex Mind</p>
              </div>
              <PlayCircleFilledWhiteIcon className={classes.icon} />
            </div>

            <div className={classes.take_box}>
              <div>
                <h2 className={classes.box_h2}>Relex Mind</h2>
                <p className={classes.box_p}>Strees Relief</p>
              </div>
              <PlayCircleFilledWhiteIcon className={classes.icon} />
            </div>
          </div>
          <div className={classes.take_img} />
        </div>
      </div>
    </div>
  );
};

export default TakeBreath;
