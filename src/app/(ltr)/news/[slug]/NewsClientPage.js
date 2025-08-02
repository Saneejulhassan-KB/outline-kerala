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
import {
  FaThumbsUp,
  FaThumbsDown,
  FaShareAlt,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLink,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useMutation } from "@apollo/client";
import { COMMENT_NEWS, LIKE_NEWS } from "../../../../../queries/mutations";
import { toast } from "react-toastify";
import TimeAgo from "@/components/TimeAgo";

const page = () => {
  const [sortOption, setSortOption] = useState("latest");
  const { isAuthenticated, user } = useAuth();
  const [commentText, setCommentText] = useState("");
  const [commentNews] = useMutation(COMMENT_NEWS);

  const [likeNews] = useMutation(LIKE_NEWS);
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);

  const [visibleCount, setVisibleCount] = useState(8);
  const { slug } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_CATEGORIES_WITH_NEWS);
  const errorUI = useSmartErrorHandler(error, refetch);

  useRemoveBodyClass(
    ["None"],
    ["home-seven", "home-nine", "boxed-layout", "home-six", "home-two"]
  );

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

  const comments = post?.comments || [];

  // const comments = post?.comments?.filter((c) => c.approved) || [];

  const sortedComments =
    sortOption === "latest"
      ? [...comments].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      : [...comments].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );

  {
    visibleCount < sortedComments.length && (
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button
          onClick={() => setVisibleCount((prev) => prev + 10)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#eb0254",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Show more comments
        </button>
      </div>
    );
  }

  const allCategories = data?.categories || [];

  useEffect(() => {
    if (!post?.likes || !Array.isArray(post.likes)) return;

    // Always update like count
    setLikeCount(post.likes.length);

    console.log(
      "Effect running — post:",
      post,
      "user:",
      user,
      "likes:",
      post?.likes
    );

    // Only update hasLiked if user is available
    if (user?.id) {
      const userHasLiked = post.likes.some((like) => like.user?.id === user.id);
      setHasLiked(userHasLiked);
    } else {
      setHasLiked(false); // in case user is not logged in
    }
  }, [post?.likes, user?.id]);

  const currentCategoryIndex = allCategories.findIndex(
    (cat) => cat.name === post.categoryName
  );

  // Wrap-around next 3 categories excluding the current one
  let secondSlideCategories = [];

  if (currentCategoryIndex !== -1) {
    const after = allCategories.slice(currentCategoryIndex + 1);
    const before = allCategories.slice(0, currentCategoryIndex); // wrap from start
    secondSlideCategories = [...after, ...before].slice(0, 3);
  }

  console.log("Sending comment:", {
    newsId: post?.id,
    content: commentText,
  });

  const handleSubmitComment = async () => {
    try {
      if (!commentText.trim()) return;

      const { data } = await commentNews({
        variables: {
          newsId: Number(post.id),
          content: commentText.trim(),
        },
      });

      toast.success("Comment posted!");

      // Optionally update UI or re-fetch comments
      setCommentText("");
      refetch(); // Re-fetch the query to get updated comments
    } catch (error) {
      console.error("GraphQL Error Details:", error?.graphQLErrors);
      console.error("Network Error:", error?.networkError);
      toast.error("Failed to post comment. Check console for details.");
    }
  };

  const handleLike = async () => {
    if (!isAuthenticated) {
      toast.warning("Please login to like the post.");
      return;
    }

    setLikeLoading(true);
    try {
      const { data } = await likeNews({
        variables: { newsId: Number(post.id) },
      });

      const liked = data?.likeNews?.liked;

      // Optimistically update UI
      setHasLiked(liked);
      setLikeCount((prev) => (liked ? prev + 1 : prev - 1));

      // Optionally refetch to ensure data consistency
      refetch();
    } catch (error) {
      console.error("Like error:", error);
      toast.error("Failed to like/unlike.");
    } finally {
      setLikeLoading(false);
    }
  };

  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleShare = (post) => {
    const url =
      typeof window !== "undefined"
        ? window.location.href
        : `https://yourdomain.com/news/${post.slug}`;
    const title = post.title;

    if (navigator.share) {
      navigator
        .share({
          title,
          text: title,
          url,
        })
        .catch(() => setShowShareMenu(true)); // fallback if user cancels
    } else {
      setShowShareMenu(true);
    }
  };

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
                  <div className="post_details_block">
                    <h3 style={{fontWeight:'bold'}}>{post.title}</h3>
                    <img
                      src={`https://backend.outlinekerala.com/media/${post.image}`}
                      className="img-fluid"
                      alt={post.title}
                    />
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />

                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                        marginTop: "20px",
                        padding: "12px 0",
                        borderTop: "1px solid #eee",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          cursor: isAuthenticated ? "pointer" : "not-allowed",
                          color: hasLiked ? "#eb0254" : "#666",
                          fontWeight: "500",
                          transition: "color 0.3s ease",
                          opacity: likeLoading ? 0.6 : 1,
                          pointerEvents: likeLoading ? "none" : "auto",
                        }}
                        onClick={handleLike}
                        title={
                          isAuthenticated
                            ? "Like this article"
                            : "Login to like"
                        }
                      >
                        <FaThumbsUp
                          style={{
                            transform: hasLiked ? "scale(1.1)" : "scale(1.0)",
                            transition: "transform 0.2s ease-in-out",
                          }}
                        />
                        <span>{likeCount}</span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          cursor: "pointer",
                          color: "#666",
                          fontWeight: "500",
                          transition: "color 0.3s",
                          position: "relative",
                        }}
                        onClick={() => setShowShareMenu((prev) => !prev)}
                        title="Share this article"
                      >
                        <FaShareAlt />
                        <span>Share</span>
                        {showShareMenu && (
                          <div
                            style={{
                              position: "absolute",
                              background: "#fff",
                              border: "1px solid #ddd",
                              borderRadius: "8px",
                              padding: "12px",
                              zIndex: 1000,
                              top: "40px",
                              left: "0",
                              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                              minWidth: "180px",
                            }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                          >
                            {/* Close button at top right */}
                            <span
                              onClick={() => setShowShareMenu(false)}
                              style={{
                                position: "absolute",
                                top: 6,
                                right: 10,
                                fontSize: 22,
                                color: "#888",
                                cursor: "pointer",
                                fontWeight: "bold",
                                zIndex: 2,
                                lineHeight: 1,
                                userSelect: "none",
                              }}
                              title="Close"
                            >
                              ×
                            </span>
                            <div style={{ marginBottom: 8, fontWeight: 500 }}>
                              Share this article:
                            </div>
                            <div
                              style={{
                                display: "flex",
                                gap: 12,
                                marginBottom: 8,
                              }}
                            >
                              <a
                                href={`https://wa.me/?text=${encodeURIComponent(
                                  post.title + " " + window.location.href
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Share on WhatsApp"
                                style={{ color: "#25D366", fontSize: 24 }}
                              >
                                <FaWhatsapp />
                              </a>
                              <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                  window.location.href
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Share on Facebook"
                                style={{ color: "#1877F3", fontSize: 24 }}
                              >
                                <FaFacebook />
                              </a>
                              <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                  window.location.href
                                )}&text=${encodeURIComponent(post.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Share on Twitter"
                                style={{ color: "#1DA1F2", fontSize: 24 }}
                              >
                                <FaTwitter />
                              </a>
                              <span
                                title="Copy link"
                                style={{
                                  color: "#333",
                                  fontSize: 24,
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  navigator.clipboard.writeText(
                                    window.location.href
                                  );
                                  toast.success("Link copied!");
                                  setShowShareMenu(false);
                                }}
                              >
                                <FaLink />
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          cursor: "pointer",
                          color: "#666",
                          fontWeight: "500",
                          transition: "color 0.3s",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.color = "#eb0254")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.color = "#666")
                        }
                      >
                        {/* <FaThumbsDown /> <span>10</span> */}
                      </div>
                    </div>
                  </div>
                  {/* Post footer */}
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
                </div>
                {/* END OF /. RELATED ARTICLES */}
                {/* START COMMENT */}

                <div className="comments-container">
                  <h5>Comments ({comments.length})</h5>

                  {/* Comment Input */}
                  {isAuthenticated && (
                    <div
                      className="comment-input-box"
                      style={{ marginBottom: "1rem" }}
                    >
                      <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
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
                        onClick={handleSubmitComment}
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
                  )}

                  {!isAuthenticated && (
                    <div
                      style={{
                        fontStyle: "italic",
                        marginBottom: "1rem",
                        background: "#fff3cd",
                        color: "#856404",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      Please login to post a comment.
                    </div>
                  )}

                  {/* Comments List */}
                  {isAuthenticated && post && post.comments && (
                    <>
                      {/* Sort Dropdown */}
                      <div
                        className="sort-bar"
                        style={{ marginBottom: "1rem" }}
                      >
                        <label
                          htmlFor="sortSelect"
                          style={{ marginRight: "10px" }}
                        >
                          <strong>Sort by</strong>
                        </label>
                        <select
                          id="sortSelect"
                          value={sortOption}
                          onChange={(e) => {
                            setSortOption(e.target.value);
                            setVisibleCount(8); // Reset visible count when sorting changes
                          }}
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
                      {sortedComments.length === 0 ? (
                        <p style={{ fontStyle: "italic", color: "#777" }}>
                          No comments yet.
                        </p>
                      ) : (
                        <>
                          {sortedComments
                            .slice(0, visibleCount)
                            .map((comment) => (
                              <div
                                key={comment.id}
                                className={`comment-item comment-item-${sortedComments.indexOf(
                                  comment
                                )}`}
                                style={{
                                  display: "flex",
                                  marginBottom: "1.5rem",
                                }}
                              >
                                <div style={{ marginRight: "12px" }}>
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
                                    {(() => {
                                      const username =
                                        comment.user?.username || "";
                                      const words = username.trim().split(" ");
                                      if (words.length >= 2) {
                                        return (
                                          words[0][0] + words[1][0]
                                        ).toUpperCase();
                                      } else {
                                        return (
                                          username[0]?.toUpperCase() || "?"
                                        );
                                      }
                                    })()}
                                  </div>
                                </div>
                                <div style={{ flexGrow: 1 }}>
                                  <div style={{ marginBottom: "2px" }}>
                                    <strong style={{ fontSize: "14px" }}>
                                      {comment.user.username}
                                    </strong>{" "}
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#666",
                                      }}
                                    >
                                      <TimeAgo date={comment.createdAt} />
                                    </span>
                                  </div>

                                  <div
                                    style={{
                                      fontSize: "15px",
                                      marginBottom: "6px",
                                    }}
                                  >
                                    {comment.content}
                                  </div>

                                  <div
                                    style={{
                                      display: "flex",
                                      gap: "12px",
                                      color: "#666",
                                      fontSize: "14px",
                                    }}
                                  >
                                    {/* Optional Like/Share buttons here */}
                                  </div>
                                </div>
                              </div>
                            ))}

                          {visibleCount < sortedComments.length && (
                            <div
                              style={{ textAlign: "center", marginTop: "1rem" }}
                            >
                              <span
                                onClick={() => {
                                  setVisibleCount((prev) => prev + 10);
                                  setTimeout(() => {
                                    const lastComment = document.querySelector(
                                      `.comment-item-${visibleCount}`
                                    );
                                    if (lastComment) {
                                      lastComment.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                      });
                                    }
                                  }, 100);
                                }}
                                style={{
                                  display: "inline-block",
                                  padding: "8px 16px",
                                  color: "#eb0254",
                                  textDecoration: "underline",
                                  fontWeight: "500",
                                  cursor: "pointer",
                                  transition: "color 0.3s",
                                }}
                                onMouseOver={(e) =>
                                  (e.target.style.color = "#b3003f")
                                }
                                onMouseOut={(e) =>
                                  (e.target.style.color = "#eb0254")
                                }
                              >
                                Show more comments
                              </span>
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>
                {/* END OF /. COMMENT */}
                {/* START COMMENTS FORMS */}

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

                {/* END OF /. SOCIAL ICON */}
                {/* START NAV TABS */}

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
