import dynamic from "next/dynamic";
import { useQuery } from "@apollo/client";
import { GET_LATEST_NEWS } from "../../../../queries/getLatestNews";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css/animate.css";
import Link from "next/link";
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const HomeFeatureCarousal = () => {
  const { loading, error, data } = useQuery(GET_LATEST_NEWS);

  if (loading) return null;
  if (error) return <p>Error loading featured news</p>;

  const newsItems = data?.subcategories
    ?.flatMap((subcategory) =>
      (subcategory.news || []).map((newsItem) => ({
        ...newsItem,
        categoryName: subcategory.name,
      }))
    )
    .sort((a, b) => b.id - a.id)
    .slice(0, 10);

  return (
    <OwlCarousel
      className="owl-theme featured-carousel"
      loop={true}
      margin={10}
      nav={false}
      dots={false}
      responsive={{
        0: {
          items: 1,
          autoplay: true,
        },
        576: {
          items: 2,
        },
        768: {
          items: 2.5,
        },
        992: {
          items: 3.5,
        },
        1200: {
          items: 4,
        },
      }}
    >
      {/* <div className="news-list-item">
        <div className="img-wrapper">
          <a href="#" className="thumb">
            <img
              src="./kerala-rain-news.avif"
              alt=""
              className="img-fluid"
              style={{height:'70px'}}
            />
            <div className="link-icon">
              <i className="fa fa-camera" />
            </div>
          </a>
        </div>
        <div className="post-info-2">
          <span className="post-category">Fashion</span>
          <h5 className="mb-0">
            <a href="#" className="title">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </a>
          </h5>
        </div>
      </div>
      <div className="news-list-item">
        <div className="img-wrapper">
          <a href="#" className="thumb">
            <img
              src="./kerala-sports.avif"
              alt=""
              className="img-fluid"
              style={{height:'70px'}}
            />
            <div className="link-icon">
              <i className="fa fa-camera" />
            </div>
          </a>
        </div>
        <div className="post-info-2">
          <span className="post-category">Sports</span>
          <h5 className="mb-0">
            <a href="#" className="title">
              Proin quis massa tincidunt justo cursus dapibus.
            </a>
          </h5>
        </div>
      </div>
      <div className="news-list-item">
        <div className="img-wrapper">
          <a href="#" className="thumb">
            <img
              src="./kerala-travel-1.jpg"
              alt=""
              className="img-fluid"
              style={{height:'70px'}}
            />
            <div className="link-icon">
              <i className="fa fa-camera" />
            </div>
          </a>
        </div>
        <div className="post-info-2">
          <span className="post-category">Travel</span>
          <h5 className="mb-0">
            <a href="#" className="title">
              Nulla hendrerit dui in erat varius vestibulum.
            </a>
          </h5>
        </div>
      </div>
      <div className="news-list-item">
        <div className="img-wrapper">
          <a href="#" className="thumb">
            <img
              src="./kerala-business.avif"
              alt=""
              className="img-fluid"
              style={{height:'70px'}}
            />
            <div className="link-icon">
              <i className="fa fa-camera" />
            </div>
          </a>
        </div>
        <div className="post-info-2">
          <span className="post-category">Business</span>
          <h5 className="mb-0">
            <a href="#" className="title">
              Maecenas dictum lacus in bibendum commodo.
            </a>
          </h5>
        </div>
      </div> */}

      {newsItems.map((news) => (
        <div className="news-list-item" key={news.id}>
          <div className="img-wrapper">
            <Link href={`/news/${news.slug}`} className="thumb">
              <img
                src={`https://backend.outlinekerala.com/media/${news.image}`}
                alt={news.title}
                className="img-fluid"
                style={{ height: "70px" }}
              />
              <div className="link-icon">
                <i className="fa fa-camera" />
              </div>
            </Link>
          </div>
          <div className="post-info-2">
            <span className="post-category">{news.categoryName || "News"}</span>
            <h5 className="mb-0">
              <Link href={`/news/${news.slug}`} className="title">
                {news.title.length > 80
                  ? news.title.slice(0, 80) + "..."
                  : news.title}
              </Link>
            </h5>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
};

export default HomeFeatureCarousal;
