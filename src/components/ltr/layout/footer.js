"use client";

import { GET_CATEGORIES_WITH_NEWS } from "../../../../queries/getCategoriesWithNews";
import ScrollToTopUI from "../scroll-to-top/scroll-to-top";
import { useBackgroundImageLoader } from "../use-background-image/use-background-image";
import { useQuery } from "@apollo/client";

const Footer = () => {
  useBackgroundImageLoader();

  const { data, loading, error } = useQuery(GET_CATEGORIES_WITH_NEWS);

  if (loading) return null;
  if (error) return <p>Error loading footer content</p>;

  const categories = data?.categories || [];

  // Collect unique tags
  const allTags = categories
    .flatMap((cat) =>
      cat.subcategories?.flatMap((sub) =>
        sub.news?.flatMap((news) => news.tags || [])
      )
    )
    .filter(Boolean);

  const uniqueTagsMap = new Map();
  allTags.forEach((tag) => {
    if (!uniqueTagsMap.has(tag.id)) {
      uniqueTagsMap.set(tag.id, tag);
    }
  });

  const uniqueTags = Array.from(uniqueTagsMap.values());

  return (
    <>
      <ScrollToTopUI />

      {/* START FOOTER */}
      <footer className="main-footer bg-img" data-image-src="./footer.jpg">
        <div className="container position-relative z-1">
          <div className="row">
            {/* Logo Box */}
            <div className="col-sm-6 col-lg-3 footer-box py-4">
              <div className="about-inner text-center">
                <div className="mb-3 d-inline-block">
                  <a href="/" className="footer-logo">
                  <img
                    src="/logo.jpeg"
                    alt="footer logo"
                    className="img-fluid"
                    height={146}
                    width={146}
                  />
                  </a>
                 
                </div>
              </div>
            </div>

            {/* Category Box */}
            <div className="col-sm-6 col-lg-3 footer-box py-4">
              <h5 className="wiget-title">Categories</h5>
              <ul className="list-unstyled m-0 menu-services">
                {categories.map((category) => (
                  <li key={category.id}>
                    <a href={`/category/${category.slug}`}>{category.slug}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags Box */}
            <div className="col-sm-6 col-lg-3 footer-box py-4">
              <h5 className="wiget-title">Tags</h5>
              <ul className="list-unstyled m-0 menu-services">
                {uniqueTags.map((tag) => (
                  <li key={tag.id}>
                    <a href={`/tags/${tag.slug}`}>{tag.slug}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Static Links Box */}
            <div className="col-sm-6 col-lg-3 footer-box py-4">
              <h5 className="wiget-title">Quick Links</h5>
              <ul className="list-unstyled m-0 menu-services">
              <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/newsletter">Newsletter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* END FOOTER */}

      {/* START SUB FOOTER */}
      <div className="sub-footer">
        <div className="container">
          <div className="row align-items-center g-1 g-sm-3">
            <div className="col text-center text-sm-start">
              <div className="copy">
                © 2025 Outline-Kerala. All rights reserved.
              </div>
            </div>
            <div className="col-sm-auto">
              <ul className="footer-nav list-unstyled text-center mb-0">
                <li className="list-inline-item">
                  <a href="/about">About</a>
                </li>
                <li className="list-inline-item">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* END SUB FOOTER */}
    </>
  );
};

export default Footer;
