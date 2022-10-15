import "./css/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart/cart";
import { HomeContainer } from "./container/homeContainer";
import { ItemListContainer } from "./container/shopContainer";
import { ItemDetailContainer } from "./container/itemDetailContainer";
import { CheckoutContainer } from "./container/checkoutContainer";
import { CostumerServicesContainer } from "./container/costumerServicesContainer";
import { ToursAndShowsContainer } from "./container/toursAndShowsContainer";
import { CartContextWrapper } from "./context/cartContext";
import { FormContainer } from "./container/formContainer";
import { TermsOfService } from "./container/termsOfServiceContainer";

const App = () => {
  return <>
    <CartContextWrapper>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<ItemListContainer />} />
          <Route path="/shop/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/costumerServices" element={<CostumerServicesContainer />} />
          <Route path="/toursAndShows" element={<ToursAndShowsContainer />} />
          <Route path="/form" element={<FormContainer />} />
          <Route path="/tos" element={<TermsOfService />} />
          <Route path="/checkout" element={<CheckoutContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextWrapper>
  </>;
};

export default App;