import myHeroSectionStyle from "./HeroSection.module.css";

const heroSection = () => {
  return (
    <>
      <h1 className={`${myHeroSectionStyle.heroTitle}`}>Hello EveryBody</h1>
      <div className={myHeroSectionStyle.heroSection}>heroSection</div>
    </>
  );
};

export default heroSection;
