import styles from "../styles/Pricing.module.scss";

function Pricing() {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
      <div className={styles.basic}>
        <div className={styles.pricing_card}>
          <div className={styles.pricing_header}>
            <span className={styles.plan_title}>BASIC</span>
            <div className={styles.price_circle}>
              <span className={styles.price_title}>
                <span>Free</span>
              </span>
            </div>
          </div>
          <div className={styles.badge_box}></div>
          <ul>
            <li>
              <strong>1</strong> Calendar
            </li>
            <li>
              <strong>basic</strong> option
            </li>
            <li>
              <strong>50 GB</strong> Bandwith
            </li>
            <li>
              <strong>1 Free</strong> Domain
            </li>
            <li>
              <strong>1 FTP</strong> Account
            </li>
          </ul>
          <div className={styles.buy_button_box}>
            <a href="#" className={styles.buy_now}>
              BUY NOW
            </a>
          </div>
        </div>
        </div>
      </div>
      <div className={styles.column}>
      <div className={styles.echo}>
        <div className={styles.pricing_card}>
          <div className={styles.pricing_header}>
            <span className={styles.plan_title}>ECHO PLAN</span>
            <div className={styles.price_circle}>
              <span className={styles.price_title}>
                <small>$</small>
                <span>16.95</span>
              </span>
              <span className={styles.info}>/ Month</span>
            </div>
          </div>
          <div className={styles.badge_box}>
            <span>Save 15%</span>
          </div>
          <ul>
            <li>
              <strong>5</strong> Domains
            </li>
            <li>
              <strong>50 GB</strong> Disk Space
            </li>
            <li>
              <strong>250 GB</strong> Bandwith
            </li>
            <li>
              <strong>2 Free</strong> Domains
            </li>
            <li>
              <strong>Unlimited FTP</strong> Account
            </li>
          </ul>
          <div className={styles.buy_button_box}>
            <a href="#" className={styles.buy_now}>
              BUY NOW
            </a>
          </div>
        </div>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.business}>
        <div className={styles.pricing_card}>
          <div className={styles.popular}>POPULAR</div>
          <div className={styles.pricing_header}>
            <span className={styles.plan_title}>PRO PLAN</span>
            <div className={styles.price_circle}>
              <span className={styles.price_title}>
                <small>$</small>
                <span>23.95</span>
              </span>
              <span className={styles.info}>/ Month</span>
            </div>
          </div>
          <div className={styles.badge_box}>
            <span>Save 8%</span>
          </div>
          <ul>
            <li>
              <strong>10</strong> Domains
            </li>
            <li>
              <strong>100 GB</strong> Disk Space
            </li>
            <li>
              <strong>Unlimited</strong> Bandwith
            </li>
            <li>
              <strong>3 Free</strong> Domains
            </li>
            <li>
              <strong>Unlimited FTP</strong> Account
            </li>
          </ul>
          <div className={styles.buy_button_box}>
            <a href="#" className={styles.buy_now}>
              BUY NOW
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
