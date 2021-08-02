import classes from './card.module.css';

const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes.box_items}>
        <div className={classes.box_bg}>
          <div className={classes.box1}>
            <div className={classes.box_img1} />
            <div className={classes.text_box}>
              <h1 className={classes.title}>Meditation</h1>
              <p className={classes.paragraph}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>

              <button className={classes.btn}>Learn More</button>
            </div>
          </div>
        </div>

        <div className={classes.box_bg}>
          <div className={classes.box2}>
            <div className={classes.box_img2} />
            <div className={classes.text_box}>
              <h1 className={classes.title}>Yoga</h1>
              <p className={classes.paragraph}>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>

              <button className={classes.btn}>Learn More</button>
            </div>
          </div>
        </div>

        <div className={classes.box_bg}>
          <div className={classes.box3}>
            <div className={classes.box_img3} />
            <div className={classes.text_box}>
              <h1 className={classes.title}>Sound</h1>
              <p className={classes.paragraph}>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing.
              </p>

              <button className={classes.btn}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
