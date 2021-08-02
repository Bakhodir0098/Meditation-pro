import classes from './transform.module.css';

const Transform = () => {
  return (
    <div className={classes.transform}>
      <div className={classes.transform_inside}>
        <h1 className={classes.title}>
          Transform Your Body, Mind and Life Today
        </h1>
        <p className={classes.paragraph}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos sint
          occaecati cupiditate non provident.
        </p>

        <div className={classes.top}>
          <div className={classes.top_img} />
          <div className={classes.top_text}>
            <h2 className={classes.text_h2}>Antistrees Meditation</h2>
            <p className={classes.text_p}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by
              injected.
            </p>
            <p className={classes.text_p2}>
              These cases are perfectly simple and easy to distinguish. In a
              free hour when our power of choice is untrammelled.
            </p>
            <button className={classes.btn}>Learn More</button>
          </div>
        </div>

        <div className={classes.top}>
          <div className={classes.top_text}>
            <h2 className={classes.text_h2}>Antistrees Meditation</h2>
            <p className={classes.text_p}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by
              injected.
            </p>
            <p className={classes.text_p2}>
              These cases are perfectly simple and easy to distinguish. In a
              free hour when our power of choice is untrammelled.
            </p>
            <button className={classes.btn}>Learn More</button>
          </div>

          <div className={classes.top_img2} />
        </div>
      </div>
    </div>
  );
};

export default Transform;
