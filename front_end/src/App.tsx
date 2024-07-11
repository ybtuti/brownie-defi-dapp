import React from 'react';
import { DAppProvider, ChainId } from "@usedapp/core"
import { Header } from './components/Header';
import { Container } from "@material-ui/core"
import { main } from './components/Main';

function App() {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Sepolia, 1337]

    }}>
      <Header />
      <Container maxWidth="md">
        <div>Hi!</div>
        <main />
      </Container>

    </DAppProvider>

  );
}

export default App;
