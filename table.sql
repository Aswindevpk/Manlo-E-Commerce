
--users table references auth.users
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) DEFAULT gen_random_uuid(),
  username TEXT,
  role TEXT DEFAULT 'user',
  email TEXT NOT NULL
);



--addresses
CREATE TABLE addresses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT NOT NULL
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

INSERT INTO brands (name) VALUES 
('Nike'),
('Adidas'),
('Zara'),
('H&M');


--categories
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  image TEXT NOT NULL,
  parent_id UUID REFERENCES categories(id) ON DELETE CASCADE, -- Self-referencing for subcategories
  slug TEXT NOT NULL UNIQUE,
  CHECK (id != parent_id)
);

-- Parent categories (no parent_id)
INSERT INTO categories (name, image) VALUES
('TopWear', 'topwear.jpg'),
('BottomWear', 'bottomwear.jpg'),
('Accessories', 'accessories.jpg');

-- Subcategories for TopWear
INSERT INTO categories (name, image, parent_id)
SELECT 'Shirt', 'shirt.jpg', id FROM categories WHERE name = 'TopWear';

INSERT INTO categories (name, image, parent_id)
SELECT 'Hoodie', 'hoodie.jpg', id FROM categories WHERE name = 'TopWear';

-- Subcategories for BottomWear
INSERT INTO categories (name, image, parent_id)
SELECT 'Jeans', 'jeans.jpg', id FROM categories WHERE name = 'BottomWear';

INSERT INTO categories (name, image, parent_id)
SELECT 'Linen Pants', 'linen_pants.jpg', id FROM categories WHERE name = 'BottomWear';

-- Subcategories for Accessories
INSERT INTO categories (name, image, parent_id)
SELECT 'Shoes', 'shoes.jpg', id FROM categories WHERE name = 'Accessories';


--products
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  brand_id UUID  REFERENCES brands(id) ON DELETE CASCADE,
  price DECIMAL(10,2) NOT NULL,
  care_instruction TEXT
);

-- Example product under TopWear > Shirt
INSERT INTO products (name, description, category_id, brand_id, price, care_instruction)
SELECT
  'Slim Fit Cotton Shirt',
  'Breathable and stylish slim-fit cotton shirt for all seasons.',
  c.id,
  b.id,
  1999.99,
  'Machine wash cold. Do not bleach.'
FROM categories c
JOIN brands b ON b.name = 'Zara'
WHERE c.name = 'Shirt';

-- Another example: product under Accessories > Shoes
INSERT INTO products (name, description, category_id, brand_id, price, care_instruction)
SELECT
  'Running Shoes',
  'Lightweight and durable shoes for running and gym workouts.',
  c.id,
  b.id,
  3499.00,
  'Use a soft brush. Do not machine wash.'
FROM categories c
JOIN brands b ON b.name = 'Nike'
WHERE c.name = 'Shoes';




--colors
CREATE TABLE colors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    hex_code TEXT NOT NULL
);

INSERT INTO colors (name, hex_code) VALUES
('Black', '#000000'),
('White', '#FFFFFF'),
('Red', '#FF0000'),
('Blue', '#0000FF'),
('Green', '#008000'),
('Gray', '#808080'),
('Beige', '#F5F5DC'),
('Navy Blue', '#000080'),
('Brown', '#A52A2A'),
('Olive', '#808000');





--product_variants (for color specific product)
CREATE TABLE product_variants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  color_id UUID NOT NULL REFERENCES colors(id) ON DELETE CASCADE,
  sku TEXT NOT NULL,
  name TEXT,
  UNIQUE (product_id, color_id),
  UNIQUE (sku)
);

-- Black Running Shoes Variant
INSERT INTO product_variants (product_id, color_id, sku, name)
SELECT 
  p.id, 
  c.id, 
  'RS-BLK-001', 
  'Running Shoes - Black'
FROM products p, colors c
WHERE p.name = 'Running Shoes' AND c.name = 'Black';

-- White Running Shoes Variant
INSERT INTO product_variants (product_id, color_id, sku, name)
SELECT 
  p.id, 
  c.id, 
  'RS-WHT-001', 
  'Running Shoes - White'
FROM products p, colors c
WHERE p.name = 'Running Shoes' AND c.name = 'White';




CREATE TABLE product_variant_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  variant_id UUID NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL
);

-- Add two images for Running Shoes - Black variant
INSERT INTO product_variant_images (variant_id, image_url)
SELECT v.id, 'https://cdn.example.com/images/rs-black-front.jpg'
FROM product_variants v
WHERE v.name = 'Running Shoes - Black';

INSERT INTO product_variant_images (variant_id, image_url)
SELECT v.id, 'https://cdn.example.com/images/rs-black-side.jpg'
FROM product_variants v
WHERE v.name = 'Running Shoes - Black';




CREATE TABLE sizes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  UNIQUE (name, category_id) 
);

-- 👕 TopWear sizes: XS, S, M, L
INSERT INTO sizes (name, category_id)
SELECT 'XS', id FROM categories WHERE name = 'TopWear';

INSERT INTO sizes (name, category_id)
SELECT 'S', id FROM categories WHERE name = 'TopWear';

INSERT INTO sizes (name, category_id)
SELECT 'M', id FROM categories WHERE name = 'TopWear';

INSERT INTO sizes (name, category_id)
SELECT 'L', id FROM categories WHERE name = 'TopWear';

-- 👖 BottomWear sizes: 28, 30, 32, 34
INSERT INTO sizes (name, category_id)
SELECT '28', id FROM categories WHERE name = 'BottomWear';

