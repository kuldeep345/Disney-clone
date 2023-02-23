import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
           <Route path='/'>
             <Route index element={<Login/>} />
             <Route path='/home' element={<Home/>} />
             <Route path='/detail/:id' element={<Detail/>} />
           </Route>  
        </Routes>  
      </Router>    
     </div>
  );
}

export default App;
