import React from "react";
import { DAppProvider } from "@usedapp/core";
import { Header } from "./components/Header";
import { ChainId } from "@usedapp/core";
import { Container } from "@material-ui/core";

function App() {
  return (
    <DAppProvider
      config={{
        supportedChains: [ChainId.Sepolia, ChainId.Hardhat, ChainId.Localhost],
      }}
    >
      <Header />
      <Container maxWidth="md">
        <div>Hi!</div>
      </Container>
    </DAppProvider>
  );
}

export default App;
