import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Punklist from "./components/Punklist";
import Front from "./components/Front";

const App = () => {
  const [punkListData, setpunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  //console.log(selectedPunk);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x2C853C86E9482CB581e208aA48cBf271AD293a45&order_direction=asc"
      );
      //console.log(openSeaData);
      //console.log(openSeaData.data.assets);
      setpunkListData(openSeaData.data.assets);
      console.log(punkListData);
    };
    return getMyNfts();
  },[]);

  return (
    <div className="App">
      <Header />
      {punkListData.length > 0 && ( 
        <>
          <Front punkListData={punkListData} selectedPunk={selectedPunk} />
          <Punklist
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
};

export default App;
