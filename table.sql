--users table references auth.users
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) DEFAULT gen_random_uuid(),
  username TEXT,
  role TEXT DEFAULT 'user',
  email TEXT NOT NULL
  is_blocked BOOLEAN DEFAULT FALSE,
);

-- database function 

-- create user from the authentication users will automatically creates
-- use below emails 
-- test@example.com
-- test1@example.com
-- admin@example.com  -- after creation change the role to admin


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

INSERT INTO addresses (
  user_id, first_name, last_name, phone, line1, line2, city, state, pincode
)
SELECT
  id,
  'John',
  'Doe',
  '9876543210',
  '123 Main Street',
  'Near School',
  'Mumbai',
  'Maharashtra',
  '400001'
FROM users
WHERE email = 'test@example.com';


INSERT INTO addresses (
  user_id, first_name, last_name, phone, line1, line2, city, state, pincode
)
SELECT
  id,
  'Jane',
  'Smith',
  '9876543211',
  '456 Park Avenue',
  NULL,
  'Delhi',
  'Delhi',
  '110001'
FROM users
WHERE email = 'test1@example.com';



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
INSERT INTO categories (name, image, slug) VALUES
('TopWear', '/categories/topwear.webp','topwear'),
('BottomWear', '/categories/bottomwear.webp','bottomwear'),
('Accessories', '/categories/accessories.webp','accessories');

-- Subcategories for TopWear
INSERT INTO categories (name, image,slug, parent_id)
SELECT 'Shirt', '/categories/shirt.webp', 'shirt', id FROM categories WHERE name = 'TopWear';

INSERT INTO categories (name, image,slug, parent_id)
SELECT 'Hoodie', '/categories/hoodie.webp','hoodies', id FROM categories WHERE name = 'TopWear';

-- Subcategories for BottomWear
INSERT INTO categories (name, image,slug, parent_id)
SELECT 'Jeans', '/categories/jeans.webp', 'jeans', id FROM categories WHERE name = 'BottomWear';

INSERT INTO categories (name, image,slug, parent_id)
SELECT 'Linen Pants', '/categories/linen-pants.webp','linen-pants', id FROM categories WHERE name = 'BottomWear';

-- Subcategories for Accessories
INSERT INTO categories (name, image,slug, parent_id)
SELECT 'Shoes', '/categories/shoes.webp','shoes' id FROM categories WHERE name = 'Accessories';




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

-- Example product under TopWear > Shirt
INSERT INTO products (name, description, category_id, brand_id, price, care_instruction)
SELECT
  'Slim Fit Cotton Shirt',
  'Breathable and stylish slim-fit cotton shirt for all seasons.',
  c.id,
  b.id,
  1999.00,
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

-- Hoodie 
INSERT INTO products (name, description, category_id, brand_id, price, care_instruction)
SELECT
  'Oversized Graphic Hoodie',
  'Cozy oversized hoodie with front pocket and bold graphic print.',
  c.id,
  b.id,
  2799.00,
  'Wash inside out with like colors.'
FROM categories c
JOIN brands b ON b.name = 'H&M'
WHERE c.name = 'Hoodie';


INSERT INTO products (name, description, category_id, brand_id, price, care_instruction)
SELECT
  'Stretch Slim Jeans',
  'Slim fit stretchable jeans perfect for daily wear.',
  c.id,
  b.id,
  2299.00,
  'Wash dark colors separately. Do not bleach.'
FROM categories c
JOIN brands b ON b.name = 'H&M'
WHERE c.name = 'Jeans';

INSERT INTO products (name, description, category_id, brand_id, price, care_instruction)
SELECT
  'Linen Pants',
  'Lightweight breathable linen pants perfect for summer days.',
  c.id,
  b.id,
  1899.00,
  'Hand wash recommended. Iron at low heat.'
FROM categories c
JOIN brands b ON b.name = 'Zara'
WHERE c.name = 'Linen Pants';


INSERT INTO products (name, description, category_id, brand_id, price, care_instruction)
SELECT
  'Leather Chelsea Boots',
  'Classic ankle-length leather boots with side elastic panels.',
  c.id,
  b.id,
  4999.00,
  'Use leather conditioner. Avoid water exposure.'
FROM categories c
JOIN brands b ON b.name = 'H&M'
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
  slug NOT NULL VARCHAR(255) UNIQUE,
  name TEXT,
  UNIQUE (product_id, color_id),
  UNIQUE (sku)
);

