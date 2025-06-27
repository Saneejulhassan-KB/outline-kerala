import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css/animate.css";

if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
const HomeCenterSlider = ({ newsList = [] }) => {
  const optionEight = {
    loop: true,
    items: 1,
    dots: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      `<i class='ti ti-angle-left'></i>`,
      `<i class='ti ti-angle-right'></i>`,
    ],
  };

  if (!newsList.length) return null;

  return (
    <OwlCarousel id="owl-slider" className="owl-theme" {...optionEight}>
      {newsList.map((news) => (
        <div className="item" key={news.id}>
          <div className="slider-post post-height-1">
            <a href={`/news/${news.slug}`} className="news-image">
              <img
                src={`https://backend.outlinekerala.com/media/${news.image}`}
                alt={news.title}
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "400px", 
                  objectFit: "cover", 
                }}
              />
            </a>
            <div className="post-text">
              <span className="post-category">{news.subcategoryName || news.categoryName}</span>
              <h2>
                <a href={`/news/${news.slug}`}>{news.title}</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>{new Date(news.publishDate).toDateString()}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
};

export default HomeCenterSlider;
