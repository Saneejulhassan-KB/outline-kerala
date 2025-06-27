
"use client"
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'animate.css/animate.css'

if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const LeftCarousal = () => {
    const options = {
        loop: true,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 4000, //Set AutoPlay to 4 seconds
        autoplayHoverPause: true,
        nav: true,
        navText: [
            "<i class='ti ti ti-angle-left'></i>",
            "<i class='ti ti ti-angle-right'></i>"
        ]

    };
    return (
        <OwlCarousel id="owl-slider" className=" owl-theme" {...options}>
            {/* Slider item one */}
            <div className="item">
                <div className="slider-post post-height-1">
                    <a href="#" className="news-image">
                        <img
                            src="https://i.ytimg.com/vi/MaGMHGaQK-Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDlybwV8MVP09pMjruDcl4AUJgZ7w"
                            alt=""
                            className="img-fluid"
                        />
                    </a>
                    <div className="post-text">
                        <span className="post-category">Business</span>
                        <h2>
                            <a href="#">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has {" "}
                            </a>
                        </h2>
                        <ul className="authar-info d-flex flex-wrap">
                            <li className="authar">
                                <a href="#">by david hall</a>
                            </li>
                            <li className="date">May 29,2016</li>
                            <li className="view">
                                <a href="#">25 views</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* /.Slider item one */}
            {/* Slider item two */}
            <div className="item">
                <div className="slider-post post-height-1">
                    <a href="#" className="news-image">
                        <img
                            src="https://assets.citizen.digital/102190/conversions/Lionel-Messi-Inter-Miami-og_image.webp"
                            alt=""
                            className="img-fluid"
                        />
                    </a>
                    <div className="post-text">
                        <span className="post-category">Politics</span>
                        <h2>
                            <a href="#">
                                It is a long established fact that a reader will be
                                distracted by the readable content of a page.
                            </a>
                        </h2>
                        <ul className="authar-info d-flex flex-wrap">
                            <li className="authar">
                                <a href="#">by david hall</a>
                            </li>
                            <li className="date">May 29,2016</li>
                            <li className="view">
                                <a href="#">25 views</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* /.Slider item two */}
            {/* Slider item three */}
            <div className="item">
                <div className="slider-post post-height-1">
                    <a href="#" className="news-image">
                        <img
                            src="https://athlonsports.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MjEwMTg0MTc2ODc0MzAwNDQ3/mls-under-fire-for-playoff-video-featuring-lionel-messi-thumb.png"
                            alt=""
                            className="img-fluid"
                        />
                    </a>
                    <div className="post-text">
                        <span className="post-category">Photography</span>
                        <h2>
                            <a href="#">
                                Contrary to popular belief, Lorem Ipsum is not simply
                                random text. It has roots in a piece
                            </a>
                        </h2>
                        <ul className="authar-info d-flex flex-wrap">
                            <li className="authar">
                                <a href="#">by david hall</a>
                            </li>
                            <li className="date">May 29,2016</li>
                            <li className="view">
                                <a href="#">25 views</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* /.Slider item three */}
            {/* Slider item four */}
            <div className="item">
                <div className="slider-post post-height-1">
                    <a href="#" className="news-image">
                        <img
                            src="https://images.news18.com/ibnlive/uploads/2023/08/messi-vs-orlando-twitter-feature-169103674016x9.jpg?im=Resize,width=640,aspect=fit,type=normal"
                            alt=""
                            className="img-fluid"
                        />
                    </a>
                    <div className="post-text">
                        <span className="post-category">Travel</span>
                        <h2>
                            <a href="#">
                                There are many variations of passages of Lorem Ipsum
                                available, but the majority.
                            </a>
                        </h2>
                        <ul className="authar-info d-flex flex-wrap">
                            <li className="authar">
                                <a href="#">by david hall</a>
                            </li>
                            <li className="date">May 29,2016</li>
                            <li className="view">
                                <a href="#">25 views</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* /.Slider item four */}
            {/* slider item five */}
            <div className="item">
                <div className="slider-post post-height-1">
                    <a href="#" className="news-image">
                        <img
                            src="https://prod-media.beinsports.com/image/1742202002290_213f2480-0d40-42b8-81ab-74567f142f37.jpg?ver=12-01-2025"
                            alt=""
                            className="img-fluid"
                        />
                    </a>
                    <div className="post-text">
                        <span className="post-category">Business</span>
                        <h2>
                            <a href="#">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry's standard{" "}
                            </a>
                        </h2>
                        <ul className="authar-info d-flex flex-wrap">
                            <li className="authar">
                                <a href="#">by david hall</a>
                            </li>
                            <li className="date">May 29,2016</li>
                            <li className="view">
                                <a href="#">25 views</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* /.Slider item five */}
        </OwlCarousel>
    );
};

export default LeftCarousal;
