-- Fusion Mart 2.O relational schema (reference)

CREATE TABLE users (
  id BIGINT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(140) NOT NULL,
  role VARCHAR(20) NOT NULL,
  password_hash VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sellers (
  id BIGINT PRIMARY KEY,
  owner_user_id BIGINT NOT NULL REFERENCES users(id),
  store_name VARCHAR(160) NOT NULL,
  status VARCHAR(20) NOT NULL,
  commission_pct NUMERIC(5,2) NOT NULL DEFAULT 12.00,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  id BIGINT PRIMARY KEY,
  seller_id BIGINT REFERENCES sellers(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100) NOT NULL,
  price NUMERIC(12,2) NOT NULL,
  stock INT NOT NULL DEFAULT 0,
  image_url TEXT,
  rating NUMERIC(3,2) DEFAULT 0,
  reviews_count INT DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product_tags (
  product_id BIGINT NOT NULL REFERENCES products(id),
  tag VARCHAR(80) NOT NULL,
  PRIMARY KEY (product_id, tag)
);

CREATE TABLE orders (
  id BIGINT PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id),
  status VARCHAR(30) NOT NULL,
  total_amount NUMERIC(12,2) NOT NULL,
  payment_status VARCHAR(20) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
  id BIGINT PRIMARY KEY,
  order_id BIGINT NOT NULL REFERENCES orders(id),
  product_id BIGINT NOT NULL REFERENCES products(id),
  seller_id BIGINT REFERENCES sellers(id),
  qty INT NOT NULL,
  unit_price NUMERIC(12,2) NOT NULL
);

CREATE TABLE payments (
  id BIGINT PRIMARY KEY,
  order_id BIGINT NOT NULL REFERENCES orders(id),
  gateway VARCHAR(50) NOT NULL,
  txn_ref VARCHAR(120),
  amount NUMERIC(12,2) NOT NULL,
  status VARCHAR(20) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE returns_refunds (
  id BIGINT PRIMARY KEY,
  order_id BIGINT NOT NULL REFERENCES orders(id),
  user_id BIGINT NOT NULL REFERENCES users(id),
  reason TEXT,
  status VARCHAR(20) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_price ON products(price);
CREATE INDEX idx_orders_user_created_at ON orders(user_id, created_at DESC);
CREATE INDEX idx_order_items_product ON order_items(product_id);
CREATE INDEX idx_payments_order ON payments(order_id);
CREATE INDEX idx_returns_order ON returns_refunds(order_id);
