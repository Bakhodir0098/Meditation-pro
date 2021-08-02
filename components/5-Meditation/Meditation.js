import classes from './meditation.module.css';

const Meditation = () => {
  return (
    <div className={classes.med}>
      <div className={classes.med_box}>
        <h1 className={classes.title}>The Best Of Meditation</h1>
        <p className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className={classes.cards}>
          {/** ********************************************************************************************************************/}

          <div className={classes.card_left}>
            <div className={classes.card_inside}>
              <h2 className={classes.left_h2}>The Peace</h2>
              <p className={classes.left_p}>
                which of us ever undertakes laborious physical exercise, except
                to obtain some advantage from it.
              </p>
            </div>

            <div className={classes.card_inside}>
              <h2 className={classes.left_h2}>The Peace</h2>
              <p className={classes.left_p}>
                which of us ever undertakes laborious physical exercise, except
                to obtain some advantage from it.
              </p>
            </div>

            <div className={classes.card_inside}>
              <h2 className={classes.left_h2}>The Peace</h2>
              <p className={classes.left_p}>
                which of us ever undertakes laborious physical exercise, except
                to obtain some advantage from it.
              </p>
            </div>
          </div>
          {/**********************************************************************************************************************/}

          <div className={classes.girl_img} />

          {/**********************************************************************************************************************/}

          <div>
            <div className={classes.card_inside2}>
              <h2 className={classes.left_h2}>The Peace</h2>
              <p className={classes.left_p}>
                which of us ever undertakes laborious physical exercise, except
                to obtain some advantage from it.
              </p>
            </div>

            <div className={classes.card_inside2}>
              <h2 className={classes.left_h2}>The Peace</h2>
              <p className={classes.left_p}>
                which of us ever undertakes laborious physical exercise, except
                to obtain some advantage from it.
              </p>
            </div>

            <div className={classes.card_inside2}>
              <h2 className={classes.left_h2}>The Peace</h2>
              <p className={classes.left_p}>
                which of us ever undertakes laborious physical exercise, except
                to obtain some advantage from it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meditation;
