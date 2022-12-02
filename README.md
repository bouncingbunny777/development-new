# Development

### Link to Deployed Website

https://bouncingbunny777.github.io/development/

### Goal and Value of the Application

The goal of this website is to allow users to efficiently and effectively view new Chanel handbags and create a personalized list of favorites. Users can easily filter and sort the listed products according to their needs by color or by price. While the current Chanel website allows users to create a wishlist, it does not allow them to view all available handbags, their favorites, and the total price of their favorite items in one simple, condensed page. Thus, the value of this website is providing efficiency for Chanel lovers such that they do not have to spend time navigating through different pages when creating a wishlist.

### Usability Principles Considered

Users typically read from left to right on a screen. Thus, to increase learnability and efficiency, the website is structured such that the more important information (such as the bags) is located on the left, while the less important information (filtering, sorting) is on the right. Furthermore, to follow the guidelines of visual hierarchy, headers, titles, subtitles, and text are in larger text to lower text respectively. Finally, to futher increase learnability, text that can be clicked (buttons, filter categories, sorting categories) are in a different color or format than regular text.

### Organization of Components

Two components are used in this project, shopItem and Cart, both of which are called in App.js. The shopItem component is for each item card seen under the "BAG" title. Every item card includes the item's image, name, description, color, price range, price, and an Add to Favorite button. The cart component is for the Favorites section on the right hand. It keeps track of which items have been favorited, stores them in the cart, and calculates their total price.

### How Data is Passed Down Through Components

shopItem:
Since each shopItem displays the item's image, name, description, color, price range, price, all of these values are passed into shopItem from App.js with props. Furthermore, to include the Add To Favorites and Remove From Favorites functionality for the button of each shopItem, I also passed in the onAddItem and onDeleteItem functions to props for shopItem.

cart:
Since the cart component needs to keep track of all favorited items, I pass in cartItems from App.js to props for cart. The cartItem variable is updated every time an item is added to the favorites or removed from favorites.

### How the User Triggers State Changes

App.js:

The user can trigger state changes for three different areas: cart items, filter types, and sort types. When the user adds a bag to or removes a bag from Favorites, the cartItems array is updated accordingly using setCartItems. When the user selects a filter type, the filter is changed using setType (for colors) and setItemPrice (for price ranges). When the user selects a sort type, the sorting order is changed using setSort.

ShopItem.js:

The user can trigger three state changes when they click on the "Add to Favorites" or "Remove from Favorites" button. The button's text, its color, and whether it's pressed or not is updated with setButtonText, setVariant, and setPressed respectively. 
