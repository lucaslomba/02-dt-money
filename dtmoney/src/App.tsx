import React, { useState } from "react";
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal/Index";
import { GlobalStyle } from "./styles/global";

//Acessibilidade
Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }


  return (
    <>
      <Header onOpenNewTransactioModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle/>
    </>
  );
}

export default App;
