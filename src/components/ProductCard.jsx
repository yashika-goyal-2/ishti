import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <button className="wishlist-btn">
          <Heart size={20} />
        </button>
        <div className="overlay">
          <button className="add-to-cart-btn">
            <ShoppingCart size={18} /> Add
          </button>
          <button className="quick-view-btn">
            Quick View
          </button>
        </div>
      </div>
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              fill={i < product.rating ? "#FFD700" : "none"}
              color={i < product.rating ? "#FFD700" : "#ccc"}
            />
          ))}
          <span>({product.reviews})</span>
        </div>
        <div className="product-price">
          <span className="current-price">₹{product.price}</span>
          {product.originalPrice && (
            <span className="original-price">₹{product.originalPrice}</span>
          )}
          {product.discount && (
            <span className="discount">{product.discount}% OFF</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
