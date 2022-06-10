import s from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={s.footer}>
        <div className="container">
          <div className={s.copyrightGroup}>
            <p className={s.copyrText}>Copyright © 2022 by NWN Group, s.r.o.</p>
            <ul className={s.copyrightList}>
              <li className={s.copyrightItem}>Privacy</li>
              <li className={s.copyrightItem}>Disclousers</li>
              <li className={s.copyrightItem}>ESG Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
