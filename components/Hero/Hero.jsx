import React, { useEffect, useState } from "react";
import styles from "./Hero.module.scss";

const Hero = ({ src, poster }) => {
  const [vidSource, setVidSource] = useState();
  useEffect(() => {
    const heroVideo = document.querySelector("video");

    const requestVideo = new Request(src);

    fetch(requestVideo).then((res) => {
      res.blob().then((vidBlob) => {
        const vidURL = URL.createObjectURL(vidBlob);
        heroVideo.src = vidURL;
        setVidSource(heroVideo.src);
      });
    });
  }, [src]);

  return (
    <div className={styles.heroContainer}>
      <video autoPlay muted loop className={styles.hero} poster={poster}>
        <source src={vidSource} />
      </video>
    </div>
  );
};

export default Hero;
