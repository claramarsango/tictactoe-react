import './footer-styled.css';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__author">
        <p className="author__emoji">🦦</p>
        <h4 className="author__message">Developed by Clara Marsango</h4>
      </section>
      <a
        href="https://github.com/claramarsango"
        target="_blank"
        className="footer__link"
      >
        <img src="./assets/github-mark-white.svg" alt="Github white logo"></img>
      </a>
    </footer>
  );
};

export default Footer;