INSERT INTO sizes (name, category_id)
SELECT '30', id FROM categories WHERE name = 'BottomWear';

INSERT INTO sizes (name, category_id)
SELECT '32', id FROM categories WHERE name = 'BottomWear';

INSERT INTO sizes (name, category_id)
SELECT '34', id FROM categories WHERE name = 'BottomWear';

-- 👟 Accessories sizes: 6, 7, 8, 9, 10 (for shoes, for example)
INSERT INTO sizes (name, category_id)
SELECT '6', id FROM categories WHERE name = 'Accessories';

INSERT INTO sizes (name, category_id)
SELECT '7', id FROM categories WHERE name = 'Accessories';

INSERT INTO sizes (name, category_id)
SELECT '8', id FROM categories WHERE name = 'Accessories';

INSERT INTO sizes (name, category_id)
SELECT '9', id FROM categories WHERE name = 'Accessories';

INSERT INTO sizes (name, category_id)
SELECT '10', id FROM categories WHERE name = 'Accessories';






--product_units (for sizes of variants)
CREATE TABLE product_units (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  variant_id UUID NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  size_id UUID NOT NULL REFERENCES sizes(id) ON DELETE CASCADE,
  stock_quantity INT DEFAULT 0,
  UNIQUE (variant_id, size_id)  
);

-- Example: Add stock for RS-BLK-001 in sizes 6, 7, 8
INSERT INTO product_units (variant_id, size_id, stock_quantity)
SELECT v.id, s.id, 15
FROM product_variants v, sizes s
WHERE v.sku = 'RS-BLK-001' AND s.name = '6';

INSERT INTO product_units (variant_id, size_id, stock_quantity)
SELECT v.id, s.id, 10
FROM product_variants v, sizes s
WHERE v.sku = 'RS-BLK-001' AND s.name = '7';

INSERT INTO product_units (variant_id, size_id, stock_quantity)
SELECT v.id, s.id, 5
FROM product_variants v, sizes s
WHERE v.sku = 'RS-BLK-001' AND s.name = '8';



CREATE TABLE wishlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_unit_id UUID NOT NULL REFERENCES product_units(id) ON DELETE CASCADE,
  added_at TIMESTAMP DEFAULT now(),
  UNIQUE (user_id, product_unit_id)
);

-- User adds Running Shoes (Black, Size 8) to wishlist
INSERT INTO wishlist (user_id, product_unit_id)
SELECT u.id, pu.id
FROM users u, product_units pu
JOIN product_variants pv ON pu.variant_id = pv.id
JOIN sizes s ON pu.size_id = s.id
WHERE u.email = 'test@example.com'
  AND pv.sku = 'RS-BLK-001'
  AND s.name = '8';



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

INSERT INTO carts (user_id, product_unit_id, quantity)
SELECT u.id, pu.id, 2
FROM users u
JOIN product_units pu ON TRUE
JOIN product_variants pv ON pu.variant_id = pv.id
JOIN sizes s ON pu.size_id = s.id
WHERE u.email = 'test@example.com'
  AND pv.sku = 'RS-BLK-001'
    AND s.name = '7';
    


CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_unit_id UUID NOT NULL REFERENCES product_units(id) ON DELETE CASCADE,
  address_id UUID NOT NULL REFERENCES addresses(id) ON DELETE CASCADE,
  quantity INT NOT NULL CHECK (quantity > 0),
  price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
  shipping_status VARCHAR(20) DEFAULT 'processing', -- processing, shipped, delivered, cancelled
  estimated_delivery TIMESTAMP, -- Expected delivery date
  tracking_number VARCHAR(100) UNIQUE, -- Tracking number for shipment
  payment_status VARCHAR(20) DEFAULT 'unpaid', -- unpaid, paid, refunded
  created_at TIMESTAMP DEFAULT now()
);


INSERT INTO orders (
  user_id, product_unit_id, address_id, quantity, price, shipping_status, estimated_delivery, tracking_number, payment_status
)
SELECT 
  u.id,
  pu.id,
  a.id,
  2,
  3499.00 * 2,
  'processing',
  now() + interval '5 days',
  'TRK-001-XYZ',
  'paid'
FROM users u
JOIN product_units pu ON TRUE
JOIN product_variants pv ON pu.variant_id = pv.id
JOIN sizes s ON pu.size_id = s.id
JOIN addresses a ON a.user_id = u.id
WHERE u.email = 'test@example.com'
  AND pv.sku = 'RS-BLK-001'
  AND s.name = '7'
LIMIT 1;





CREATE TABLE reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_unit_id UUID NOT NULL REFERENCES product_units(id) ON DELETE CASCADE,
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  rating INT CHECK (rating BETWEEN 1 AND 5) NOT NULL, -- 1 to 5 stars
  review_text TEXT,
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(user_id, product_unit_id) -- Prevent multiple reviews for same product by same user
);


INSERT INTO reviews (
  user_id, product_unit_id, order_id, rating, review_text
)
SELECT 
  u.id,
  pu.id,
  o.id,
  5,
  'These running shoes are super comfortable and lightweight. Loved the design too!'
FROM users u
JOIN orders o ON o.user_id = u.id
JOIN product_units pu ON o.product_unit_id = pu.id
JOIN product_variants pv ON pu.variant_id = pv.id
JOIN sizes s ON pu.size_id = s.id
WHERE u.email = 'test@example.com'
  AND pv.sku = 'RS-BLK-001'
  AND s.name = '7'
LIMIT 1;
