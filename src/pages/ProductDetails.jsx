import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/mockData';
import { Star, Minus, Plus, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div className="container loading">Loading...</div>;
  }

  const handleQuantityChange = (type) => {
    if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'increase') {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    alert('Added to cart!');
  };

  return (
    <div className="container product-details-page">
      <div className="product-details-grid">
        {/* Gallery */}
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="thumbnails">
            <img src={product.image} alt="Thumbnail 1" className="active" />
            <img src={product.image} alt="Thumbnail 2" />
            <img src={product.image} alt="Thumbnail 3" />
          </div>
        </div>

        {/* Info */}
        <div className="product-info-section">
          <div className="product-header">
            <span className="category-tag">{product.category}</span>
            <h1>{product.name}</h1>
            <div className="rating-container">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < product.rating ? "#FFD700" : "none"}
                    color={i < product.rating ? "#FFD700" : "#ccc"}
                  />
                ))}
              </div>
              <span className="review-count">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="price-section">
            <span className="current-price">₹{product.price}</span>
            <span className="original-price">₹{product.originalPrice}</span>
            <span className="discount-badge">{product.discount}% OFF</span>
          </div>

          <p className="description">{product.description}</p>

          <div className="options-section">
            <div className="size-selector">
              <h3>Select Size</h3>
              <div className="sizes">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-selector">
              <h3>Quantity</h3>
              <div className="qty-controls">
                <button onClick={() => handleQuantityChange('decrease')}><Minus size={16} /></button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange('increase')}><Plus size={16} /></button>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn btn-primary add-cart-btn" onClick={handleAddToCart}>
              <ShoppingCart size={20} /> Add to Cart
            </button>
            <button className="btn btn-outline wishlist-action-btn">
              <Heart size={20} /> Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="review-list">
          <div className="review-item">
            <div className="review-header">
              <span className="reviewer-name">John Doe</span>
              <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < 4 ? "#FFD700" : "none"} color={i < 4 ? "#FFD700" : "#ccc"} />
                ))}
              </div>
            </div>
            <p>Great product! Fits perfectly and the material is really good.</p>
          </div>
          {/* Add more dummy reviews if needed */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
