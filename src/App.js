import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { RootNavigator } from "./navigation/RootNavigator";
import Layout from "./hoc/Layout";

const App = () => (
  <BrowserRouter>
    <Layout>
      <RootNavigator />
    </Layout>
  </BrowserRouter>
)

export default App;
