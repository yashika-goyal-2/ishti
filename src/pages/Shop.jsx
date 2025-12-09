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

  useEffect(() => {
    let result = products;

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    result = result.filter(p => p.price <= priceRange);

    setFilteredProducts(result);
  }, [selectedCategory, priceRange]);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  return (
    <div className="container shop-page">
      <div className="shop-header">
        <h1>Shop</h1>
        <button className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
          <Filter size={20} /> Filters
        </button>
      </div>

      <div className="shop-content">
        {/* Sidebar Filters */}
        <aside className={`shop-sidebar ${showFilters ? 'active' : ''}`}>
          <div className="filter-group">
            <h3>Categories</h3>
            <ul>
              <li>
                <button 
                  className={selectedCategory === 'All' ? 'active' : ''} 
                  onClick={() => setSelectedCategory('All')}
                >
                  All
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat.id}>
                  <button 
                    className={selectedCategory.toLowerCase() === cat.slug ? 'active' : ''} 
                    onClick={() => setSelectedCategory(cat.slug)}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <h3>Price Range</h3>
            <div className="price-slider">
              <input 
                type="range" 
                min="0" 
                max="5000" 
                step="100" 
                value={priceRange} 
                onChange={(e) => setPriceRange(Number(e.target.value))} 
              />
              <div className="price-labels">
                <span>₹0</span>
                <span>₹{priceRange}</span>
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
              <p>No products found matching your criteria.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
