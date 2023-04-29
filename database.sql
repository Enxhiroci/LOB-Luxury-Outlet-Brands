-- Create Seller table
CREATE TABLE Selller (
item_id INT PRIMARY KEY,
FirstName VARCHAR(20) NOT NULL,
LastName VARCHAR(20) NOT NULL,
);

-- Create Item table
CREATE TABLE Item (
  itemID INT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  category VARCHAR(20) NOT NULL,
  size VARCHAR(20) NOT NULL,
  color VARCHAR(20) NOT NULL,
  discription VARCHAR(300) NOT NULL,
  sellingPrice INT(5) NOT NULL,
  rentingPrice INT(5) NOT NULL,
  quantity INT(5) NOT NULL,
  availability BOOLEAN NOT NULL,
  sellerID INT,
  FOREIGN KEY (sellerID) REFERENCES Seller(sellerID)
);
-- Create Client table
CREATE TABLE Client (
clientID INT PRIMARY KEY,
FirstName VARCHAR(20) NOT NULL,
LastName VARCHAR(20) NOT NULL,
Email VARCHAR(20) NOT NULL,
PhoneNumber INT(10) NOT NULL,
Username VARCHAR(20) NOT NULL,
itemID INT,
FOREIGN KEY (itemID) REFERENCES Item(itemID)
);
-- Create Cart table
CREATE TABLE Cart (
cartID INT PRIMARY KEY,
totalPrice INT(10) NOT NULL,
);
-- Create Client table
CREATE TABLE ShippingAddress (
shippingID INT PRIMARY KEY,
address VARCHAR(20) NOT NULL,
zipcoe INT(5) NOT NULL,
city VARCHAR(20) NOT NULL,
clientID INT,
FOREIGN KEY (clientID) REFERENCES Client(clientID)
);
-- Create WhishList table
CREATE TABLE WhishList (
WhishListID INT PRIMARY KEY,
clientID INT,
FOREIGN KEY (clientID) REFERENCES Client(clientID)
);
-- Create Contains table
CREATE TABLE Contains (
WhishListID INT ,
itemID INT,
FOREIGN KEY (itemID) REFERENCES Item(itemID),
FOREIGN KEY (WhishListID) REFERENCES WhishList(WhishListID)
);
-- Create CartItem table
CREATE TABLE CartItem (
CartItemID INT PRIMARY KEY,
quantity INT(5) NOT NULL,
price INT(5) NOT NULL,
itemID INT,
cartID INT,
clientID INT,
FOREIGN KEY (itemID) REFERENCES Item(itemID),
FOREIGN KEY (cartID) REFERENCES Cart(cartID),
FOREIGN KEY (clientID) REFERENCES Client(clientID)
);
-- Create rental_transaction table
CREATE TABLE rental_transaction (
rentalID INT PRIMARY KEY,
startDate DATE(10) NOT NULL,
returnDate DATE(10) NOT NULL,
cartID INT,
clientID INT,
FOREIGN KEY (cartID) REFERENCES Cart(cartID),
FOREIGN KEY (clientID) REFERENCES Client(clientID)
);
-- Create SalesOrder table
CREATE TABLE SalesOrder (
salesID INT PRIMARY KEY,
deliveryDate DATE(10) NOT NULL,
cartID INT,
clientID INT,
shippingID INT,
sellerID INT,
FOREIGN KEY (cartID) REFERENCES Cart(cartID),
FOREIGN KEY (clientID) REFERENCES Client(clientID),
FOREIGN KEY (shippingID) REFERENCES ShippingAddress(shippingID),
FOREIGN KEY (sellerID) REFERENCES Seller(sellerID)
);