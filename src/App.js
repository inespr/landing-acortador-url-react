import react from "react";
import { Header } from "./components/Header";
import { SendForm } from "./components/SendForm";
import { PromoCard } from "./components/PromoCard";

function App() {
  return (
    <div className="App">
      <Header/>
      <SendForm/>
      <></>
      <div className="cards">
        <PromoCard text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."/>
        <PromoCard text=''/>
        <PromoCard />
      </div>
    
    </div>
  );
}

export default App;
