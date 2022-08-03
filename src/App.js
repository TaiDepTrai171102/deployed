import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ListTask from './components/Card/ListTask';
import Pagination from './components/Pagination/Pagination';
import CreateTask from './Page/CreateTask';
import Form from './Form/';
import DoneTask from './Page/DoneTask';
import { ROUTES } from './Constain/routes';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Header />
        <Sidebar />
        <Pagination />  
    <div className="App">
        <Routes>
          <Route path='/add' element={<Form />}></Route>
          <Route path='/' element={<ListTask />}></Route>
          <Route path={ROUTES.DONE_TASK.path} element={<DoneTask />} ></Route>
          <Route path={ROUTES.CREATE_TASK.path} element={<CreateTask />} />
        </Routes>
    
      
        
     
       
    </div>
    </BrowserRouter>
  );
}

export default App;
