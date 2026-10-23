import { useState } from "react";
import myHeroSectionStyle from "./HeroSection.module.css";

const heroSection = (props) => {
  console.log(props);
  const inputName = props.inputName;
  const doSomething = props.doSomething;
  const src = props.src;

  // const { inputName, doSomething } = props;
  return (
    <>
      <img width={200} src={src} alt="" />
      <h1 className={`${myHeroSectionStyle.heroTitle}`}>Hello EveryBody</h1>
      <div className={myHeroSectionStyle.heroSection}>heroSection</div>
      <h1>{inputName}</h1>
      <button onClick={doSomething}>Click Me</button>
    </>
  );
};

export default heroSection;
