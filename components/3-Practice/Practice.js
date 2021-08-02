import classes from './practice.module.css';

const Practice = () => {
  return (
    <div className={classes.practice}>
      <div className={classes.practice_box}>
        <h1 className={classes.practice_title}>
          Practice Wherever You Want, Whenever You Need
        </h1>
        <p className={classes.paragraph}>
          “These cases are perfectly simple and easy to distinguish. In a free
          hour, when our power of choice is untrammelled and when nothing
          prevents our being able to do what we like best.”
        </p>

        <div className={classes.practice_body}>
          <div className={classes.card_img} />

          <div className={classes.card_text}>
            <div className={classes.text_box}>
              <h2 className={classes.card_title}>Meditation Wind</h2>
              <p className={classes.card_p}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form by
                injected.
              </p>
            </div>

            <div className={classes.text_box}>
              <h2 className={classes.card_title}>Strees Reduction </h2>
              <p className={classes.card_p}>
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because
                occasionally can procure him some great pleasure.
              </p>
            </div>

            <div className={classes.text_box}>
              <h2 className={classes.card_title}>Self Compassion</h2>
              <p className={classes.card_p}>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
