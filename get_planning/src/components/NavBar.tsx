import styles from "@/styles/Navbar.module.scss";

function Navbar() {
  return (
  <div className={styles.navbar}>
    <img className={styles.logoimg} src="/navbar/calendrier.png"/>
    <div className={styles.logo_connexion} />
  </div>
  );
}

export default Navbar;
