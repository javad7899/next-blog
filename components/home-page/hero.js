import Image from 'next/image';
import heroImg from "../../public/images/site/hero.jpg"
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={heroImg}
          alt='hero image'
          width={400}
          height={400}
        />
      </div>
      <h1>Hi, I'm Javad</h1>
      <p>
        I blog about web development - especially frontend frameworks like React or next.js.
      </p>
    </section>
  );
}

export default Hero;
