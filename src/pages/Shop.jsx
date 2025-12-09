import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/mockData';
import { Filter } from 'lucide-react';
import './Shop.css';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [priceRange, setPriceRange] = useState(5000);
  const [showFilters, setShowFilters] = useState(false);
  const [expandedSection, setExpandedSection] = useState('men'); // 'men' or 'women' or null

  // Detailed styling structure
  const shopCategories = {
    men: {
      title: "Men's Fashion",
      items: ["T-Shirts", "Shirts", "Jeans", "Trousers", "Shoes", "Watches"]
    },
    women: {
      title: "Women's Fashion",
      items: ["Dresses", "Tops", "Kurtas", "Sarees", "Jeans", "Heels", "Handbags"]
    }
  };

  useEffect(() => {
    let result = products;

    if (selectedCategory !== 'All') {
      // Simple prefix match or exact match logic
      result = result.filter(p => 
        p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || 
        selectedCategory.toLowerCase().includes(p.category.toLowerCase())
      );
    }

    result = result.filter(p => p.price <= priceRange);

    setFilteredProducts(result);
  }, [selectedCategory, priceRange]);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="container shop-page">
      <div className="shop-header">
        <h1>Shop Collections</h1>
        <button className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
          <Filter size={20} /> Filters
        </button>
      </div>

      <div className="shop-content">
        {/* Sidebar Filters */}
        <aside className={`shop-sidebar ${showFilters ? 'active' : ''}`}>
          
          <div className="sidebar-section">
             <h3 className="sidebar-title">Categories</h3>
             
             {/* All Products Option */}
             <div className="category-item-all">
                <button 
                  className={selectedCategory === 'All' ? 'active' : ''} 
                  onClick={() => setSelectedCategory('All')}
                >
                  View All
                </button>
             </div>

             {/* Men Section */}
             <div className="category-group">
                <button className="category-header" onClick={() => toggleSection('men')}>
                  <span>Men</span>
                  <span>{expandedSection === 'men' ? '−' : '+'}</span>
                </button>
                
                <div className={`category-list ${expandedSection === 'men' ? 'expanded' : ''}`}>
                  {shopCategories.men.items.map(item => (
                    <button 
                      key={item}
                      className={`category-subitem ${selectedCategory === item ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
             </div>

             {/* Women Section */}
             <div className="category-group">
                <button className="category-header" onClick={() => toggleSection('women')}>
                  <span>Women</span>
                  <span>{expandedSection === 'women' ? '−' : '+'}</span>
                </button>
                
                <div className={`category-list ${expandedSection === 'women' ? 'expanded' : ''}`}>
                  {shopCategories.women.items.map(item => (
                    <button 
                      key={item}
                      className={`category-subitem ${selectedCategory === item ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
             </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">Price Range</h3>
            <div className="price-filter-container">
              <div className="price-info">
                 <span className="price-label">Max Price:</span>
                 <span className="price-value">₹{priceRange}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="5000" 
                step="100" 
                value={priceRange} 
                className="price-slider-range"
                onChange={(e) => setPriceRange(Number(e.target.value))} 
              />
              <div className="price-min-max">
                <span>₹0</span>
                <span>₹5000</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="shop-grid">
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <div className="no-products-content">
                <p>No products found in this category.</p>
                <button onClick={() => setSelectedCategory('All')} className="reset-btn">
                  View All Products
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
