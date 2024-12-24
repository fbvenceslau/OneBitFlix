import { Container } from 'reactstrap';
import styles from './styles.module.scss';

const Footer = function () {
  return (
    <>
      <Container className={styles.footer}>
        <img 
          src="/logoOneBitCode.svg"
          alt="logoFooter"
          className={styles.footerLogo}
        />
        <a
          href="https://fbvenceslau.github.io/"
          target={"blank"}
          className={styles.footerLink}
        >ONEBITCODE</a>
      </Container>
    </>
  );
};

export default Footer;