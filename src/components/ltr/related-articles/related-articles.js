
"use client"
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'animate.css/animate.css'
import Link from "next/link";

if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const RelatedArticles = ({ articles = [] }) => {
    const optionThree = {
      items: 1,
      loop: true,
      dots: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav: true,
      navText: [
        "<i class='ti ti-angle-left'></i>",
        "<i class='ti ti-angle-right'></i>"
      ]
    };
  
    const groupedArticles = [];
    for (let i = 0; i < articles.length; i += 3) {
      groupedArticles.push(articles.slice(i, i + 3));
    }
  
    return (
      <OwlCarousel className="post-slider owl-theme" {...optionThree}>
        {groupedArticles.map((group, index) => (
          <div className="item" key={index}>
            <div className="news-grid-2">
              <div className="row row-margin">
                {group.map((article) => (
                  <div className="col-sm-4 col-md-4 col-padding" key={article.id}>
                    <div className="grid-item">
                      <div className="grid-item-img">
                        <Link href={`/news/${article.slug}`}>
                          <img
                            src={`https://backend.outlinekerala.com/media/${article.image}`}
                            className="img-fluid"
                            alt={article.title}
                          />
                          <div className="link-icon">
                            <i className="fa fa-play" />
                          </div>
                        </Link>
                      </div>
                      <h5>
                        <Link href={`/news/${article.slug}`} className="title">
                          {article.title}
                        </Link>
                      </h5>
                      <ul className="authar-info d-flex flex-wrap">
                      <li>{new Date(article.publishDate).toDateString()}</li>
                        {/* <li className="hidden-sm">
                          <Link href="#" className="link">
                            {article.likes || "0"} likes
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    );
  };

export default RelatedArticles;