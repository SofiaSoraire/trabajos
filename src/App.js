// @Vendors
import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route
}from 'react-router-dom';
import { Provider } from 'react-redux';

// @Store
import store from './store';
// @Routes
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
//import Navigation from '‪./components/Navigation/Navigation.js';

class App extends Component {


    render() {
        return(
      <div className="app">

            <Provider store={store}>
                <Router>
                    <Layout>
                        <Route path="/" exact component={ Home } />
                        <Route path="/products" component={ Products } />
                    </Layout>

                </Router>
            </Provider>
            </div>
        );
    }

}

export default App;