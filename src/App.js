import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";


function App() {
  const [showCartModal, setShowCartModal] = useState(false);

  const showModal = () => {
    setShowCartModal(true)
  }

  const hideModal = () => {
    setShowCartModal(false)
  }

  return (
    <CartProvider>
      <Header showModal={showModal} />
      <Meals />
      {showCartModal && <Cart showModal={showModal} hideModal={hideModal} />}
    </CartProvider>
  );
}

export default App;
