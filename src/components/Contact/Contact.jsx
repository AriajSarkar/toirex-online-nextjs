import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const emailUrl = "mailto:myemail@email.com";
  const linkedInUrl = "https://www.linkedin.com/in/your-linkedin-profile";
  const githubUrl = "https://www.github.com/your-github-profile";

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <h3>Social</h3>
        <li className={styles.link}>
          <a href={emailUrl} target="_blank" rel="noopener noreferrer">
            <img
              className={styles.img}
              src={getImageUrl("contact/emailIcon.png")}
              alt="Email icon"
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <img
              className={styles.img}
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <img
              className={styles.img}
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};
