export function getList() {
    return fetch('http://localhost:3333/posts') // call API và truy xuất  dữ liệu 
      .then(data => data.json())
  }

export function setItem(name,price) {
   return fetch('http://localhost:3333/posts', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ name },{ price })
   })
     .then(data => data.json())
  }  