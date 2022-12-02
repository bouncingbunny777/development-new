import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import './App.css';
import data from "./components/data";
import ShopItem from "./components/ShopItem"
import Cart from "./components/Cart"
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/js/dist/tab';


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
data.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cartItems, setCartItems] = useState([]);

  // ADDING AND DELETING FAVORITES

  const onAddItem = (item) => {
    setCartItems([...cartItems, {...item}]);
  }

  const onDeleteItem = (item) => {
    setCartItems(cartItems.filter((x) => x.name !== item.name));
  }

  // FILTERING AND SORTING

  // First Filter
  const [type, setType] = useState("All");

  const selectFilterType = eventKey => {
    setType(eventKey);
  };
  
  const matchesColorType = item => {
    if(type === "All") { 
      return true;
    } else if (type === item.color) {
      return true;
    } else {
      return false;
    }
  }

  const filteredData = data.filter(matchesColorType)

  // Second Filter
  const [itemPrice, setItemPrice] = useState("All")

  const selectPrice = eventKey => {
    setItemPrice(eventKey);
  }

  const matchesItemPrice = item => {
    if(itemPrice === "All") {
      return item;
    } else if (itemPrice === "Above") {
      return item.filter((item) => {return item.pricerange === "Above"});
    } else {
      return item.filter((item) => {return item.pricerange === "Below"});
    }
  }

  const filtered2Data = matchesItemPrice(filteredData);

  // Sorting
  const [sort, setSort] = useState("Unsorted");

  const selectSort = eventKey => {
    setSort(eventKey);
  }

  const matchesSortType = item => {
    if(sort === "Unsorted") {
      return item;
    } else {
      return item.sort((a,b) => {return a.price - b.price});
    }
  }

  const sortedData = matchesSortType(filtered2Data);

  return (
    <div className="App">

      <div class="header">
        <h3> DISCOVERING </h3>
        <h1> CHANEL </h1>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-10">
              <h2> Bags </h2>

              <div class="row row-cols-1 row-cols-md-2 g-4">
                {sortedData.map((item) => (
              
                <ShopItem onAddItem={onAddItem} item={item} onDeleteItem={onDeleteItem} key={item.id} pricerange={item.pricerange} name={item.name} color={item.color} image={item.image} description={item.description} price={item.price}> </ShopItem>
                ))}
              </div>
          </div>

          <div class="col-sm-2">
          
          <h4> Filters </h4>
          <h3> Filter By Color:</h3>

            <Nav class="nav" onSelect={selectFilterType}>
              <Nav.Item><Nav.Link eventKey="All"> All </Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Black"> Black </Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="White"> White </Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Other"> Other </Nav.Link></Nav.Item>
            </Nav>

          <h3> Filter By Price </h3>
            <Nav onSelect={selectPrice}>
              <Nav.Item><Nav.Link eventKey="All"> All </Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Above"> Above 5000 </Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Below"> Below 5000 </Nav.Link></Nav.Item>
            </Nav>
          
          <h3> Sort By:</h3>
            <Nav onSelect={selectSort}>
              <Nav.Item><Nav.Link eventKey="Unsorted"> Popular </Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Price"> Price </Nav.Link></Nav.Item>
            </Nav>


            <Cart cartItems={cartItems}> </Cart>
            
          </div>
          
        </div>
      </div>
      <div class="footer">

      </div>
    </div>
  );
}

export default App;
