import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; Copyright 2024 - Developed by <a href='/'>DexyScraft</a>. All right reserved.</p>
                <p>Designed and built with React</p>
            </div>
        </footer>
    );
};

export default Footer;
