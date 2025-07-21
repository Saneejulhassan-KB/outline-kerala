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

  return (
    <>
      <ScrollToTopUI />

      {/* START FOOTER */}
      <footer className="main-footer position-relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        padding: '1.5rem 0 1rem 0'
      }}>
        {/* Background Pattern */}
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
          <div style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            width: '100%',
            height: '100%'
          }}></div>
        </div>

        <div className="container position-relative z-1">
          <div className="row g-3">
            {/* Logo and Caption */}
            <div className="col-sm-6 col-lg-3 footer-box">
              <div className="text-center text-lg-start">
                <a href="/" className="footer-logo d-inline-block mb-2">
                  <div style={{
                    borderRadius: '10px',
                    padding: '8px',
                    display: 'inline-block',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    <img
                      src="/logo.jpeg"
                      alt="footer logo"
                      className="img-fluid rounded"
                      width={50}
                      height={50}
                      style={{ filter: 'brightness(1.1)' }}
                    />
                  </div>
                </a>
                <h4 className="text-white fw-bold mb-2" style={{ fontSize: '1.2rem' }}>
                  Outline Kerala
                </h4>
                <p className="text-white-50 mb-2" style={{ lineHeight: '1.4', fontSize: '0.9rem' }}>
                  Your Voice, Your News
                </p>
                <p className="text-white-50 small" style={{ lineHeight: '1.3', fontSize: '0.8rem' }}>
                  Delivering timely and trusted news stories from Kerala and beyond, keeping you informed with the latest updates and breaking news.
                </p>
              </div>
            </div>

            {/* Categories */}
            <div className="col-sm-6 col-lg-3 footer-box">
              <h5 className="text-white fw-bold mb-3" style={{ 
                fontSize: '1rem',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                Categories
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '30px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #ff6b6b, #ffa500)',
                  borderRadius: '2px'
                }}></div>
              </h5>
              <ul className="list-unstyled m-0">
                {categories.length > 0 ? (
                  categories.slice(0, 6).map((category, index) => (
                    <li key={category.id} className="mb-1">
                      <a 
                        href={`/category/${category.slug}`} 
                        className="text-white-50 text-decoration-none d-flex align-items-center"
                        style={{
                          transition: 'all 0.3s ease',
                          padding: '4px 0',
                          borderRadius: '6px',
                          paddingLeft: '8px',
                          fontSize: '0.85rem'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#ffffff';
                          e.target.style.background = 'rgba(255,255,255,0.1)';
                          e.target.style.transform = 'translateX(5px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = 'rgba(255,255,255,0.7)';
                          e.target.style.background = 'transparent';
                          e.target.style.transform = 'translateX(0)';
                        }}
                      >
                        <span style={{ 
                          width: '3px', 
                          height: '3px', 
                          background: '#ff6b6b', 
                          borderRadius: '50%', 
                          marginRight: '8px',
                          display: 'inline-block'
                        }}></span>
                        {category.slug.charAt(0).toUpperCase() + category.slug.slice(1)}
                      </a>
                    </li>
                  ))
                ) : (
                  <li className="text-white-50" style={{ fontSize: '0.85rem' }}>No categories found</li>
                )}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-sm-6 col-lg-3 footer-box">
              <h5 className="text-white fw-bold mb-3" style={{ 
                fontSize: '1rem',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                Quick Links
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '30px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #4ecdc4, #44a08d)',
                  borderRadius: '2px'
                }}></div>
              </h5>
              <ul className="list-unstyled m-0">
                {[
                  { name: 'Home', href: '/', icon: '🏠' },
                  { name: 'About Us', href: '/about', icon: 'ℹ️' },
                  { name: 'Contact', href: '/contact', icon: '📞' },
                  // { name: 'Privacy Policy', href: '/privacy', icon: '🔒' },
                  // { name: 'Terms of Service', href: '/terms', icon: '📋' }
                ].map((link, index) => (
                  <li key={index} className="mb-1">
                    <a 
                      href={link.href} 
                      className="text-white-50 text-decoration-none d-flex align-items-center"
                      style={{
                        transition: 'all 0.3s ease',
                        padding: '4px 0',
                        borderRadius: '6px',
                        paddingLeft: '8px',
                        fontSize: '0.85rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#ffffff';
                        e.target.style.background = 'rgba(255,255,255,0.1)';
                        e.target.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'rgba(255,255,255,0.7)';
                        e.target.style.background = 'transparent';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      <span style={{ marginRight: '8px', fontSize: '1rem' }}>{link.icon}</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="col-sm-6 col-lg-3 footer-box">
              <h5 className="text-white fw-bold mb-3" style={{ 
                fontSize: '1rem',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                Connect With Us
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '30px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  borderRadius: '2px'
                }}></div>
              </h5>
              
              
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <div style={{
                    width: '30px',
                    height: '30px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '8px'
                  }}>
                    <i className="fas fa-envelope text-white" style={{ fontSize: '0.8rem' }}></i>
                  </div>
                  <div>
                    <div className="text-white-50 small" style={{ fontSize: '0.75rem' }}>Email</div>
                    <div className="text-white" style={{ fontSize: '0.85rem' }}>info@outlinekerala.com</div>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-2">
                  <div style={{
                    width: '30px',
                    height: '30px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '8px'
                  }}>
                    <i className="fas fa-phone text-white" style={{ fontSize: '0.8rem' }}></i>
                  </div>
                  <div>
                    <div className="text-white-50 small" style={{ fontSize: '0.75rem' }}>Phone</div>
                    <div className="text-white" style={{ fontSize: '0.85rem' }}>+91 9999999999</div>
                  </div>
                </div>
              </div>

             
              {/* <div>
                <div className="text-white-50 mb-3">Follow Us</div>
                <div className="d-flex gap-2">
                  {[
                    { icon: 'fab fa-facebook-f', href: '#', color: '#1877f2' },
                    { icon: 'fab fa-twitter', href: '#', color: '#1da1f2' },
                    { icon: 'fab fa-instagram', href: '#', color: '#e4405f' },
                    { icon: 'fab fa-youtube', href: '#', color: '#ff0000' }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className="text-white text-decoration-none d-flex align-items-center justify-content-center"
                      style={{
                        width: '45px',
                        height: '45px',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '50%',
                        transition: 'all 0.3s ease',
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = social.color;
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.1)';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <i className={social.icon} style={{ fontSize: '1.1rem' }}></i>
                    </a>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </footer>

      {/* SUB FOOTER */}
      <div className="sub-footer" style={{
        background: 'linear-gradient(90deg, #0f1419 0%, #1a1f2e 100%)',
        padding: '0.75rem 0',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center text-md-start">
              <div className="text-white-50" style={{ fontSize: '0.85rem' }}>
                © 2025 <strong className="text-white">Outline Kerala</strong>. All rights reserved.
              </div>
            </div>
            
            <div className="col-md-4 text-center">
              <div className="text-white-50" style={{ fontSize: '0.85rem' }}>
                Design and Developed by <a href="https://rcubeventures.co.in/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none" style={{ fontWeight: 'bold' }}>Rcube Ventures & Infrastructure Pvt Ltd</a>
              </div>
            </div>

            <div className="col-md-4 text-center text-md-end">
              <ul className="list-inline m-0">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                  <li key={index} className="list-inline-item">
                    <a 
                      href="#" 
                      className="text-white-50 text-decoration-none"
                      style={{ 
                        fontSize: '0.8rem',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                    >
                      {item}
                    </a>
                    {index < 2 && <span className="text-white-50 mx-2">•</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
