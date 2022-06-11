import s from "../styles/News.module.css";

const News = () => {
  return (
    <div className="container">
      <section className={s.hero}>
        <p className={s.heroLabel}>
          INVESTORS, TECHNOLOGISTS, OPERATORS, ENTREPRENEURS
        </p>
        <h1 className={s.heroTitle}>
          Empowering digital transformation companies advancing our world
        </h1>
        <div className={s.arrowParent}>
          <img src="/arrowDown.svg" alt="arrow" className={s.arrow} />
        </div>
      </section>
      <section className={s.news}>
        <p className={s.newLabel}>OUR DNA</p>
        <h3 className={s.newTitle}>Transforming Ideas Into Actions</h3>
        <p className={s.text}>
          We blend unparalleled knowledge and financial discipline with an
          entrepreneurial spirit and engineering mindset based on two decades of
          digital transformation projects. See what sets NWN Group apart.
        </p>
      </section>
    </div>
  );
};

//   <main>
//     <section className="hero">
//       <p className="hero-label">
//         INVESTORS, TECHNOLOGISTS, OPERATORS, ENTREPRENEURS
//       </p>
//       <h1 className="hero-title">
//         Empowering digital transformation companies advancing our world
//       </h1>
//     </section>
//     <section className="news">
//       <p>OUR DNA</p>
//       <h3>Transforming Ideas Into Actions</h3>
//       <p>
//         We blend unparalleled knowledge and financial discipline with an
//         entrepreneurial spirit and engineering mindset based on two decades
//         of digital transformation projects. See what sets NWN Group apart.
//       </p>
//     </section>
//   </main>

//   <footer>
//     <p>CONTACT</p>
//     <div>
//       <div>
//         <p>NWN Group s.r.o.</p>
//         <ul>
//           <li>Koněvova 1965/208</li>
//           <li>130 00 Praha 3</li>
//           <li>Czech Republic</li>
//         </ul>
//       </div>
//       <div>
//         <p>NWN Group s.r.o.</p>
//         <ul>
//           <li>Koněvova 1965/208</li>
//           <li>130 00 Praha 3</li>
//           <li>Czech Republic</li>
//         </ul>
//       </div>
//       <div>
//         <ul>
//           <li>
//             <a href="mailto:nwngroup@mail.com">nwngroup@mail.com</a>
//           </li>

//           <li>
//             <a href="tel:+421902902080">+421 902 902 080</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//     <div>
//       <p>Copyright © 2022 by NWN Group, s.r.o.</p>
//       <ul>
//         <li>Privacy</li>
//         <li>Disclousers</li>
//         <li>ESG Policy</li>
//       </ul>
//     </div>
//   </footer>

//   <style jsx>{``}</style>

export default News;
