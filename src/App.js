import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Components/Landing/Landing/Landing';
import Addmenu from './Components/Jobs/Add Jobs/Addmenu';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route >
            <Route path="/" element={< Landing />} />
            < Route path='/Addmenu' element={< Addmenu />} />

            {/* <Route path="*" element={<Home />} /> */}



          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
