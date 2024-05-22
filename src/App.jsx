import Item from "./components/Item";
import Bill from "./components/Bill";
function App() {


  return (
    <>
      <div>
        <Item name="Macbook Pro" price="100000" />
        <Item name="Sandisk Pendrive" price="2000" />
        <Item name="Iphone 13" price="54000" />
        <Item name="Svaar Clogs" price="500" />
        <Bill/>
      </div>
    </>
  )
}

export default App
