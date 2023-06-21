import "../styles/globals.css";
import {  useState } from "react";
import {
  updateRegularTickets,
  updateVIPTickets,
  tentSetUp,
  tentGreen,
  selectArea,
  setOrderID,
} from "../components/orderFunctions";

function MyApp({ Component, pageProps }) {
  const [orderInfo, setOrderInfo] = useState({
    vipTickets: 0,
    regularTickets: 0,
    totalTickets: 0,
    validates: null,
    selectedArea: "",
    tentService: false,
    greenCamping: false,
    totalCost: 0,
    orderID: "",
    guests: [],
  });



  // ...

  function handleUpdateRegularTickets(event) {
    updateRegularTickets(event, orderInfo, setOrderInfo);
  }

  function handleUpdateVIPTickets(event) {
    updateVIPTickets(event, orderInfo, setOrderInfo);
  }

  function handleTentSetUp(event) {
    tentSetUp(event, orderInfo, setOrderInfo);
  }

  function handleTentGreen(event) {
    tentGreen(event, orderInfo, setOrderInfo);
  }

  function handleSelectArea(e) {
    selectArea(e, orderInfo, setOrderInfo);
  }

  function handleSetOrderID(id) {
    setOrderID(id, orderInfo, setOrderInfo);
  }

  // ...

  return (
    <>
      <Component
        updateRegularTickets={handleUpdateRegularTickets}
        updateVIPTickets={handleUpdateVIPTickets}
        {...pageProps}
        orderInfo={orderInfo}
        tentSetUp={handleTentSetUp}
        tentGreen={handleTentGreen}
        selectedArea={handleSelectArea}
    setOrderInfo={setOrderInfo}
        setOrderID={handleSetOrderID}
      />
    </>
  );
}

export default MyApp;
