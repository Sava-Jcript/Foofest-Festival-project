import React from "react";

export function updateRegularTickets(event, orderInfo, setOrderInfo) {
    let tickReg = event;
    setOrderInfo({ ...orderInfo, regularTickets: tickReg });
  }
  
  export function updateVIPTickets(event, orderInfo, setOrderInfo) {
    let tickVIP = event;
    setOrderInfo({ ...orderInfo, vipTickets: tickVIP });
  }
  
  export function tentSetUp(event, orderInfo, setOrderInfo) {

    let tentChoice = event.target.checked;
    setOrderInfo({ ...orderInfo, tentService: tentChoice });
  }
  
  export function tentGreen(event, orderInfo, setOrderInfo) {

    let tentChoice = event.target.checked;
    setOrderInfo({ ...orderInfo, greenCamping: tentChoice });
  }
  
  export function selectArea(e, orderInfo, setOrderInfo) {
    setOrderInfo({
      ...orderInfo,
      selectedArea: e.target.value,
    });
  }
  
  export function setOrderID(id, orderInfo, setOrderInfo) {
setOrderInfo({ ...orderInfo, orderID: id });

  }