-- Running Shoes: Black, White
INSERT INTO product_variants (product_id, color_id, sku, name)
SELECT 
  p.id, c.id, 'RS-BLK-001', 'Running Shoes - Black'
FROM products p, colors c
WHERE p.name = 'Running Shoes' AND c.name = 'Black';

INSERT INTO product_variants (product_id, color_id, sku, name)
SELECT 
  p.id, c.id, 'RS-WHT-002', 'Running Shoes - White'
FROM products p, colors c
WHERE p.name = 'Running Shoes' AND c.name = 'White';

-- Slim Fit Cotton Shirt: Blue, White
INSERT INTO product_variants (product_id, color_id, sku, name)
SELECT 
  p.id, c.id, 'SF-BLU-003', 'Slim Fit Cotton Shirt - Blue'
FROM products p, colors c
WHERE p.name = 'Slim Fit Cotton Shirt' AND c.name = 'Blue';

INSERT INTO product_variants (product_id, color_id, sku, name)
SELECT 
  p.id, c.id, 'SF-WHT-004', 'Slim Fit Cotton Shirt - White'
FROM products p, colors c
WHERE p.name = 'Slim Fit Cotton Shirt' AND c.name = 'White';

-- Oversized Graphic Hoodie: Black, Red
INSERT INTO product_variants (product_id, color_id, sku, name)
SELECT 
  p.id, c.id, 'OG-BLK-005', 'Oversized Graphic Hoodie - Black'
FROM products p, colors c
WHERE p.name = 'Oversized Graphic Hoodie' AND c.name = 'Black';

INSERT INTO product_variants (product_id, color_id, sku, name)
SELECT 
  p.id, c.id, 'OG-RED-006', 'Oversized Graphic Hoodie - Red'
FROM products p, colors c
WHERE p.name = 'Oversized Graphic Hoodie' AND c.name = 'Red';

-- Stretch Slim Jeans: Navy Blue, Black
INSERT INTO product_variants (product_id, color_id, sku, name)
SELECT 
  p.id, c.id, 'SS-NAV-007', 'Stretch Slim Jeans - Navy Blue'
FROM products p, colors c
WHERE p.name = 'Stretch Slim Jeans' AND c.name = 'Navy Blue';

INSERT INTO product_variants (product_id, color_id, sku, name)
SELECT 
  p.id, c.id, 'SS-BLK-008', 'Stretch Slim Jeans - Black'
FROM products p, colors c
WHERE p.name = 'Stretch Slim Jeans' AND c.name = 'Black';

-- Linen Pants: Beige, Olive
INSERT INTO product_variants (product_id, color_id, sku, name)
SELECT 
  p.id, c.id, 'LP-BEI-009', 'Linen Pants - Beige'
FROM products p, colors c
WHERE p.name = 'Linen Pants' AND c.name = 'Beige';

INSERT INTO product_variants (product_id, color_id, sku, name)
SELECT 
  p.id, c.id, 'LP-OLI-010', 'Linen Pants - Olive'
FROM products p, colors c
WHERE p.name = 'Linen Pants' AND c.name = 'Olive';

-- Leather Chelsea Boots: Brown, Black
INSERT INTO product_variants (product_id, color_id, sku, name)
SELECT 
  p.id, c.id, 'LC-BRN-011', 'Leather Chelsea Boots - Brown'
FROM products p, colors c
WHERE p.name = 'Leather Chelsea Boots' AND c.name = 'Brown';

INSERT INTO product_variants (product_id, color_id, sku, name)
SELECT 
  p.id, c.id, 'LC-BLK-012', 'Leather Chelsea Boots - Black'
FROM products p, colors c
WHERE p.name = 'Leather Chelsea Boots' AND c.name = 'Black';



CREATE TABLE product_variant_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  variant_id UUID NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL
);

-- Insert first image for each product variant
insert into
  product_variant_images (variant_id, image_url)
select
  v.id,
  '/products/' || replace(replace(lower(v.name), ' - ', '-'), ' ', '-') || '-1.webp'
from
  product_variants v;

-- Insert second image for each product variant
insert into
  product_variant_images (variant_id, image_url)
select
  v.id,
  '/products/' || replace(replace(lower(v.name), ' - ', '-'), ' ', '-') || '-2.webp'
from
  product_variants v;



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

