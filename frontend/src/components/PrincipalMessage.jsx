import './PrincipalMessage.css';

const news = [
  {
    date: '12 SEP 2025',
    category: 'NOTICE',
    title: 'Reschedule of Election',
    text: 'The college election schedule has been revised. Students are requested to take note of the updated dates.'
  },
  {
    date: '08 SEP 2025',
    category: 'ACADEMICS',
    title: 'List of 105 Collegium Members',
    text: 'The official list of 105 collegium members has been released by the college administration.'
  },
  {
    date: '02 SEP 2025',
    category: 'ELECTION',
    title: 'Election of the Governing Body',
    text: 'The election process for the governing body of the college will be conducted as per the announced schedule.'
  },
  {
    date: '28 AUG 2025',
    category: 'CAMPUS',
    title: 'New Academic Session Begins',
    text: 'The new academic session has officially begun with students returning to campus for another year of learning.'
  },
  {
    date: '21 AUG 2025',
    category: 'EVENTS',
    title: 'Teacher Education Workshop',
    text: 'A special workshop on innovative teaching practices will be organised for students and faculty members.'
  }
];

function NewsItem({ item }) {
  return (
    <article className="news-item">
      <div className="news-meta">
        <span>{item.date}</span>
        <small>{item.category}</small>
      </div>

      <div className="news-content">
        <div className="news-copy">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>

        <span className="news-arrow">↗</span>
      </div>
    </article>
  );
}

export default function PrincipalMessage() {
  return (
    <section className="principal-news">
      <div className="principal-news-inner">

        {/* NEWS */}

        <div className="news-section">

          <div className="section-heading">
            <div>
              <p className="news-eyebrow">
                STAY INFORMED
              </p>

              <h2 className="news-heading">
                News <em>& Events</em>
              </h2>
            </div>

            <span className="section-index">
              03 / 04
            </span>
          </div>

          <p className="news-intro">
            Stay connected with the latest announcements,
            academic updates and activities from CRCOE.
          </p>

          <div className="news-box">

            <div className="news-scroll">
              <div className="news-track">

                {news.map((item, index) => (
                  <NewsItem
                    key={index}
                    item={item}
                  />
                ))}

                {news.map((item, index) => (
                  <NewsItem
                    key={`copy-${index}`}
                    item={item}
                  />
                ))}

              </div>
            </div>

            <div className="news-fade news-fade-top"></div>
            <div className="news-fade news-fade-bottom"></div>

          </div>

          <a
            href="/news-events"
            className="all-news-link"
          >
            <span>View All News & Events</span>
            <strong>↗</strong>
          </a>

        </div>

        {/* PRINCIPAL */}

        <div className="principal">

          <div className="principal-decor principal-decor-one"></div>
          <div className="principal-decor principal-decor-two"></div>

          <div className="principal-inner">

            <div className="principal-image">

              <span className="principal-image-line"></span>

              <div className="image-frame"></div>

              <img
                src="/images/principal.jpg"
                alt="Principal, CRCOE"
              />

              <span className="image-number">
                01
              </span>

            </div>

            <div className="principal-content">

              <p className="principal-eyebrow">
                MESSAGE FROM THE PRINCIPAL
              </p>

              <h2>
                A message for
                <span>future educators.</span>
              </h2>

              <div className="quote-area">

                <span className="quote-mark">
                  “
                </span>

                <p className="principal-quote">
                  Education is not merely about knowledge,
                  but about shaping individuals who can make
                  a difference.
                </p>

              </div>

              <p className="principal-name">
                Principal
                <span>
                  Chhotu Ram College of Education
                </span>
              </p>

              <a
                href="/from-the-desk-of-principal"
                className="principal-link"
              >
                <span>Read Full Message</span>
                <strong>↗</strong>
              </a>

            </div>

          </div>

          <div className="principal-footer">
            <span>Better Teachers</span>
            <b>Better Futures</b>
          </div>

        </div>

      </div>
    </section>
  );
}