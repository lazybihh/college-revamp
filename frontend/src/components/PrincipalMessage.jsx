import './PrincipalMessage.css';

export default function PrincipalMessage() {
  return (
    <section className="principal">

      <div className="principal-inner">

        <div className="principal-image">
          <div className="image-frame"></div>

          <img
            src="/images/principal.jpg"
            alt="Principal, CRCOE"
          />

          <span className="image-number">01</span>
        </div>

        <div className="principal-content">

          <p className="principal-eyebrow">
            MESSAGE FROM THE PRINCIPAL
          </p>

          <h2>
            A message for
            <br />
            <span>future educators.</span>
          </h2>

          <div className="quote-area">

            <span className="quote-mark">“</span>

            <p className="principal-quote">
              Education is not merely about knowledge, but about shaping
              individuals who can make a difference.
            </p>

          </div>

          <p className="principal-name">
            Principal, Chhotu Ram College of Education
          </p>

          <a
            href="/from-the-desk-of-principal"
            className="principal-link"
          >
            Read Full Message
            <span>→</span>
          </a>

        </div>

        <div className="principal-signature">
          <span>Better Teachers,</span>
          <br />
          A Brighter Tomorrow
        </div>

      </div>

    </section>
  );
}