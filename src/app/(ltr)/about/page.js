"use client";

import Layout from "@/components/ltr/layout/layout";
import { useBackgroundImageLoader } from "@/components/ltr/use-background-image/use-background-image";
import useRemoveBodyClass from "@/components/ltr/useEffect-hook/useEffect-hook";
import Link from "next/link";

const page = () => {
  useRemoveBodyClass(
    ["None"],
    ["home-seven", "home-nine", "boxed-layout", "home-six", "home-two"]
  );
  useBackgroundImageLoader();
  return (
    <Layout>
      {/* *** START PAGE MAIN CONTENT *** */}
      <main className="page_main_wrapper">
        {/* START PAGE HEADER */}
        <section className="inner-head bg-img" data-image-src="./about.png">
          <div className="container position-relative">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="entry-title">About Us</h2>
                <p className="description">
                  Your Window to Kerala and the World – Trusted News, Fresh
                  Perspectives.
                </p>
                <div className="breadcrumb">
                  <ul className="clearfix">
                    <li className="ib">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="ib current-page">About</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END OF /. PAGE HEADER */}
        <div className="team about-content">
          <div className="container">
            {/* <div className="row">
              <div className="col-12">
                <h2>Our Valuable Team Members </h2>
              </div>
              
              <div className="col-6 col-md-3">
                <figure className="member">
                  {" "}
                  <img
                    src="assets/images/team/1.png"
                    className="img-fluid"
                    alt="Image"
                  />
                  <figcaption>
                    <h4>Debora Hilton</h4>
                    <small>Editor</small>
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
                
              </div>
              
              <div className="col-6 col-md-3">
                <figure className="member">
                  {" "}
                  <img
                    src="assets/images/team/2.png"
                    className="img-fluid"
                    alt="Image"
                  />
                  <figcaption>
                    <h4>Debora Hilton</h4>
                    <small>Editor</small>
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
                
              </div>
              
              <div className="col-6 col-md-3">
                <figure className="member">
                  {" "}
                  <img
                    src="assets/images/team/3.png"
                    className="img-fluid"
                    alt="Image"
                  />
                  <figcaption>
                    <h4>Chris O'Daniel</h4>
                    <small>Publisher</small>
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
                
              </div>
              
              <div className="col-6 col-md-3">
                <figure className="member">
                  {" "}
                  <img
                    src="assets/images/team/4.png"
                    className="img-fluid"
                    alt="Image"
                  />
                  <figcaption>
                    <h4>Lian Holden</h4>
                    <small>Project Manager</small>
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
                
              </div>
              
            </div> */}

            <div className="about-title">
              <h1>Our Mission</h1>
              <h3>Delivering Truth, Speed, and Clarity</h3>
              <p>
                Outline Kerala is more than just a news platform — it is a
                digital window connecting Kerala to the world. Our mission is to
                deliver unbiased journalism, accurate reporting, and fast
                updates in a time where information is everywhere but trust is
                rare. We are committed to empowering readers with news that
                matters, whether it's a local headline from Kochi or a global
                story shaping the future.
              </p>
            </div>

            <div className="about-title">
              <h2>What We Stand For</h2>
              <p>
                In a world overflowing with misinformation and sensationalism,
                we focus on building a credible and people-first news ecosystem.
                We stand for truth, inclusivity, and accessibility. Our platform
                is designed to be lightweight, fast, and clutter-free, so that
                readers can focus on what truly matters — the story.
              </p>
            </div>

            <div className="about-title">
              <h2>Features</h2>
              <ul>
                <li>
                  Get breaking news, live updates, and in-depth reports
                  instantly.
                </li>
                <li>
                  Enjoy smooth navigation with category-based and trending
                  sections.
                </li>
                
                <li>
                  Access rich multimedia — photos, videos, and infographics.
                </li>
                <li>
                  Experience a clean, lightweight, and ad-minimal reading
                  experience.
                </li>
                <li>
                  Receive personalized updates so you never miss important
                  stories.
                </li>
              </ul>
            </div>

            <div className="about-title">
              <h1>Why Choose Us?</h1>
              <h3>Trusted News, Global Reach, Kerala Focus</h3>
              <p>
                Our strength lies in our unique blend of local and global
                coverage. We give Kerala a global voice, and at the same time
                bring the world closer to Kerala. Whether it’s politics,
                business, sports, culture, or technology — our coverage is
                detailed, fast, and reliable.
              </p>
              <p>
                Readers choose us because we go beyond headlines. We provide
                context, background, and clarity, so that you are always
                informed enough to make better decisions and hold conversations
                that matter.
              </p>
            </div>

            <div className="about-title">
              <h1>Our Vision</h1>
              <p>
                We envision a digital Kerala where news is accessible,
                authentic, and engaging for every reader. By combining
                cutting-edge technology with traditional journalism ethics, we
                aim to redefine how news is consumed — interactive, immersive,
                and trustworthy. Our goal is to be the go-to news platform not
                just for Malayalees, but for anyone seeking credible coverage of
                Kerala and the world.
              </p>
            </div>

            <div className="about-title">
              <h1>Contact Us</h1>
              <p>
                We believe news is a dialogue, not a monologue. Your feedback,
                suggestions, and insights help us grow stronger every day. Reach
                out to us for collaborations, stories, or business
                opportunities.
              </p>
              <p>📧 Email: outlinekerala@gmail.com</p>
              <p>📍 Location: Kochi, Kerala</p>
            </div>

            {/* <h2>Related Articles</h2>
            <div className="news-grid-2">
              <div className="row">
                <div className="col-6 col-md-3">
                  <div className="grid-item">
                    <div className="grid-item-img">
                      <Link href="#">
                        <img
                          src="https://inews-neon.vercel.app/assets/images/218x150-1.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <div className="link-icon">
                          <i className="fa fa-play" />
                        </div>
                      </Link>
                    </div>
                    <h5>
                      <Link href="#" className="title">
                        Lorem Ipsum is simply dummy text of the printing.
                      </Link>
                    </h5>
                    <ul className="authar-info d-flex flex-wrap">
                      <li>May 15, 2016</li>
                      <li className="hidden-sm">
                        <Link href="#" className="link">
                          15 likes
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="grid-item">
                    <div className="grid-item-img">
                      <Link href="#">
                        <img
                          src="assets/images/218x150-2.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <div className="link-icon">
                          <i className="fa fa-camera" />
                        </div>
                      </Link>
                    </div>
                    <h5>
                      <Link href="#" className="title">
                        It is a long established fact that a reader will be
                        distracted by
                      </Link>
                    </h5>
                    <ul className="authar-info d-flex flex-wrap">
                      <li>May 15, 2016</li>
                      <li className="hidden-sm">
                        <Link href="#" className="link">
                          15 likes
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="grid-item">
                    <div className="grid-item-img">
                      <Link href="#">
                        <img
                          src="assets/images/218x150-3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <div className="link-icon">
                          <i className="fa fa-camera" />
                        </div>
                      </Link>
                    </div>
                    <h5>
                      <Link href="#" className="title">
                        There are many variations of passages of Lorem Ipsum.
                      </Link>
                    </h5>
                    <ul className="authar-info d-flex flex-wrap">
                      <li>May 15, 2016</li>
                      <li className="hidden-sm">
                        <Link href="#" className="link">
                          15 likes
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="grid-item">
                    <div className="grid-item-img">
                      <Link href="#">
                        <img
                          src="assets/images/218x150-4.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <div className="link-icon">
                          <i className="fa fa-camera" />
                        </div>
                      </Link>
                    </div>
                    <h5>
                      <Link href="#" className="title">
                        There are many variations of passages of Lorem Ipsum.
                      </Link>
                    </h5>
                    <ul className="authar-info d-flex flex-wrap">
                      <li>May 15, 2016</li>
                      <li className="hidden-sm">
                        <Link href="#" className="link">
                          15 likes
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </main>
      {/* *** END OF /. PAGE MAIN CONTENT *** */}
    </Layout>
  );
};

export default page;
