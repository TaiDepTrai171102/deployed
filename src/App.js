import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ListTask from './components/Card/ListTask';
import Pagination from './components/Pagination/Pagination';
function App() {
  return (
    <div className="App">
        <Header />
        
        <ListTask />
        
        <Sidebar />

        <Pagination />
       
    </div>
  );
}

export default App;
