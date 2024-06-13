import React from "react";
import { DAppProvider } from "@usedapp/core";
import { Header } from "./components/Header";
import { ChainId } from "@usedapp/core";

function App() {
  return (
    <DAppProvider
      config={{
        supportedChains: [ChainId.Sepolia, ChainId.Hardhat, ChainId.Localhost],
      }}
    >
      <Header />
      <div>Hi!</div>
    </DAppProvider>
  );
}

export default App;
