
import './App.css';
import FormCard from './components/FormCard';
import { useEffect, useState } from 'react';
import ProductApi from './API/productApi';
import { getList ,setItem } from './services/list';
import { getValue } from '@testing-library/user-event/dist/utils';
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


    const [itemInput,setItemInput] = useState('');
    const [list, setList] = useState([]);
   

    const handleSubmit = (a) =>{
      a.preventDefault(); // ngăn form làm mới trình duyệt
      setItem(itemInput)
      .then(()=>{
        setItemInput('');
  
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
      {list.map(item => <li key={item.product}>{item.product}</li>)}
    </ul>
    <form onSubmit={handleSubmit}>
       <label>
         <p>New Item</p>
         <input type="text"  onChange={evented => setItemInput(evented.target.value)} value={itemInput} />
       </label>
       <button type="submit">Submit</button>
     </form>
     </div>
    </>
  );
}

export default App;






















  
 
