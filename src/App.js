import React, { StrictMode } from 'react';

import { SearchFrom } from './Components/SearchFrom';
import { SearchTo } from './Components/SearchTo';
import { Example } from './Components/simple';

const App = () => (
  <StrictMode>
    <h1>Joku otsikko</h1>
    <h2>Ehkä kartta</h2>
    <Example />
    <h2>Osoitteen haku</h2>
    <SearchFrom />
    <SearchTo />
  </StrictMode>
)

export default App
