import Image from 'next/image';
import styles from './page.module.scss';
import Hero from 'public/hero.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Enhance Your Digital Product Design</h1>
        <p className={styles.desc}>
          We are ready to create the perfect user interface for your website,
          web app or mobile app.
        </p>
        <button className={styles.btn}>Explore Our Work</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img} alt='hero-img' />
      </div>
    </div>
  );
}
