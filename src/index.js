import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";

import "./styles.css";

function App() {
  return (
    <div
      className="main-content"
      style={{
        backgroundImage: `url("greenbackground.jpeg")`
      }}
    >
      <NewsArticle>
        <div className="articleone">
          <News
            image="thrift.jpeg"
            link="https://www.cnn.com/style/nc-wyeth-ramona-thrift-store-tan/index.html"
            title="A thrift store shopper joked she’d found a famous artist’s work for $4. It turned out she really had"
            by="Carlie Porterfield"
            description="When an antiques enthusiast purchased a painting that appeared to bear 
        the signature of N.C. Wyeth at a thrift store in 2017, 
        she joked that the $4 item might actually be a real work by 
        the prolific Maine artist and patriarch of the Wyeth family of painters. 
        Her joke was no laughing matter, and the painting is now 
        estimated to fetch as much as $250,000 at auction in September."
          />
        </div>
        <div className="articletwo">
          <News
            image=""
            link="https://www.cnn.com/style/article/milan-design-week-2023/index.html"
            title="Craft, salvage and sustainability take center stage at Milan Design Week"
            by="Marianna Cerini"
            description="The design world’s largest annual fair enjoyed a return to full pre-pandemic form 
        with its 2023 showcase, transforming the city of Milan with hundreds of exhibitions,
         site-specific installations, pop-ups and public projects."
          />
        </div>
        <div className="articlethree">
          <News
            image="skincare.jpeg"
            link="https://www.cnn.com/style/japan-skincare-astronauts-iss-cosmology-scn/index.html"
            title="‘Cosmology’: The Japanese skincare range designed for astronauts"
            by=" Christy Choi and Junko Ogura"
            description="
        When Japanese astronaut Kimiya Yui heads to the International Space Station (ISS) next year, 
        he will have two new skincare items in his bag 
        that are especially designed for the rigors of space travel."
          />
        </div>

        <div className="articlefour">
          <News
            image="tupac.webp"
            link="https://www.cnn.com/style/photographing-tupac-the-legend-haddi/index.html"
            title="Behind the scenes of Tupac’s iconic photoshoot"
            by="Zoe Whitfield"
            description="“Photographing a rapper was not on my agenda,” said Michel Haddi, 
        the French-Algerian photographer whose new project is a heavyweight monograph 
        dedicated to the late Tupac Shakur. “But when I moved to America it was different,” 
        he continued. “(Rap) became my culture.”"
          />
        </div>
      </NewsArticle>
    </div>
  );
}

function NewsArticle(props) {
  return (
    <div>
      <h2 className="headline"> Discover Art </h2>
      <ul>{props.children}</ul>
    </div>
  );
}

function News(props) {
  let image;
  if (!props.image) {
    image = "https://placehold.co/600x400/000000/FFF";
  } else {
    image = props.image;
  }

  function handleDelete(e) {
    if (e.target !== e.currentTarget) {
      e.currentTarget.remove();
    }
  }

  return (
    <div onClick={handleDelete}>
      <img className="pics" src={image} alt="" />

      <a className="link" href={props.link}>
        <h2>{props.title}</h2>
      </a>

      <h3 className="by"> by: {props.by}</h3>
      <p className="description"> {props.description} </p>
      <span className="button">X</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
