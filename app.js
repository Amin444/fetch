const postFetching = () =>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(json => userFetching(json))
  
}

const userFetching = async posts =>{
  await fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(json => {
    json.map( u => {
      posts.map( p => {
        if (p.userId == u.id) p['name'] = u.name
      })
    })
  })

  return getPosts(posts)
}
const getPosts = data =>{
  const element = document.getElementById('post-data'); 

  const out = data.map(i =>{
    return `<div class='post-items'>
              <div class='post-block'>${i.id}</div>
              <div class='post-block'>${i.title}</div>
              <div class='post-block'>${i.body}</div>
              <div class='post-block-userId' onclick='userStatus(${i.userId})'>${i.name}</div>
           </div>`
  })
  
  element.innerHTML = out.join('');
}

const userStatus = userID => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then(res => res.json())
      .then(json => getUser(json))
}

const getUser = dataUser =>{

  const mainRoot = document.getElementById('main-root')
  const root1 = document.getElementById('user')
  mainRoot.style.display= 'none'
  root1.style.display='block' 
  
  out = `      
    <div class="user-item">ID: <div>${dataUser.id}</div ></div>
    <div class="user-item">name:  <div>${dataUser.name}</div> </div>
    <div class="user-item">username:  <div>${dataUser.username} </div></div>
    <div class="user-item">email:  <div>${dataUser.email}</div> </div>
    <div class="user-item">address: <div>city ${dataUser.address.city}, 
                                    street ${dataUser.address.street}, 
                                    suite ${dataUser.address.suite}, 
                                    zip-code ${dataUser.address.zipcode}</div>
    </div>
    <div class="user-item">geo:  <div>latitude: ${dataUser.address.geo.lat}, altitude: ${dataUser.address.geo.lng}</div> </div>
    <div class="user-item">phone:  <div>${dataUser.phone}</div> </div>
    <div class="user-item">website:  <div>${dataUser.website} </div></div>
    <div class="user-item">company:  <div>${dataUser.company}</div> </div>

  `
  root1.innerHTML = out;
  
}




postFetching()
{/* <div class="user-item">city:  ${dataUser.} </div>
<div class="user-item">zipcode:  ${dataUser.} </div>
<div class="user-item">phone:  ${dataUser.} </div>
<div class="user-item">website:  ${dataUser.} </div>
<div class="user-item">company:  ${dataUser.} </div>
<div class="user-item">name:  ${dataUser.} </div>
<div class="user-item">catchPhrase:  ${dataUser.} </div>
<div class="user-item">bs:  ${dataUser.} </div> */}