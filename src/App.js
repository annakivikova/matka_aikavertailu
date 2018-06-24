import React, { StrictMode } from 'react';

import { Search } from './Components/Search';
import { SearchFormFrom } from './Components/SearchFormFrom';
import { Example } from './Components/simple';

const App = () => (
  <StrictMode>
    <h1>Joku otsikko</h1>
    <h2>Ehkä kartta</h2>
    <Example />
    <h2>Osoitteen haku</h2>
    <SearchFormFrom />
  </StrictMode>
)

export default App
