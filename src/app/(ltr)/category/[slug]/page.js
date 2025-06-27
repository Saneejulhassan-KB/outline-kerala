"use client"

import Layout from '@/components/ltr/layout/layout';
import LeftCarousal from '@/components/ltr/left-carousal/left-carousal';
import useRemoveBodyClass from '@/components/ltr/useEffect-hook/useEffect-hook';
import Link from 'next/link';
import React, { useEffect } from 'react';
import StickyBox from 'react-sticky-box';

import { useParams } from 'next/navigation';

const page = () => {

    const { slug } = useParams();

    useRemoveBodyClass(['None'], ['home-seven', 'home-nine','boxed-layout','home-six','home-two']);
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
                                        Category Style One
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
                <section className="slider-inner">
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
                </section>
                {/* END OF /. POST BLOCK SECTION */}
                <div className="container">
                    <div className="row row-m">
                        {/* START MAIN CONTENT */}
                        <div className="col-sm-7 col-md-8 col-p main-content">
                            <StickyBox>
                                <div className="post-inner categoty-style-1">
                                    {/* post body */}
                                    <div className="post-body">
                                        <div className="row row-m">
                                            <div className="col-md-6 col-p">
                                                <article>
                                                    <figure>
                                                        <a href="">
                                                            <img
                                                                src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1029%2Fr1407650_1296x729_16%2D9.jpg"
                                                                height={242}
                                                                width={345}
                                                                alt=""
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                        <span className="post-category">Business</span>
                                                    </figure>
                                                    <div className="post-info">
                                                        <h3>
                                                            <a href="#">
                                                                The generated Lorem Ipsum is therefore always free
                                                                from
                                                            </a>
                                                        </h3>
                                                        <ul className="authar-info d-flex flex-wrap">
                                                            <li>
                                                                <i className="ti ti-timer" /> May 15, 2016
                                                            </li>
                                                            <li>
                                                                <a href="#" className="link">
                                                                    <i className="ti ti-thumb-up" />
                                                                    15 likes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="col-md-6 col-p">
                                                <article>
                                                    <figure>
                                                        <a href="">
                                                            <img
                                                                src="https://i0.wp.com/whatsupnewp.com/wp-content/uploads/2024/10/MLS_New_England_Miami_Soccer_24294028566372-scaled.jpg?fit=2560%2C1706&quality=89&ssl=1"
                                                                height={242}
                                                                width={345}
                                                                alt=""
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                        <span className="post-category">Business</span>
                                                    </figure>
                                                    <div className="post-info">
                                                        <h3>
                                                            <a href="#">
                                                                Contrary to popular belief, Lorem Ipsum is not
                                                                simply random.
                                                            </a>
                                                        </h3>
                                                        <ul className="authar-info d-flex flex-wrap">
                                                            <li>
                                                                <i className="ti ti-timer" /> May 15, 2016
                                                            </li>
                                                            <li>
                                                                <a href="#" className="link">
                                                                    <i className="ti ti-thumb-up" />
                                                                    15 likes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="col-md-6 col-p">
                                                <article>
                                                    <figure>
                                                        <a href="">
                                                            <img
                                                                src="https://www.newsday.com/_next/image?url=https%3A%2F%2Fcdn.newsday.com%2Fimage-service%2Fversion%2Fc%3AZGVkM2M4YmUtMzgzZS00%3AZTJiMTgxNGUtNDlmNC00%2Fmls-new-england-miami-soccer.jpeg%3Ff%3DLandscape%2B16%253A9%26w%3D770%26q%3D1&w=1920&q=80"
                                                                height={242}
                                                                width={345}
                                                                alt=""
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                        <span className="post-category">Business</span>
                                                    </figure>
                                                    <div className="post-info">
                                                        <h3>
                                                            <a href="#">
                                                                There are many variations of passages of Lorem Ipsum
                                                            </a>
                                                        </h3>
                                                        <ul className="authar-info d-flex flex-wrap">
                                                            <li>
                                                                <i className="ti ti-timer" /> May 15, 2016
                                                            </li>
                                                            <li>
                                                                <a href="#" className="link">
                                                                    <i className="ti ti-thumb-up" />
                                                                    15 likes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="col-md-6 col-p">
                                                <article>
                                                    <figure>
                                                        <a href="">
                                                            <img
                                                                src="https://a.espncdn.com/media/motion/2025/0616/dm_250616_COM_SOC_News_Messi_and_Inter_Miami_gear_up_for_second_Club_World_Cup_clash__20250616_GLOBAL/dm_250616_COM_SOC_News_Messi_and_Inter_Miami_gear_up_for_second_Club_World_Cup_clash__20250616_GLOBAL.jpg"
                                                                height={242}
                                                                width={345}
                                                                alt=""
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                        <span className="post-category">Business</span>
                                                    </figure>
                                                    <div className="post-info">
                                                        <h3>
                                                            <a href="#">
                                                                Lorem Ipsum is simply dummy text of the printing and{" "}
                                                            </a>
                                                        </h3>
                                                        <ul className="authar-info d-flex flex-wrap">
                                                            <li>
                                                                <i className="ti ti-timer" /> May 15, 2016
                                                            </li>
                                                            <li>
                                                                <a href="#" className="link">
                                                                    <i className="ti ti-thumb-up" />
                                                                    15 likes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="col-md-6 col-p">
                                                <article>
                                                    <figure>
                                                        <a href="">
                                                            <img
                                                                src="https://media.lacapital.com.ar/p/10da0e304148e3827e0b9638292a9cb1/adjuntos/203/imagenes/100/905/0100905318/642x0/smart/messi-spidermanjpg.jpg"
                                                                height={242}
                                                                width={345}
                                                                alt=""
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                        <span className="post-category">Business</span>
                                                    </figure>
                                                    <div className="post-info">
                                                        <h3>
                                                            <a href="#">
                                                                The standard chunk of Lorem Ipsum used since{" "}

                                                            </a>
                                                        </h3>
                                                        <ul className="authar-info d-flex flex-wrap">
                                                            <li>
                                                                <i className="ti ti-timer" /> May 15, 2016
                                                            </li>
                                                            <li>
                                                                <a href="#" className="link">
                                                                    <i className="ti ti-thumb-up" />
                                                                    15 Likes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="col-md-6 col-p">
                                                <article>
                                                    <figure>
                                                        <a href="">
                                                            <img
                                                                src="https://lh3.googleusercontent.com/VaEKiodMLtxiriZh9uFG9ywe55Y2aEFUM7x_kobBwqz2CsP3wqN99UGY19PTr59U_S37gjboqoAwRHlJZyXlhrXuuNSlUYj_esU=s750"
                                                                height={242}
                                                                width={345}
                                                                alt=""
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                        <span className="post-category">Business</span>
                                                    </figure>
                                                    <div className="post-info">
                                                        <h3>
                                                            <a href="#">
                                                                The point of using Lorem Ipsum is that it has  
                                                            </a>
                                                        </h3>
                                                        <ul className="authar-info d-flex flex-wrap">
                                                            <li>
                                                                <i className="ti ti-timer" /> May 15, 2016
                                                            </li>
                                                            <li>
                                                                <a href="#" className="link">
                                                                    <i className="ti ti-thumb-up" />
                                                                    15 likes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="col-md-6 col-p">
                                                <article>
                                                    <figure>
                                                        <a href="">
                                                            <img
                                                                src="https://static.footballtransfers.com/images/cn/image/upload/q_75,w_1200/footballcritic/rekmahagic31ao5ex1tc.webp"
                                                                height={242}
                                                                width={345}
                                                                alt=""
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                        <span className="post-category">Business</span>
                                                    </figure>
                                                    <div className="post-info">
                                                        <h3>
                                                            <a href="#">
                                                                Various versions have evolved over the years,
                                                                sometimes
                                                            </a>
                                                        </h3>
                                                        <ul className="authar-info d-flex flex-wrap">
                                                            <li>
                                                                <i className="ti ti-timer" /> May 15, 2016
                                                            </li>
                                                            <li>
                                                                <a href="#" className="link">
                                                                    <i className="ti ti-thumb-up" />
                                                                    15 likes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="col-md-6 col-p">
                                                <article>
                                                    <figure>
                                                        <a href="">
                                                            <img
                                                                src="https://vcdn1-english.vnecdn.net/2024/02/26/messijpeg170892285031611708922-8307-7793-1708931677.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=sDu5I8r2h1uMAxjRQuhs6Q"
                                                                height={242}
                                                                width={345}
                                                                alt=""
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                        <span className="post-category">Business</span>
                                                    </figure>
                                                    <div className="post-info">
                                                        <h3>
                                                            <a href="#">
                                                                f you are going to use a passage of Lorem Ipsum, you
                                                                need to be
                                                            </a>
                                                        </h3>
                                                        <ul className="authar-info d-flex flex-wrap">
                                                            <li>
                                                                <i className="ti ti-timer" /> May 15, 2016
                                                            </li>
                                                            <li>
                                                                <a href="#" className="link">
                                                                    <i className="ti ti-thumb-up" />
                                                                    15 likes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="col-md-6 col-p">
                                                <article>
                                                    <figure>
                                                        <a href="">
                                                            <img
                                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURM4YlU2IIEN7erUaZ7iIQ2SQhZQIvNvOFT_ovixDiDxELDJJfOoCbVOMO6zkmPIVq3s&usqp=CAU"
                                                                height={242}
                                                                width={345}
                                                                alt=""
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                        <span className="post-category">Business</span>
                                                    </figure>
                                                    <div className="post-info">
                                                        <h3>
                                                            <a href="#">
                                                                Fusce ac orci sagittis mattis magna ultrices libero
                                                            </a>
                                                        </h3>
                                                        <ul className="authar-info d-flex flex-wrap">
                                                            <li>
                                                                <i className="ti ti-timer" /> May 15, 2016
                                                            </li>
                                                            <li>
                                                                <a href="#" className="link">
                                                                    <i className="ti ti-thumb-up" />
                                                                    15 likes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="col-md-6 col-p">
                                                <article>
                                                    <figure>
                                                        <a href="">
                                                            <img
                                                                src="https://www.dispatch.com/gcdn/authoring/authoring-images/2024/10/03/NCOD/75491969007-crew-1002-miami-ac-051.JPG?crop=4499,2531,x0,y0&width=660&height=372&format=pjpg&auto=webp"
                                                                height={242}
                                                                width={345}
                                                                alt=""
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                        <span className="post-category">Business</span>
                                                    </figure>
                                                    <div className="post-info">
                                                        <h3>
                                                            <a href="#">
                                                                Fusce ac orci sagittis mattis magna ultrices libero
                                                            </a>
                                                        </h3>
                                                        <ul className="authar-info d-flex flex-wrap">
                                                            <li>
                                                                <i className="ti ti-timer" /> May 15, 2016
                                                            </li>
                                                            <li>
                                                                <a href="#" className="link">
                                                                    <i className="ti ti-thumb-up" />
                                                                    15 likes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Post footer */}
                                    <div className="post-footer">
                                        <div className="row thm-margin">
                                            <div className="col-xs-12 col-sm-12 col-md-12 thm-padding">
                                                {/* pagination */}
                                                <ul className="pagination">
                                                    <li className="disabled">
                                                        <span className="ti ti-angle-left" />
                                                    </li>
                                                    <li className="active">
                                                        <span>1</span>
                                                    </li>
                                                    <li>
                                                        <a href="#">2</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">3</a>
                                                    </li>
                                                    <li className="disabled">
                                                        <span className="extend">...</span>
                                                    </li>
                                                    <li></li>
                                                    <li>
                                                        <a href="#">12</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="ti ti-angle-right" />
                                                        </a>
                                                    </li>
                                                </ul>{" "}
                                                {/* /.pagination */}
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* /.Post footer*/}
                                </div>
                            </StickyBox>
                        </div>
                        {/* END OF /. MAIN CONTENT */}
                        {/* START SIDE CONTENT */}
                        <div className="col-sm-5 col-md-4 col-p rightSidebar">
                            <StickyBox>
                                {/* START SOCIAL COUNTER TEXT */}
                                <div className="align-items-center d-flex fs-6 justify-content-center mb-1 text-center social-counter-total">
                                    <i className="fa-solid fa-heart text-primary me-1" /> Join{" "}
                                    <span className="fw-bold mx-1">2.5M</span> Followers
                                </div>
                                {/* END OF /. SOCIAL COUNTER TEXT */}
                                {/* START SOCIAL ICON */}
                                <div className="social-media-inner mb-2">
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
                                    {/* /.social icon */}
                                </div>
                                {/* END OF /. SOCIAL ICON */}
                                {/* START ADVERTISEMENT */}
                                <div className="add-inner">
                                    <img
                                        src="assets/images/add320x270-1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                {/* END OF /. ADVERTISEMENT */}
                                {/* START NAV TABS */}
                                <div className="tabs-wrapper">
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
                                                                BCCI asks ECB to bear expenses of team's India tour
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
                                                            It is a long established fact that a reader will be
                                                            distracted by{" "}
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
                                                            It is a long established fact that a reader will be
                                                            distracted by{" "}
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
                                                            It is a long established fact that a reader will be
                                                            distracted by{" "}
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
                                </div>
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