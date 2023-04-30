import React from "react";

import classes from "./About.module.css";
import Card from "../../UI/card";
import Button from "../../UI/Button";

const About = () => {
  return (
    <Card className={classes.about}>
      <div className={classes["head-text"]}>SOCUM</div>
      <div>
        <p className={classes[""]}>
          One to rule them all-we connect your{<br></br>} social media
        </p>
        <Button backgroundColor="white">Learn More</Button>
      </div>
      <div className={classes["head-text"]}>
        <span>Imprint</span>
        <span>Terms of Use</span>
        <span>Dribbble</span>
      </div>
    </Card>
  );
};

export default About;
