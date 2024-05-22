import Item from "./components/Item";
import Bill from "./components/Bill";
import { useCart } from "./context/Cart";
function App() {


  const Cart = useCart();

  const {items} = Cart;

  return (
    <>
    <div style={{display:"flex"}}>
    <div>
        <Item name="Macbook Pro" price="100000" />
        <Item name="Sandisk Pendrive" price="2000" />
        <Item name="Iphone 13" price="54000" />
        <Item name="Svaar Clogs" price="500" />
        <Bill/>
      </div>
      <div>
        <p>Total : {items.length}</p>
      </div>
    </div>
      
    </>
  )
}

export default App
