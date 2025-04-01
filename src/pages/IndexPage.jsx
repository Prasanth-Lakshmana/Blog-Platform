import "../css/home.css";

const About = () => (
  <div className="about">
    <div className="aboutitem header">Discover the Blogosphere</div>
    <div className="aboutitem smallinfo">
      Experience! Explore Captivating Insights, Inspiring Stories, <br /> and
      Thought-Provoking Articles.
    </div>
    <div className="aboutitem buy">
      <button
        className="button-home"
        onClick={() => {
          window.location.href = "/blogs";
        }}
      >
        Explore now
      </button>
    </div>
  </div>
);

const Brief = () => (
  <div className="brief">
    <div className="left">
      <i class="fas fa-globe-americas"></i>
    </div>
    <div className="right">
      <p>
        In the hustle of the 21st century, where schedules are demanding and
        time is of the essence, Blogosphere stands as your go-to destination for
        a different kind of shopping - a shopping spree for ideas, knowledge,
        and inspiration.
      </p>
    </div>
  </div>
);

const TakeProduct = () => (
  <div className="takeproduct">
    <div className="takeproducthead">Carry Blogosphere with You Everywhere</div>
    <div className="takeproductinfo">
      "Empower your journey with Blogosphere, your constant companion for
      boundless insights and inspiration. Whether you're on a commute or
      savoring a quiet moment, let Blogosphere be your go-to source, making
      every place and every moment an opportunity to discover, learn, and grow."
    </div>
  </div>
);

const Reasons = () => (
  <div className="reasons">
    <div className="reasonshead">Reasons to Dive into Blogosphere:</div>
    <div className="reasonss">
      <div className="reasons1">
        <ul>
          <li>
            ✨ It's the Best - A curated collection of the finest thoughts,
            ideas, and stories.
          </li>
          <li>
            😊 It Makes You Happy - Because a good read has the power to uplift
            your spirits.
          </li>
          <li>
            🌐 It Brings World Peace - By fostering understanding and empathy
            through shared experiences.
          </li>
          <li>
            🎁 It's Free! - The most valuable things in life often come without
            a price tag.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const IndexPage = () => (
  <div className="home-body">
    <About />
    <Brief />
    <TakeProduct />
    <Reasons />
  </div>
);

export default IndexPage;
