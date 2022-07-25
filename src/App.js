import { Switch, Route, Link} from 'react-router-dom';
import { Topography, Layout, Space, Typography} from 'antd';
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import './App.css';


const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/'>
                <Homepage />
              </Route>
              <Route exact path='/exchanges'>
                <Exchanges />
              </Route>
              <Route exact path='/cryptocurrencies'>
                <Cryptocurrencies />
              </Route>
              <Route exact path='/crypto/:coinId'>
                <CryptoDetails />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
            </Switch>
       </div>
       </Layout>
      <div className='footer'>
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
          Cryptoverse <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/mews">News</Link>
        </Space>
      </div>
    </div>
    </div>
  );
};

export default App;

















// npm install antd @ant-design/icons react-redux @reduxjsnpm /toolkit axios chart.js  npm i millify 
// npm i moment react-chartjs-2