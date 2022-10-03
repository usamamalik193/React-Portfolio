import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Designed and Developed by Usama Malik</h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year} Muhammad Usama Malik</h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
            <a
              href="https://github.com/usamamalik193"
              target="_blank"
              rel="noreferrer"
            >
                <AiFillGithub />
              </a>
            </li>
            <li>
            <a
              href="https://www.instagram.com/usama.malik193/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            </li>
          
            <li>
            <a
              href="https://www.linkedin.com/in/usama-malik-1998az193/"
              target="_blank"
              rel="noreferrer"
            >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
