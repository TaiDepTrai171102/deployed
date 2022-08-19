
import './App.css';
import FormCard from './components/FormCard';
import { useEffect, useState } from 'react';
import ProductApi from './API/productApi';
import { getList ,setItem } from './services/list';
import { getValue } from '@testing-library/user-event/dist/utils';
import { Route , Routes , BrowserRouter } from 'react-router-dom';
import Header from './layout/Header';
import Form from './components/FormCard';
function App() {
  /*const {product , setProduct} = useState([]);
  useEffect(() =>  {
    const fetchProductList = async () => {
    try{
      const response = await ProductApi.getAll();      //// call Product API
      console.log(response);
    }
    catch(eror){
      console.log('error:',eror)
    }
    }
    fetchProductList();
  },[])*/

/*
    const [itemInput,setItemInput] = useState('');
    const [priceInput,setPriceInput] = useState('');
    const [list, setList] = useState([]);
   

    const handleSubmit = (a) =>{
      a.preventDefault(); // ngăn form làm mới trình duyệt
      setItem(itemInput,priceInput)
      .then(()=>{
        setItemInput('');
        setPriceInput('');
      })
  
    }
      
      useEffect(() => {
        let mounted = true;
        getList()
          .then(items => {
            if(mounted) {
              setList(items)
            }
          })
        return () => mounted = false;
      }, [])
    
  return (
    <>
   
    <div className='wrapper'>
    <h1>My Category List</h1>
    <ul>
      {list.map(product => <li key={product.name}>{product.name}</li>)}

    </ul>
    <form onSubmit={handleSubmit}>
       <label>
         <p>New Item</p>
         <input type="text"  onChange={name => setItemInput(name.target.value)} value={itemInput} />
         <input type="text" onChange={price => setPriceInput(price.target.value)} value={priceInput} />
        </label>
       <button type="submit">Submit</button>
     </form>
     </div>
    </>
  );
}
*/
return (
  <div>
    <BrowserRouter>
    <>
    
    <Header />
    <Routes>
        <Route path='/add' element={<Form />}></Route>
        <Route path='/' element></Route>
    </Routes>
    </>
    </BrowserRouter>
  </div>
);
}
export default App;






















  
 
