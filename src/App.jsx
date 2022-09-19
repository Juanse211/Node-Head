import "./css/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomeContainer } from "./container/homeContainer";
import { ItemListContainer } from "./container/shopContainer";
import { ItemDetailContainer } from "./container/itemDetailContainer";
import { CheckoutContainer } from "./container/checkoutContainer";
import { CostumerServicesContainer } from "./container/costumerServicesContainer";
import { ToursAndShowsContainer } from "./container/toursAndShowsContainer";
import { CartProvider } from "./context/cartContext";


const App = () => {
  return <>
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/shop" element={<ItemListContainer />} />
          <Route path="/shop/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/costumerServices" element={<CostumerServicesContainer />} />
          <Route path="/toursAndShows" element={<ToursAndShowsContainer />} />
          <Route path="/checkout" element={<CheckoutContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  </>;
};

export default App;