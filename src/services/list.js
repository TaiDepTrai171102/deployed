export function getList() {
    return fetch('http://localhost:3333/posts') // call API và truy xuất  dữ liệu 
      .then(data => data.json())
  }

export function setItem(item) {
   return fetch('http://localhost:3333/posts', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ item })
   })
     .then(data => data.json())
  }  