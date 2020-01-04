import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Cards from '../Card/Card'
import CardMenus from '../CardMenu/CardMenu'
import Navbars from '../Navbar/Navbar'
import SearchResults from '../SearchResults/SearchResults'
import Restaurant from '../Restaurant/Restaurant';

const App = () => {
    return (
        <React.Fragment>
          
          <Navbars />
          <Route path="/restaurants/:id" exact component={Restaurant} />
          <Route path="/menuitems" exact component={CardMenus} />
          <Route path="/restaurants" exact component={Cards} />
          <Route path="/search/:term" component={SearchResults} />
        
        </React.Fragment>
        
    );
};



export default App;