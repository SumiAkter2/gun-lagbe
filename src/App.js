import "./Css/Style.css";
import { createContext , useState} from "react";
import Cards from "./Component/Cards";
export const CartContext = createContext();
function App() {
  const [guns,setGuns]=useState([]);
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[guns,setGuns,cart,setCart]}>
      <div>
        <Cards />
      </div>
    </CartContext.Provider>
  );
}

export default App;
