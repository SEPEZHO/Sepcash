import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './Style/App.sass'

import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import Footer from './components/Footer/Footer'
import CardRotate from "./Logics/CardRotate/CardRotate"

class App extends React.Component {
  componentDidMount() {
    CardRotate()
  }
  
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/(|home|main)" component={MainPage} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App