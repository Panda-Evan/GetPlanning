import styles from "@/styles/Navbar.module.scss";
import { useState, useEffect } from "react";

function Navbar() {

  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <div className={styles.navbar}>
    <img className={styles.logoimg} src="/navbar/calendrier.png"/>
    <div className={styles.logo_connexion} />
    {!atTop && ( // appears when the scroll bar is not fully
          <div>
            <a href="#top">
              
              <img className={styles.top} src="/navbar/Midou.png"/>
            </a>
          </div>
        )}
  </div>
  );
}


export default Navbar;
