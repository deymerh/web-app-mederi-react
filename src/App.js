import React from 'react';
import { Header } from './componentes/Header'
import { Head } from './componentes/Head';
import { Home } from './componentes/Home';
import { Footer } from './componentes/Footer';

function App() {
  return (
    <div>
      <Head />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
