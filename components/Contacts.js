import s from "../styles/Contacts.module.css";

const Contacts = () => {
  return (
    <div className={s.contacts}>
      <div className="container">
        <p className={s.title}>CONTACT</p>
        <div className={s.contactsGroup}>
          <div>
            <p className={s.titleGroup}>NWN Group s.r.o.</p>
            <ul className={s.list}>
              <li className={s.item}>Koněvova 1965/208</li>
              <li className={s.item}>130 00 Praha 3</li>
              <li className={s.item}>Czech Republic</li>
            </ul>
          </div>
          <div>
            <p className={s.titleGroup}>NWN Investments s.r.o.</p>
            <ul className={s.list}>
              <li className={s.item}>Palisády 33</li>
              <li className={s.item}>811 06 Bratislava</li>
              <li className={s.item}>Slovakia</li>
            </ul>
          </div>
          <div className={s.linkParent}>
            <ul className={s.linkGroup}>
              <li className={s.item}>
                <a href="mailto:nwngroup@mail.com" className={s.links}>
                  nwngroup@mail.com
                </a>
              </li>

              <li className={s.item}>
                <a href="tel:+421902902080" className={s.links}>
                  +421 902 902 080
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
