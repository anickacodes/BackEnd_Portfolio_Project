\c styles_dev;

INSERT INTO styles (category, service, duration, description, price, image_url) VALUES
('Knotless', 'Medium-Knotless-Braids', '02:00:00', ' ',  '205', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8v8hBd0f5H53LQ-BGcircjRALai9ETD4bg&usqp=CAU'),
('Knotless', 'Large-Knotless-Braids', '01:30:00',' ', '185', 'https://static.glossgenius.com/public/service/6b5caba1803bab28b07b06091c24a1df817892c0/image/2584441c77e7835f33f58d42f95bdc9a.jpg'),
('Crochet', 'Twists Crochet', '01:45:00', ' ', '100', 'https://braidhairstyles.com/wp-content/uploads/2022/08/Spring-Twists-Crochet-Hair-819x1024.jpeg'),
('Crochet', 'Invisible Crochet Locs', '01:55:00',' ', '100',  'https://content.latest-hairstyles.com/wp-content/uploads/half-braided-crochet-hair.jpg'),
('Traditional', 'Medium Box Braids', '04:55:00', ' ','185', 'https://i.redd.it/rkpbxcfsot261.png'),
('Traditional', 'Large Box Braids', '04:00:00', ' ','170', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCytJEwyyFxL19IR5U9zy_QsLXpKJRkIi5pg&usqp=CAU'),
('Natural', 'Straight Backs', '00:20:00', ' ', '45', 'https://images.squarespace-cdn.com/content/v1/5cda18bc840b16b1970eb444/1592196138415-X8TUYVTK379T2G2ZTIWH/IMG_1741.jpg'),
('Natural', 'Stitch Straight Backs', '00:30:00', ' ','55', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Ny22M8jvP2c2cjVCNwacvz680CNuNWOwECWn_beAngc9x2qMiukoRpUVtK64C_iH9pY&usqp=CAU'),
('Natural', 'Starter Locs', '01:35:00', ' ','75', 'https://i.pinimg.com/736x/f6/8e/67/f68e676f297d6f37c5298aae39aad2b4.jpg'),
('Natural', 'Loc Palm Retwist', '01:05:00', ' ', '90', 'https://static.glossgenius.com/public/service/1105054/image/image.jpg');

 
INSERT INTO clients (style_id, name, address, is_member, phone, rating) VALUES
('10', 'Nova K','', true, '2222222222', 5),
('9', 'kavon','', true, '2222022022', 4),
('8', 'SK','', true, '2122112424', 3),
('1', 'Mona L','', true, '2222222222', 4),
('8', 'John S','', true, '2014449966', 4),
('7', 'Angie B','', true, '9292829966', 3),
('9', 'Charles V','', true, '9292829966', 3),
('2', 'Janet J','', true, '9292829966', 3),
('1', 'Robyn F','', true, '9292829966', 3),
('8', 'Rahj R','', true, '2221112121', 5),
('7', 'A X','', true, '1111111111', 5),
('10', 'Blake M','', true, '9437774128', 5),
('4', 'Deniece W','', true, '5138763332', 4),
('3', 'India A','', true, '4442826456', 4),
('5', 'Arnold W','', true, '9175482636', 5),
('6', 'Lionel S','', true, '8529007066', 4);
