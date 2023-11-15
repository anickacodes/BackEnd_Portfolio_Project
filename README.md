# BackEnd_Portfolio_Project

link to [backend](https://stylezbackend.onrender.com/)


This database houses sample services info as well as client info for a beauty salon owner. 

Users can see : 

_A list of styles - via a style table_
  * categories
  * style name
  * duration
  * price
  * photo of the style


Styles |  | |
| :--- | ---: | :---:
Column  | | Value | 
Category  | | text|
Style Name  | |text |
Duration  | | timestamp| 
Price | | numeric| 
Description  | |text | 
Image_url | |text | 


_A list of clients via a client table_
 * client name
 * client address
 * whether or not the client is a member
 * contact info via phone
 * rating given by the stylist
 * a style_id based on a style booked by the client

Clients |  | |
| :--- | ---: | :---:
Column  | | Value
Name  |  | text
Address  |  | text
Phone #  |  | varchar(10)
Rating  |  | numeric + check
is_member  |  | boolean
style_id  |  | foreign key


