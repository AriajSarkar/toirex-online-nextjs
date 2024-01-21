import  { useState, useEffect } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import styles from './BackToTopButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // You can adjust the scroll threshold as needed
      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`${styles['back-to-top-button']} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default BackToTopButton;