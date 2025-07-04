"use client";

import Layout from "@/components/ltr/layout/layout";
import LeftCarousal from "@/components/ltr/left-carousal/left-carousal";
import useRemoveBodyClass from "@/components/ltr/useEffect-hook/useEffect-hook";
import Link from "next/link";
import React, { useEffect } from "react";
import StickyBox from "react-sticky-box";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { GET_CATEGORIES_WITH_NEWS } from "../../../../../queries/getCategoriesWithNews";
import useSmartErrorHandler from "@/hooks/useSmartErrorHandler";

const page = () => {
  const { slug } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_CATEGORIES_WITH_NEWS);
  const errorUI = useSmartErrorHandler(error, refetch);
  const [currentPage, setCurrentPage] = useState(1);

  useRemoveBodyClass(
    ["None"],
    ["home-seven", "home-nine", "boxed-layout", "home-six", "home-two"]
  );
  const articlesPerPage = 14;

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (errorUI) return errorUI;

  const allCategories = data?.categories || [];

  // Find the category by slug
  const selectedCategory = allCategories.find((cat) => cat.slug === slug);

  const selectedCategoryIndex = allCategories.findIndex(cat => cat.slug === slug);

  // Gather next categories (wrapping if needed)
  let thirdSlideCategories = [];
  
  if (selectedCategoryIndex !== -1) {
    const after = allCategories.slice(selectedCategoryIndex + 1);
    const before = allCategories.slice(0, selectedCategoryIndex); // wrap from beginning
    thirdSlideCategories = [...after, ...before].slice(0, 3);
  }
  

  const newsItems =
    selectedCategory?.subcategories?.flatMap((sub) =>
      (sub.news || []).map((news) => ({
        ...news,
        subcategoryName: sub.name,
        subcategorySlug: sub.slug,
      }))
    ) || [];

  // Sort by latest (optional)
  const sortedNewsItems = newsItems.sort((a, b) => b.id - a.id);

  const totalPages = Math.ceil(sortedNewsItems.length / articlesPerPage);
  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = sortedNewsItems.slice(indexOfFirst, indexOfLast);

  const changePage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <Layout>
      {/* START PAGE TITLE */}
      <div className="page-title">
        <div className="container">
          <div className="align-items-center row">
            <div className="col">
              <h1 className="mb-sm-0">
                <strong>{slug.toUpperCase()}</strong>
              </h1>
            </div>
            <div className="col-12 col-sm-auto">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb d-inline-block">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {slug}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* END OF /. PAGE TITLE */}

      {/* *** START PAGE MAIN CONTENT *** */}
      <main className="page_main_wrapper">
        {/* START POST BLOCK SECTION */}
        {/* <section className="slider-inner">
                    <div className="container">
                        <div className="row thm-margin">
                            <div className="col-md-6 thm-padding">
                                <div className="slider-wrapper">
                                    <LeftCarousal />
                                </div>
                            </div>
                            <div className="col-md-6 thm-padding">
                                <div className="row slider-right-post thm-margin">
                                    <div className="col-6 col-sm-6 thm-padding">
                                        <div className="slider-post post-height-2">
                                            <a href="#" className="news-image">
                                                <img
                                                    src="https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2025/06/20/202506203432356.jpg?w=777&crop=0,10,777px,437px"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </a>
                                            <div className="post-text">
                                                <span className="post-category">Photography</span>
                                                <h4>
                                                    <a href="#">
                                                        It is a long established fact that a reader will.
                                                    </a>
                                                </h4>
                                                <ul className="authar-info d-flex flex-wrap">
                                                    <li className="authar d-lg-block d-none">
                                                        <a href="#">by david hall</a>
                                                    </li>
                                                    <li className="d-md-block d-none">May 29,2017</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-6 thm-padding">
                                        <div className="slider-post post-height-2">
                                            <a href="#" className="news-image">
                                                <img
                                                    src="https://c.ndtvimg.com/2024-10/p6am3msg_lionel-messi_625x300_20_October_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </a>
                                            <div className="post-text">
                                                <span className="post-category">Technology</span>
                                                <h4>
                                                    <a href="#">
                                                        There are many variations of passages of Lorem.
                                                    </a>
                                                </h4>
                                                <ul className="authar-info d-flex flex-wrap">
                                                    <li className="authar d-lg-block d-none">
                                                        <a href="#">by david hall</a>
                                                    </li>
                                                    <li className="d-md-block d-none">May 29,2017</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-6 thm-padding">
                                        <div className="slider-post post-height-2">
                                            <a href="#" className="news-image">
                                                <img
                                                    src="https://tmssl.akamaized.net//images/foto/galerie/lionel-messi-1692504890-114379.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </a>
                                            <div className="post-text">
                                                <span className="post-category">Fashion</span>
                                                <h4>
                                                    <a href="#">
                                                        Contrary to popular belief, Lorem Ipsum is not simply.
                                                    </a>
                                                </h4>
                                                <ul className="authar-info d-flex flex-wrap">
                                                    <li className="authar d-lg-block d-none">
                                                        <a href="#">by david hall</a>
                                                    </li>
                                                    <li className="d-md-block d-none">May 29,2017</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-6 thm-padding">
                                        <div className="slider-post post-height-2">
                                            <a href="#" className="news-image">
                                                <img
                                                    src="https://i.abcnewsfe.com/a/4170ba56-bbb3-447f-854f-7c49bacbc49a/wirestory_9c0826eb3f1de3ca6decdb2f4cd27011_16x9.jpg?w=992"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </a>
                                            <div className="post-text">
                                                <span className="post-category">Travel</span>
                                                <h4>
                                                    <a href="#">
                                                        Lorem Ipsum is simply dummy text of the printing
                                                    </a>
                                                </h4>
                                                <ul className="authar-info d-flex flex-wrap">
                                                    <li className="authar d-lg-block d-none">
                                                        <a href="#">by david hall</a>
                                                    </li>
                                                    <li className="d-md-block d-none">May 29,2017</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
        {/* END OF /. POST BLOCK SECTION */}
        <div className="container">
          <div className="row row-m">
            {/* START MAIN CONTENT */}
            <div className="col-sm-7 col-md-8 col-p main-content">
              <StickyBox>
                <div className="post-inner categoty-style-1">
                  <div className="post-body">
                    <div className="row row-m">
                      {currentArticles.map((article) => (
                        <div className="col-md-6 col-p" key={article.id}>
                          <article>
                            <figure>
                              <a href={`/news/${article.slug}`}>
                                <img
                                  src={`https://backend.outlinekerala.com/media/${article.image}`}
                                  alt={article.title}
                                  className="img-fluid category-page-image"
                                />
                              </a>
                              <span className="post-category">
                                {article.subcategoryName}
                              </span>
                            </figure>
                            <div className="post-info">
                              <h3>
                                <a href={`/news/${article.slug}`}>
                                  {article.title}
                                </a>
                              </h3>
                              <ul className="authar-info d-flex flex-wrap">
                                <li>
                                  <i className="ti ti-timer" />{" "}
                                  {new Date(article.publishDate).toDateString()}
                                </li>
                                {/* <li>
                                  <a href="#" className="link">
                                    <i className="ti ti-thumb-up" /> 15 likes
                                  </a>
                                </li> */}
                              </ul>
                            </div>
                          </article>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Post footer pagination.. */}
                  <div className="post-footer">
                    <div className="row thm-margin">
                      <div className="col-xs-12 col-sm-12 col-md-12 thm-padding">
                        <ul className="pagination">
                          <li className={currentPage === 1 ? "disabled" : ""}>
                            <span onClick={() => changePage(currentPage - 1)}>
                              <i className="ti ti-angle-left" />
                            </span>
                          </li>

                          {Array.from({ length: totalPages }).map((_, i) => (
                            <li
                              key={i}
                              className={currentPage === i + 1 ? "active" : ""}
                            >
                              <span onClick={() => changePage(i + 1)}>
                                {i + 1}
                              </span>
                            </li>
                          ))}

                          <li
                            className={
                              currentPage === totalPages ? "disabled" : ""
                            }
                          >
                            <span onClick={() => changePage(currentPage + 1)}>
                              <i className="ti ti-angle-right" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </StickyBox>
            </div>
            {/* END OF /. MAIN CONTENT */}
            {/* START SIDE CONTENT */}
            <div className="col-sm-5 col-md-4 col-p rightSidebar">
              <StickyBox>
                {/* START SOCIAL COUNTER TEXT */}
                {/* <div className="align-items-center d-flex fs-6 justify-content-center mb-1 text-center social-counter-total">
                  <i className="fa-solid fa-heart text-primary me-1" /> Join{" "}
                  <span className="fw-bold mx-1">2.5M</span> Followers
                </div> */}
                {/* END OF /. SOCIAL COUNTER TEXT */}
                {/* START SOCIAL ICON */}
                {/* <div className="social-media-inner mb-2">
                  <ul className="g-1 row social-media">
                    <li className="col-4">
                      <a href="#" className="rss">
                        <i className="fas fa-rss" />
                        <div>2,035</div>
                        <p>Subscribers</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="#" className="fb">
                        <i className="fab fa-facebook-f" />
                        <div>3,794</div>
                        <p>Fans</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="#" className="insta">
                        <i className="fab fa-instagram" />
                        <div>941</div>
                        <p>Followers</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="#" className="you_tube">
                        <i className="fab fa-youtube" />
                        <div>7,820</div>
                        <p>Subscribers</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="#" className="twitter">
                        <i className="fab fa-twitter" />
                        <div>1,562</div>
                        <p>Followers</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="#" className="pint">
                        <i className="fab fa-pinterest-p" />
                        <div>1,310</div>
                        <p>Followers</p>
                      </a>
                    </li>
                  </ul>{" "}
                  
                </div> */}
                {/* END OF /. SOCIAL ICON */}
                {/* START ADVERTISEMENT */}
                <div className="add-inner">
                  <img src="/ads.jpg" className="img-fluid" alt="Ad" />
                </div>

                {thirdSlideCategories.map((cat) => {
                  // Flatten all news from subcategories under this category
                  const categoryNews =
                    cat.subcategories?.flatMap((sub) =>
                      (sub.news || []).map((newsItem) => ({
                        ...newsItem,
                        subcategoryName: sub.name,
                        subcategorySlug: sub.slug,
                      }))
                    ) || [];

                  // Sort and pick latest 3
                  const latestNews = categoryNews
                    .sort((a, b) => b.id - a.id)
                    .slice(0, 3);

                  return (
                    <div className="panel_inner mb-4" key={cat.id}>
                      <div className="panel_header">
                        <h4>
                          <Link href={`/category/${cat.slug}`}>
                            <strong>{cat.name}</strong>
                          </Link>
                        </h4>
                      </div>

                      <div className="mb-3">
                        <img
                          src={`https://backend.outlinekerala.com/media/${cat.image}`}
                          alt={cat.name}
                          className="img-fluid w-100"
                          style={{
                            height: "200px",
                            objectFit: "cover",
                            marginTop: "10px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                          }}
                        />
                      </div>

                      <div className="panel_body">
                        {latestNews.length > 0 ? (
                          latestNews.map((news, index) => (
                            <div
                              key={news.id}
                              className={`border-bottom pb-3 mb-3 ${
                                index === latestNews.length - 1 ? "mb-0" : ""
                              }`}
                            >
                              <h6>
                                <Link href={`/news/${news.slug}`}>
                                  {news.title.length > 70
                                    ? news.title.slice(0, 70) + "..."
                                    : news.title}
                                </Link>
                              </h6>
                              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                                <li>
                                  <span className="post-category mb-0">
                                    {news.subcategoryName || "General"}
                                  </span>
                                </li>
                                <li>
                                  {new Date(news.publishDate).toDateString()}
                                </li>
                              </ul>
                              <p className="mb-0">
                                {news.content
                                  ?.replace(/<[^>]+>/g, "")
                                  .slice(0, 120) || "No content"}
                                ...
                              </p>
                            </div>
                          ))
                        ) : (
                          <p>No news available for {cat.name}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
                {/* END OF /. ADVERTISEMENT */}
                {/* START NAV TABS */}
                {/* <div className="tabs-wrapper">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link border-0 active"
                        id="most-viewed"
                        data-bs-toggle="tab"
                        data-bs-target="#most-viewed-pane"
                        type="button"
                        role="tab"
                        aria-controls="most-viewed-pane"
                        aria-selected="true"
                      >
                        Most Viewed
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link border-0"
                        id="popular-news"
                        data-bs-toggle="tab"
                        data-bs-target="#popular-news-pane"
                        type="button"
                        role="tab"
                        aria-controls="popular-news-pane"
                        aria-selected="false"
                      >
                        Popular news
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="most-viewed-pane"
                      role="tabpanel"
                      aria-labelledby="most-viewed"
                      tabIndex={0}
                    >
                      <div className="most-viewed">
                        <ul id="most-today" className="content tabs-content">
                          <li>
                            <span className="count">01</span>
                            <span className="text">
                              <a href="#">
                                South Africa bounce back on eventful day
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="count">02</span>
                            <span className="text">
                              <a href="#">
                                Steyn ruled out of series with shoulder fracture
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="count">03</span>
                            <span className="text">
                              <a href="#">
                                BCCI asks ECB to bear expenses of team's India
                                tour
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="count">04</span>
                            <span className="text">
                              <a href="#">
                                Duminy, Elgar tons set Australia huge target
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="count">05</span>
                            <span className="text">
                              <a href="#">
                                English spinners are third-class citizens, says
                                Graeme Swann
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="popular-news-pane"
                      role="tabpanel"
                      aria-labelledby="popular-news"
                      tabIndex={0}
                    >
                      <div className="popular-news">
                        <div className="p-post">
                          <h4>
                            <a href="#">
                              It is a long established fact that a reader will
                              be distracted by{" "}
                            </a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="#">
                                <i className="ti ti-timer" /> May 15, 2016
                              </a>
                            </li>
                            <li className="like">
                              <a href="#">
                                <i className="ti ti-thumb-up" />
                                15 likes
                              </a>
                            </li>
                          </ul>
                          <div className="reatting-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                        <div className="p-post">
                          <h4>
                            <a href="#">
                              It is a long established fact that a reader will
                              be distracted by{" "}
                            </a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="#">
                                <i className="ti ti-timer" /> May 15, 2016
                              </a>
                            </li>
                            <li className="like">
                              <a href="#">
                                <i className="ti ti-thumb-up" />
                                15 likes
                              </a>
                            </li>
                          </ul>
                          <div className="reatting-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                        <div className="p-post">
                          <h4>
                            <a href="#">
                              It is a long established fact that a reader will
                              be distracted by{" "}
                            </a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="#">
                                <i className="ti ti-timer" /> May 15, 2016
                              </a>
                            </li>
                            <li className="like">
                              <a href="#">
                                <i className="ti ti-thumb-up" />
                                15 likes
                              </a>
                            </li>
                          </ul>
                          <div className="reatting-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* END OF /. NAV TABS */}
              </StickyBox>
            </div>
            {/* END OF /. SIDE CONTENT */}
          </div>
        </div>
      </main>
      {/* *** END OF /. PAGE MAIN CONTENT *** */}
    </Layout>
  );
};

export default page;
