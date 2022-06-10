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
        <div className={s.newsTitleAndLogo}>
          {/* <svg
            width="432"
            height="144"
            viewBox="0 0 432 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.02">
              <path
                d="M174.455 0H233.89L156.07 143.016L124.818 86.3588L174.455 0Z"
                fill="white"
              />
              <path
                d="M233.89 0L254.46 36.3449L223.848 90.1125L203.665 55.5406L174.455 0H233.89Z"
                fill="white"
              />
              <path
                d="M70.1946 13.4501L100.221 68.1261L59.4795 143.016H0L70.1946 13.4501Z"
                fill="white"
              />
              <path
                d="M77.8643 0H137.3L186.318 87.6502L156.07 143.016L77.8643 0Z"
                fill="white"
              />
              <path
                d="M267.061 13.4501L297.408 66.9223L256.777 143.016L223.848 90.1125L267.061 13.4501Z"
                fill="white"
              />
              <path
                d="M372.977 0H432.413L364.701 124.444L342.619 52.8265L372.977 0Z"
                fill="white"
              />
              <path
                d="M275.162 0H334.597L384.024 88.9306L354.427 142.742L275.162 0Z"
                fill="white"
              />
            </g>
          </svg> */}
        </div>
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
