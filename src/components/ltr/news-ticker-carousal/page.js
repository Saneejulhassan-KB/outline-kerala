import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css/animate.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const NewsTicker = ({ trendingNews }) => {
  if (!trendingNews?.length) return null;

  return (
    <div className="container">
      <div className="newstricker_inner">
        <div className="trending">
          <strong>Trending</strong> Now
        </div>
        <OwlCarousel
          className="news-ticker owl-theme"
          loop={true}
          items={1}
          dots={false}
          animateOut="animate__slideOutDown"
          animateIn="animate__flipInX"
          autoplay={true}
          autoplayTimeout={5000}
          autoplayHoverPause={true}
          nav={false}
          responsive={{
            0: { nav: false },
            768: {
              nav: true,
              navText: [
                "<i class='ti ti-angle-left'></i>",
                "<i class='ti ti-angle-right'></i>",
              ],
            },
          }}
        >
          {trendingNews.map((news) => (
            <div className="item" key={news.id}>
              <a href={`/news/${news.slug}`}>{news.title}</a>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default NewsTicker;
