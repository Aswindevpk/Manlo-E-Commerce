CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) DEFAULT gen_random_uuid(),
  username TEXT,
  role TEXT DEFAULT 'user',
  email TEXT NOT NULL
  is_blocked BOOLEAN DEFAULT FALSE,
);

--addresses
CREATE TABLE addresses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  line1 TEXT NOT NULL,
  line2 TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  pincode TEXT NOT NULL
);

--brands
CREATE TABLE brands (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE
);

--categories
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  image TEXT NOT NULL,
  parent_id UUID REFERENCES categories(id) ON DELETE CASCADE, -- Self-referencing for subcategories
  slug TEXT NOT NULL UNIQUE,
  CHECK (id != parent_id)
);

--products
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  brand_id UUID  REFERENCES brands(id) ON DELETE CASCADE,
  price DECIMAL(10,2) NOT NULL,
  care_instruction TEXT,
  is_new BOOLEAN DEFAULT FALSE
);

--colors
CREATE TABLE colors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    hex_code TEXT NOT NULL
);

--product_variants (for color specific product)
CREATE TABLE product_variants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  color_id UUID NOT NULL REFERENCES colors(id) ON DELETE CASCADE,
  sku TEXT NOT NULL,
  slug NOT NULL VARCHAR(255) UNIQUE,
  name TEXT,
  UNIQUE (product_id, color_id),
  UNIQUE (sku)
);

CREATE TABLE product_variant_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  variant_id UUID NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL
);

CREATE TABLE sizes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  UNIQUE (name, category_id) 
);

--product_units (for sizes of variants)
CREATE TABLE product_units (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  variant_id UUID NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  size_id UUID NOT NULL REFERENCES sizes(id) ON DELETE CASCADE,
  stock_quantity INT DEFAULT 0,
  UNIQUE (variant_id, size_id)  
);

CREATE TABLE wishlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_unit_id UUID NOT NULL REFERENCES product_units(id) ON DELETE CASCADE,
  added_at TIMESTAMP DEFAULT now(),
  UNIQUE (user_id, product_unit_id)
);

-- Carts Table (Each user has a cart)
CREATE TABLE carts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,  
  created_at TIMESTAMP DEFAULT NOW(),
  product_unit_id UUID NOT NULL REFERENCES product_units(id) ON DELETE CASCADE,  
  quantity INT CHECK (quantity > 0) DEFAULT 1, 
  added_at TIMESTAMP DEFAULT NOW(),
  UNIQUE (user_id, product_unit_id)
);

CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_unit_id UUID NOT NULL REFERENCES product_units(id) ON DELETE CASCADE,
  address_id UUID NOT NULL REFERENCES addresses(id) ON DELETE CASCADE,
  quantity INT NOT NULL CHECK (quantity > 0),
  order_number VARCHAR(100) NOT NULL UNIQUE,
  price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
  shipping_status VARCHAR(20) DEFAULT 'processing', -- processing, shipped, delivered, cancelled
  estimated_delivery TIMESTAMP, -- Expected delivery date
  tracking_number VARCHAR(100) UNIQUE, -- Tracking number for shipment
  payment_status VARCHAR(20) DEFAULT 'unpaid', -- unpaid, paid, refunded
  created_at TIMESTAMP DEFAULT now()
);


CREATE TABLE reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_variant_id UUID NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  rating INT CHECK (rating BETWEEN 1 AND 5) NOT NULL, -- 1 to 5 stars
  review_text TEXT,
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(user_id, product_unit_id) -- Prevent multiple reviews for same product by same user
);