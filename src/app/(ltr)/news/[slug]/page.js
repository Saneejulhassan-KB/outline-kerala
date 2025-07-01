"use client";
import RelatedArticles from "@/components/ltr/related-articles/related-articles";
import useRemoveBodyClass from "@/components/ltr/useEffect-hook/useEffect-hook";
import Link from "next/link";
import StickyBox from "react-sticky-box";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import Layout from "@/components/ltr/layout/layout";
import useSmartErrorHandler from "@/hooks/useSmartErrorHandler";
import { GET_CATEGORIES_WITH_NEWS } from "../../../../../queries/getCategoriesWithNews";
import { FaThumbsUp, FaThumbsDown, FaShareAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

const page = () => {
  const [sortOption, setSortOption] = useState("latest");

  const comments = [
    {
      id: 1,
      name: "vava",
      avatar: "V",
      time: "now",
      text: "No grass will walk. Since Pinu is the CM & Police under him.",
    },
    {
      id: 2,
      name: "commi udaippu",
      avatar: "CU",
      time: "13m",
      text: "vediveppu prathiye cheap pm go back vilikalu maayi sweekarikkun illa",
    },
    {
      id: 3,
      name: "Christo Chiramukhathu",
      avatarImg: "https://i.pravatar.cc/40?img=1",
      time: "15m",
      text: "അല്ല.. ഇതിപ്പോൾ ആർകാണ് പറയാൻ? അവലാതിയുമായ് പോലീസ്...",
    },
  ];

  const sortedComments =
    sortOption === "latest" ? [...comments].reverse() : [...comments];

  const { slug } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_CATEGORIES_WITH_NEWS);
  const errorUI = useSmartErrorHandler(error, refetch);

  useRemoveBodyClass(
    ["None"],
    ["home-seven", "home-nine", "boxed-layout", "home-six", "home-two"]
  );

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

  const newsItems = data?.categories?.flatMap((category) =>
    category.subcategories?.flatMap((subcategory) =>
      (subcategory.news || []).map((newsItem) => ({
        ...newsItem,
        categoryName: category.name,
        subcategoryName: subcategory.name,
      }))
    )
  );

  const post = newsItems?.find((news) => String(news.slug) === String(slug));
  if (!post) return <p>Post not found</p>;

  const allCategories = data?.categories || [];

  // Get the next two categories for the bottom  left sidebar
  const currentCategoryIndex = allCategories.findIndex(
    (cat) => cat.name === post.categoryName
  );
  const secondSlideCategories = allCategories.slice(
    currentCategoryIndex + 1,
    currentCategoryIndex + 4
  );

  return (
    <Layout>
      {/* *** START PAGE MAIN CONTENT *** */}
      <main className="page_main_wrapper">
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
        <div className="container">
          <div className="row row-m">
            {/* START MAIN CONTENT */}
            <div className="col-md-8 col-p main-content">
              <StickyBox>
                <div className="post_details_inner">
                  {/* <div className="post_details_block">
                      <figure className="social-icon">
                        <img
                          src="assets/images/details-690x460-1.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <div>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                          <Link href="#" className="d-md-block d-none">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                          <Link href="#" className="d-md-block d-none">
                            <i className="fab fa-pinterest-p" />
                          </Link>
                        </div>
                      </figure>
                      <h2>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.  {}
                      </h2>
                      <ul className="authar-info d-flex flex-wrap">
                        <li>
                          <Link href="#" className="link">
                            by david hall
                          </Link>
                        </li>
                        <li>May 29,2016</li>
                        <li>
                          <Link href="#" className="link">
                            25 views
                          </Link>
                        </li>
                      </ul>
                      <p>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content
                        here, content here', making it look like readable English.
                        Many desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search for
                        'lorem ipsum' will uncover many web sites still in their
                        infancy. Various versions have evolved over the years,
                        sometimes by accident, sometimes on purpose (injected humour
                        and the like).
                      </p>
                      <div className="article_comment">
                        <p>
                          All the lorem ipsum generators on the internet tend to
                          repeat predefined chunks as necessary, making this the first
                          true on the Internet. uses a dictionary of over.
                        </p>
                        <div className="customers">
                          {" "}
                          - Mozammel Hoque,<span> Advisor</span>
                        </div>
                      </div>
                      <p>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content
                        here, content here', making it look like readable English.
                        Many desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search for
                        'lorem ipsum' will uncover many web.
                      </p>
                      <ul className="arrow_list">
                        <li>
                          must explain to you how all this mistaken idea of denouncing
                        </li>
                        <li>
                          pleasure and praising pain was born and I will give you a
                          complete account
                        </li>
                        <li>the system and expound the actual teachings</li>
                        <li>
                          great explorer of the truth, the master builder of human
                          happiness.
                        </li>
                      </ul>
                      <p>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content
                        here, content here', making it look like readable English.
                        Many.
                      </p>
                      <figure className="align-left">
                        <img
                          src="assets/images/details-300x362-1.jpg"
                          alt=""
                          width={300}
                          height={362}
                        />
                      </figure>
                      <p>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content
                        here, content here', making it look like readable English.
                        Many desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search for
                        'lorem ipsum' will uncover many web sites still in their
                        infancy. Various versions have evolved over the years,
                        sometimes by accident, sometimes on purpose (injected humour
                        and the like).
                      </p>
                      <p>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content
                        here, content here', making it look like readable English.
                        Many desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search for
                        'lorem ipsum' will uncover many web sites still in their
                        infancy. Various versions have evolved over the years,
                        sometimes by accident, sometimes on purpose (injected humour
                        and the like).
                      </p>
                      <p>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content
                        here, content here', making it look like readable English.
                        Many desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search for
                        'lorem ipsum' will uncover many web sites still in their
                        infancy. Various versions have evolved over the years,
                        sometimes by accident, sometimes on purpose (injected humour
                        and the like).
                      </p>
                    </div> */}

                  <div className="post_details_block">
                    <h2>{post.title}</h2>
                    <img
                      src={`https://backend.outlinekerala.com/media/${post.image}`}
                      className="img-fluid"
                      alt={post.title}
                    />
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                  {/* Post footer */}
                  {/* <div className="post-footer">
                    <div className="row thm-margin">
                      <div className="col-xs-12 col-sm-12 col-md-12 thm-padding">
                        
                        <ul className="pagination">
                          <li className="disabled">
                            <span className="ti ti-angle-left" />
                          </li>
                          <li className="active">
                            <span>1</span>
                          </li>
                          <li>
                            <Link href="#">2</Link>
                          </li>
                          <li>
                            <Link href="#">3</Link>
                          </li>
                          <li className="disabled">
                            <span className="extend">...</span>
                          </li>
                          <li></li>
                          <li>
                            <Link href="#">12</Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="ti ti-angle-right" />
                            </Link>
                          </li>
                        </ul>{" "}
                       
                      </div>
                    </div>
                  </div> */}
                </div>
                {/* START RELATED ARTICLES */}
                <div className="post-inner post-inner-2">
                  {/*post header*/}
                  <div className="post-head">
                    <h2 className="title">
                      <strong>Related </strong> Articles
                    </h2>
                  </div>
                  {/* post body */}
                  <div className="post-body">
                    <RelatedArticles
                      articles={
                        newsItems
                          ?.filter(
                            (item) =>
                              item.categoryName === post.categoryName &&
                              item.id !== post.id
                          )
                          ?.slice(-6) // last 6 articles (i.e., latest added, not by date)
                          ?.reverse() // to show latest first
                      }
                    />
                  </div>
                  {/* Post footer */}
                  {/* <div className="post-footer">
                    <div className="row thm-margin">
                      <div className="col-md-8 thm-padding">
                        <Link href="#" className="more-btn">
                          More popular posts
                        </Link>
                      </div>
                      <div className="col-md-4 d-md-block d-none thm-padding">
                        <div className="social">
                          <ul>
                            <li>
                              <div className="share transition">
                                <Link
                                  href="#"
                                  target="_blank"
                                  className="ico fb"
                                >
                                  <i className="fab fa-facebook-f" />
                                </Link>
                                <Link
                                  href="#"
                                  target="_blank"
                                  className="ico tw"
                                >
                                  <i className="fab fa-twitter" />
                                </Link>
                                <Link
                                  href="#"
                                  target="_blank"
                                  className="ico rs"
                                >
                                  <i className="fas fa-rss" />
                                </Link>
                                <Link
                                  href="#"
                                  target="_blank"
                                  className="ico pin"
                                >
                                  <i className="fab fa-pinterest-p" />
                                </Link>
                                <i className="ti ti-share ico-share" />
                              </div>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="ti ti-heart" />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="ti ti-twitter" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                {/* END OF /. RELATED ARTICLES */}
                {/* START COMMENT */}
                {/* <div className="comments-container">
                  <h3>Comments (3)</h3>
                  <ul className="comments-list">
                    <li>
                      <div className="comment-main-level">
                        
                        <div className="comment-avatar">
                          <img src="assets/images/avatar-1.jpg" alt="" />
                        </div>
                        <div className="comment-box">
                          <div className="comment-content">
                            <div className="comment-header">
                              {" "}
                              <cite className="comment-author">
                                - Mozammel Hoque
                              </cite>
                              <time
                                dateTime="2012-10-27"
                                className="comment-datetime"
                              >
                                25 October 2016 at 12.27 pm
                              </time>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Velit omnis animi et iure
                              laudantium vitae, praesentium optio, sapiente
                              distinctio illo?
                            </p>
                            <Link href="#" className="btn btn-news">
                              {" "}
                              Reply
                            </Link>
                          </div>
                        </div>
                      </div>
                      <ul className="comments-list reply-list">
                        <li>
                          
                          <div className="comment-avatar">
                            <img src="assets/images/avatar-1.jpg" alt="" />
                          </div>
                          <div className="comment-box">
                            <div className="comment-content">
                              <div className="comment-header">
                                {" "}
                                <cite className="comment-author">
                                  - Tahmina Akthr
                                </cite>
                                <time
                                  dateTime="2012-10-27"
                                  className="comment-datetime"
                                >
                                  25 October 2016 at 12.27 pm
                                </time>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Velit omnis animi et iure
                                laudantium vitae, praesentium optio, sapiente
                                distinctio illo?
                              </p>
                              <Link href="#" className="btn btn-news">
                                {" "}
                                Reply
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li>
                         
                          <div className="comment-avatar">
                            <img src="assets/images/avatar-1.jpg" alt="" />
                          </div>
                          <div className="comment-box">
                            <div className="comment-content">
                              <div className="comment-header">
                                {" "}
                                <cite className="comment-author">
                                  - Mozammel Hoque
                                </cite>
                                <time
                                  dateTime="2012-10-27"
                                  className="comment-datetime"
                                >
                                  25 October 2016 at 12.27 pm
                                </time>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Velit omnis animi et iure
                                laudantium vitae, praesentium optio, sapiente
                                distinctio illo?
                              </p>
                              <Link href="#" className="btn btn-news">
                                {" "}
                                Reply
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="comment-main-level">
                        
                        <div className="comment-avatar">
                          <img src="assets/images/avatar-1.jpg" alt="" />
                        </div>
                        <div className="comment-box">
                          <div className="comment-content">
                            <div className="comment-header">
                              {" "}
                              <cite className="comment-author">
                                - Tahmina Akthr
                              </cite>
                              <time
                                dateTime="2012-10-27"
                                className="comment-datetime"
                              >
                                25 October 2016 at 12.27 pm
                              </time>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Velit omnis animi et iure
                              laudantium vitae, praesentium optio, sapiente
                              distinctio illo?
                            </p>
                            <Link href="#" className="btn btn-news">
                              {" "}
                              Reply
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div> */}

                <div className="comments-container">
                  <h5>Comments ({comments.length})</h5>

                  {/* Comment Input */}
                  <div
                    className="comment-input-box"
                    style={{ marginBottom: "1rem" }}
                  >
                    <textarea
                      placeholder="Write a comment"
                      rows={3}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                      }}
                    ></textarea>
                    <button
                      style={{
                        marginTop: "8px",
                        float: "right",
                        background: "#eb0254",
                        color: "white",
                        padding: "6px 16px",
                        border: "none",
                        borderRadius: "4px",
                      }}
                    >
                      Submit
                    </button>
                  </div>

                  {/* Sort Dropdown */}
                  <div
                    className="sort-bar"
                    style={{
                      marginBottom: "1rem",
                      color: "#555",
                      fontSize: "14px",
                    }}
                  >
                    <label htmlFor="sortSelect" style={{ marginRight: "10px" }}>
                      <strong>Sort by</strong>
                    </label>
                    <select
                      id="sortSelect"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      style={{
                        padding: "5px 10px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        fontSize: "14px",
                      }}
                    >
                      <option value="latest">Latest</option>
                      <option value="oldest">Oldest</option>
                    </select>
                  </div>

                  {/* Comments List */}
                  {sortedComments.map((comment) => (
                    <div
                      key={comment.id}
                      style={{ display: "flex", marginBottom: "1.5rem" }}
                    >
                      <div style={{ marginRight: "12px" }}>
                        {comment.avatarImg ? (
                          <img
                            src={comment.avatarImg}
                            alt={comment.name}
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              backgroundColor: "#ddd",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: "bold",
                              fontSize: "14px",
                              color: "#333",
                            }}
                          >
                            {comment.avatar}
                          </div>
                        )}
                      </div>
                      <div style={{ flexGrow: 1 }}>
                        <div style={{ marginBottom: "2px" }}>
                          <strong style={{ fontSize: "14px" }}>
                            {comment.name}
                          </strong>{" "}
                          <span style={{ fontSize: "13px", color: "#666" }}>
                            {comment.time}
                          </span>
                        </div>
                        <div style={{ fontSize: "15px", marginBottom: "6px" }}>
                          {comment.text}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "12px",
                            color: "#666",
                            fontSize: "14px",
                          }}
                        >
                          <FaThumbsUp style={{ cursor: "pointer" }} />
                          <FaThumbsDown style={{ cursor: "pointer" }} />
                          <span style={{ cursor: "pointer" }}>Share</span>
                          <BsThreeDotsVertical
                            style={{ marginLeft: "auto", cursor: "pointer" }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* END OF /. COMMENT */}
                {/* START COMMENTS FORMS */}
                {/* <form className="comment-form" action="#" method="post">
                  <h3>
                    <strong>Leave</strong> a Comment
                  </h3>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="name">full name*</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Your name*"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="email">Email*</label>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Your email address here"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="name">website</label>
                        <input
                          type="text"
                          className="form-control"
                          id="website"
                          name="website"
                          placeholder="Your website url"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="email">Subject</label>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Write subject here"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Your Comment*"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                  <Link href="#" className="btn btn-news">
                    {" "}
                    Submit
                  </Link>
                </form> */}
                {/* END OF /. COMMENTS FORMS */}
              </StickyBox>
            </div>
            {/* END OF /. MAIN CONTENT */}
            {/* START SIDE CONTENT */}
            <div className="col-md-4 col-md-4 col-p rightSidebar">
              <StickyBox>
                {/* START ADVERTISEMENT */}
                <div className="add-inner">
                  <img src="/ads.jpg" className="img-fluid" alt="Ad" />
                </div>
                {/* END OF /. ADVERTISEMENT */}
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
                      <Link href="#" className="rss">
                        <i className="fas fa-rss" />
                        <div>2,035</div>
                        <p>Subscribers</p>
                      </Link>
                    </li>
                    <li className="col-4">
                      <Link href="#" className="fb">
                        <i className="fab fa-facebook-f" />
                        <div>3,794</div>
                        <p>Fans</p>
                      </Link>
                    </li>
                    <li className="col-4">
                      <Link href="#" className="insta">
                        <i className="fab fa-instagram" />
                        <div>941</div>
                        <p>Followers</p>
                      </Link>
                    </li>
                    <li className="col-4">
                      <Link href="#" className="you_tube">
                        <i className="fab fa-youtube" />
                        <div>7,820</div>
                        <p>Subscribers</p>
                      </Link>
                    </li>
                    <li className="col-4">
                      <Link href="#" className="twitter">
                        <i className="fab fa-twitter" />
                        <div>1,562</div>
                        <p>Followers</p>
                      </Link>
                    </li>
                    <li className="col-4">
                      <Link href="#" className="pint">
                        <i className="fab fa-pinterest-p" />
                        <div>1,310</div>
                        <p>Followers</p>
                      </Link>
                    </li>
                  </ul>{" "}
                  
                </div> */}

                {/* END OF /. SOCIAL ICON */}
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
                              <Link href="#">
                                South Africa bounce back on eventful day
                              </Link>
                            </span>
                          </li>
                          <li>
                            <span className="count">02</span>
                            <span className="text">
                              <Link href="#">
                                Steyn ruled out of series with shoulder fracture
                              </Link>
                            </span>
                          </li>
                          <li>
                            <span className="count">03</span>
                            <span className="text">
                              <Link href="#">
                                BCCI asks ECB to bear expenses of team's India
                                tour
                              </Link>
                            </span>
                          </li>
                          <li>
                            <span className="count">04</span>
                            <span className="text">
                              <Link href="#">
                                Duminy, Elgar tons set Australia huge target
                              </Link>
                            </span>
                          </li>
                          <li>
                            <span className="count">05</span>
                            <span className="text">
                              <Link href="#">
                                English spinners are third-class citizens, says
                                Graeme Swann
                              </Link>
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
                            <Link href="#">
                              It is a long established fact that a reader will
                              be distracted by{" "}
                            </Link>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <Link href="#">
                                <i className="ti ti-timer" /> May 15, 2016
                              </Link>
                            </li>
                            <li className="like">
                              <Link href="#">
                                <i className="ti ti-thumb-up" />
                                15 likes
                              </Link>
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
                            <Link href="#">
                              It is a long established fact that a reader will
                              be distracted by{" "}
                            </Link>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <Link href="#">
                                <i className="ti ti-timer" /> May 15, 2016
                              </Link>
                            </li>
                            <li className="like">
                              <Link href="#">
                                <i className="ti ti-thumb-up" />
                                15 likes
                              </Link>
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
                            <Link href="#">
                              It is a long established fact that a reader will
                              be distracted by{" "}
                            </Link>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <Link href="#">
                                <i className="ti ti-timer" /> May 15, 2016
                              </Link>
                            </li>
                            <li className="like">
                              <Link href="#">
                                <i className="ti ti-thumb-up" />
                                15 likes
                              </Link>
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

                {secondSlideCategories.map((cat) => {
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
                            paddingLeft:'10px',
                            paddingRight:'10px'
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
