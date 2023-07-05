'use client';

import { useState, useEffect } from 'react';
import styles from './footer.module.scss';
import {
  InstagramFilled,
  FacebookFilled,
  TwitterSquareFilled,
  YoutubeFilled,
} from '@ant-design/icons';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };

    updateYear(); // Set initial year

    // Update year every time the component re-renders
    // (e.g., when the current year changes)
    const interval = setInterval(updateYear, 1000);

    // Clean up interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={styles.container}>
      ©{currentYear} nex. All rights reserved.
      <div className={styles.icon_container}>
        <InstagramFilled />
        <FacebookFilled />
        <TwitterSquareFilled />
        <YoutubeFilled />
      </div>
    </div>
  );
};

export default Footer;