-- Accessories: Running Shoes + Leather Chelsea Boots
INSERT INTO product_units (variant_id, size_id, stock_quantity)
SELECT v.id, s.id, 10
FROM product_variants v
JOIN sizes s ON s.name IN ('6', '7', '8', '9', '10')
WHERE v.sku IN ('RS-BLK-001', 'RS-WHT-002', 'LC-BRN-011', 'LC-BLK-012');

-- TopWear: Shirts & Hoodies
INSERT INTO product_units (variant_id, size_id, stock_quantity)
SELECT v.id, s.id, 20
FROM product_variants v
JOIN sizes s ON s.name IN ('XS', 'S', 'M', 'L')
WHERE v.sku IN ('SF-BLU-003', 'SF-WHT-004', 'OG-BLK-005', 'OG-RED-006');

-- BottomWear: Jeans & Linen Pants
INSERT INTO product_units (variant_id, size_id, stock_quantity)
SELECT v.id, s.id, 15
FROM product_variants v
JOIN sizes s ON s.name IN ('28', '30', '32', '34')
WHERE v.sku IN ('SS-NAV-007', 'SS-BLK-008', 'LP-BEI-009', 'LP-OLI-010');



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
  order_number VARCHAR(100) NOT NULL UNIQUE,
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
  product_variant_id UUID NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  rating INT CHECK (rating BETWEEN 1 AND 5) NOT NULL, -- 1 to 5 stars
  review_text TEXT,
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(user_id, product_unit_id) -- Prevent multiple reviews for same product by same user
);


