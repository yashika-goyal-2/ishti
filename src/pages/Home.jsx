import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/mockData';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import './Home.css';

const Home = () => {
  const bestSellers = products.slice(0, 4);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      {/* Immersive Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} /> New Collection 2025
          </div>
          <h1 className="glitch-text" data-text="FUTURE FASHION">FUTURE FASHION</h1>
          <p className="hero-subtitle">Redefine your style with our exclusive urban collection.</p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn btn-primary hero-btn">
              Shop Now <ArrowRight size={20} />
            </Link>
            <Link to="/shop?category=new" className="btn btn-outline hero-btn-outline">
              View Lookbook
            </Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Marquee Text */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>STREETWEAR</span>
          <span className="separator">•</span>
          <span>AESTHETIC</span>
          <span className="separator">•</span>
          <span>URBAN</span>
          <span className="separator">•</span>
          <span>TRENDY</span>
          <span className="separator">•</span>
          <span>LIMITED</span>
          <span className="separator">•</span>
          <span>STREETWEAR</span>
          <span className="separator">•</span>
          <span>AESTHETIC</span>
          <span className="separator">•</span>
          <span>URBAN</span>
          <span className="separator">•</span>
          <span>TRENDY</span>
          <span className="separator">•</span>
          <span>LIMITED</span>
        </div>
      </div>

      {/* Bento Grid Categories */}
      <section className="section categories-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Shop by <span className="highlight">Vibe</span></h2>
            <p className="section-desc">Curated collections for every mood.</p>
          </div>
          
          <div className="bento-grid">
            {categories.map((cat, index) => (
              <Link 
                to={`/shop?category=${cat.slug}`} 
                key={cat.id} 
                className={`bento-item item-${index + 1}`}
              >
                <img src={cat.image} alt={cat.name} />
                <div className="bento-overlay">
                  <h3>{cat.name}</h3>
                  <span className="explore-link">Explore <ArrowRight size={16} /></span>
                </div>
              </Link>
            ))}
            <div className="bento-item item-promo">
              <div className="promo-content">
                <Zap size={40} className="promo-icon" />
                <h3>Flash Sale</h3>
                <p>Up to 50% off on selected items</p>
                <Link to="/shop" className="btn-text">Grab it now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section className="section quote-section animate-on-scroll">
        <div className="container">
          <div className="quote-content">
            <h2>"Fashion is the armor to survive the reality of everyday life."</h2>
            <p>- Bill Cunningham</p>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="section best-sellers-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trending <span className="highlight">Now</span></h2>
            <Link to="/shop" className="view-all-link">View All <ArrowRight size={16} /></Link>
          </div>
          <div className="products-grid">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="features-banner animate-on-scroll">
        <div className="container features-grid">
          <div className="feature-item">
            <TrendingUp size={32} />
            <h3>Latest Trends</h3>
            <p>Updated daily with new styles</p>
          </div>
          <div className="feature-item">
            <Zap size={32} />
            <h3>Fast Shipping</h3>
            <p>Express delivery nationwide</p>
          </div>
          <div className="feature-item">
            <Sparkles size={32} />
            <h3>Premium Quality</h3>
            <p>Handpicked materials only</p>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="section brands-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Trusted <span className="highlight">Brands</span></h2>
          <div className="brands-grid">
            {['Nike', 'Adidas', 'Puma', 'Zara', 'H&M', 'Gucci'].map((brand, i) => (
              <div key={i} className="brand-item">
                <h3>{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section newsletter-section animate-on-scroll">
        <div className="container newsletter-container">
          <h2>Join the <span className="highlight">Movement</span></h2>
          <p>Get exclusive access to drops and discounts.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
