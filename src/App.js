import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";

function App() {
  const [showCartModal, setShowCartModal] = useState(false);

  const showModal = () => {
    setShowCartModal(true)
  }

  const hideModal = () => {
    setShowCartModal(false)
  }

  return (
    <div>
      <Header showModal={showModal} />
      <Meals />
      {showCartModal && <Cart showModal={showModal} hideModal={hideModal} />}
    </div>
  );
}

export default App;
