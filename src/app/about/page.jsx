import styles from './page.module.scss';
import Image from 'next/image';
import Button from '../../components/button/Button';
import website from '/public/websites.jpg';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={website} fill={true} alt='website' className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            As a unified digital product design team, we are committed to
            delivering unparalleled experiences to users. Our collective
            expertise allows us to meticulously craft every aspect of our
            products, ensuring they are both visually appealing and highly
            functional. We work collaboratively, leveraging our diverse
            perspectives and skills to create seamless and delightful user
            journeys.
            <br />
            <br />
            Driven by a shared passion for innovation, we constantly strive to
            push the boundaries of design. We understand the importance of
            attention to detail, and we leave no stone unturned in our quest to
            create exceptional digital experiences. By combining our creativity,
            technical proficiency, and user-centric approach, we consistently
            exceed expectations and set new standards in the industry.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url='/contact' text='Contact' />
        </div>
      </div>
    </div>
  );
};

export default About;