INSERT INTO reviews (
  user_id, product_variant_id, order_id, rating, review_text
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





-- OTHER TRIGGERS AND FUNCTIONS 
-- FOR ORDER NUMBER CREATION 
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS TRIGGER AS $$
DECLARE
  new_order_number TEXT;
BEGIN
  new_order_number := 'ORD-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || SUBSTRING(MD5(RANDOM()::TEXT), 1, 6);
  NEW.order_number := new_order_number;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER order_number_trigger
BEFORE INSERT ON orders
FOR EACH ROW
WHEN (NEW.order_number IS NULL)
EXECUTE FUNCTION generate_order_number();


-- cart item view
create view cart_item_view as 
select
  carts.id,
  carts.user_id,
  carts.quantity as qty,
  unit.id as unit_id,
  sizes.name as size,
  pv.name as name,
  colors.name as color,
  p.price as price,
  (
    select image_url
    from product_variant_images
    where variant_id = pv.id
    limit 1
  ) as image
from
  carts
  inner join product_units unit on carts.product_unit_id = unit.id
  inner join sizes on unit.size_id = sizes.id
  inner join product_variants pv on unit.variant_id = pv.id
  inner join colors on pv.color_id = colors.id
  inner join products p on pv.product_id = p.id;


-- wishlist item view 
create view wishlist_item_view as
select
  wishlist.id,
  wishlist.user_id,
  unit.id as unit_id,
  pv.name as product_name,
  pv.id as product_id,
  pv.slug as slug,
  p.price as price,
  p.is_new as is_new,
  brands.name as brand,
  array_agg(jsonb_build_object('image_url', pi.image_url)) as images
  from
  wishlist
  inner join product_units unit on unit.id = product_unit_id
  inner join product_variants pv on unit.variant_id = pv.id
  inner join products p on pv.product_id = p.id
  inner join brands on brands.id = p.brand_id
  left join product_variant_images pi on pi.variant_id = pv.id
group by
 wishlist.id,
  wishlist.user_id,
  unit.id,
  pv.name,
  pv.id,
  p.price,
  p.is_new,
  pv.slug,
  brands.name;



-- product view 
create view product_search_view as
select
 pv.name as product_name,
 pv.id as product_id,
 pv.sku as sku,
 pv.slug as slug,
 p.price as price,
 p.is_new as is_new,
 b.name as brand,
 c.name as color,
 subcat.slug as "type",
 maincat.slug as category,

-- Sizes with stock per variant
(
  select json_agg(jsonb_build_object(
    'id', pu.id,
    'size', s.name,
    'stock', pu.stock_quantity
  ))
    from product_units pu
    inner join sizes s on s.id = pu.size_id
    where pu.variant_id = pv.id
) as sizes,

 -- Aggregate images
 array_agg(jsonb_build_object('image_url', pi.image_url)) as images
from 
product_variants pv
inner join products p on p.id = pv.product_id
inner join brands b on b.id = p.brand_id
inner join colors c on c.id = pv.color_id
inner join categories subcat on subcat.id = p.category_id
inner join categories maincat on maincat.id = subcat.parent_id
left join product_variant_images pi on pi.variant_id = pv.id
group by
 pv.name,
 pv.id,
 pv.slug,
 p.price,
 p.is_new,
 b.name,
 subcat.slug, 
 maincat.slug,
 c.name;


--product_detail_view
create view product_detail_view as
select
  pv.id as id,
  pv.product_id as product_id,
  array_agg(jsonb_build_object('image_url', pvi.image_url)) as images,
  b.name as brand,
  pv.name as name,
  pv.slug as slug,
  p.price as price,
  pv.color_id as color_id,
  pv.sku as sku,
  p.description as description,
  p.care_instruction as care_instruction,
  c.parent_id as parent_category_id,
    (
    select
      id
    from
      product_units
    where
      variant_id = pv.id
    limit
      1
  ) as unit_id
  
from
  product_variants pv
  inner join products p on p.id = pv.product_id
  inner join brands b on b.id = p.brand_id
  inner join product_variant_images pvi on pvi.variant_id = pv.id
  inner join categories c on c.id = p.category_id
group by
  pv.id,
  pv.product_id,
  b.name,
  pv.name,
  pv.slug,
  p.price,
  pv.color_id,
  pv.slug,
  pv.color_id,
  pv.sku,
  p.description,
  p.care_instruction,
  c.parent_id;



DROP VIEW IF EXISTS order_view;
CREATE VIEW order_view AS 
select 
o.id as id,
o.order_number as order_number,
o.user_id as user_id,
o.price as price,
o.created_at as order_date,
o.shipping_status as shipping_status,
o.payment_status as payment_status,
o.quantity as qty,
o.estimated_delivery as estimated_delivery,
pv.name as product_name,
s.name as size,
c.name as color,
  (
    select
      image_url
    from
      product_variant_images
    where
      variant_id = pv.id
    limit
      1
  ) as image
from orders o
inner join product_units pu on pu.id = o.product_unit_id
inner join product_variants pv on pv.id = pu.variant_id
inner join sizes s on s.id = pu.size_id
inner join colors c on c.id = pv.color_id;



-- for admin side 
create view variant_sizes as
select
  pv.id as variant_id,
  (
    select
      json_agg(json_build_object('id', s.id, 'name', s.name))
    from
      sizes s
    where
      s.category_id = c.parent_id
  ) as sizes
from
  product_variants pv
  inner join products p on pv.product_id = p.id
  inner join categories c on c.id = p.category_id;



  create or replace function place_order_single_cod(
  p_user_id uuid,
  p_product_unit_id uuid,
  p_address_id uuid,
  p_quantity int
)
--returns nothing as result
returns table(
  order_id uuid
)
language plpgsql
as $$
declare
  current_stock int;
  price int;
  new_order_id uuid := gen_random_uuid();
begin
  -- 1. Lock the product_units row to prevent others from changing it
  select pu.stock_quantity,p.price into current_stock, price
  from product_units pu 
  inner join product_variants pv on pv.id = pu.variant_id
  inner join products p on p.id = pv.product_id
  where pu.id = p_product_unit_id for update;

  -- 2. Check if there is enough stock
  if current_stock < p_quantity then
    raise exception 'Not Enough Stock';
  end if;

  -- 3. Create the order
  insert into orders(id,user_id,product_unit_id,quantity,address_id,payment_method,payment_status,price)
  values (new_order_id,p_user_id,p_product_unit_id,p_quantity,p_address_id,'cod','unpaid',price);
  -- 4.Reduce stock
  update product_units
  set stock_quantity = stock_quantity - p_quantity
  where id = p_product_unit_id;

  -- 5.Remove item from cart
  delete from carts 
  where user_id=p_user_id and product_unit_id = p_product_unit_id;

  -- 6. return success with order_id
  return query select new_order_id;
end;
$$;



select
  *
from
  place_order_single_cod (
    'a518e5f9-e82a-40fa-8bb8-52df7c7a6c97', -- user_id
    '6fd6282b-a347-4ea0-9558-3151a5cd5ed5', -- product_unit_id
    '9b930cda-efc6-40ff-be04-712878d4915c', -- address_id
    1 -- quantity
  );




  