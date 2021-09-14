import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainPage from './routed/MainPage';
import Contato from './routed/Contato';
import Login from './routed/Login';
import DataCenter from './routed/DataCenter';
import BandaLarga from './routed/BandaLarga';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
          <Switch>
            <Route path='/' exact={true}>
              <MainPage/>
            </Route>

            <Route path='/contato'>
              <Contato/>
            </Route>

            <Route path="/banda-larga">
              <BandaLarga/>
            </Route>

            <Route path="/data-center">
              <DataCenter/>
            </Route>

            <Route path="/login">
              <Login/>
            </Route>
          </Switch>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
