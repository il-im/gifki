//xml http request = xhr

// const request = new XMLHttpRequest()

// request.open('DELETE','https://jsonplaceholder.typicode.com/posts/1')

// request.addEventListener('load', function(){
//     console.log('status',request.status)
//     console.log('status text',request.statusText)
//     console.log('response',request.responseText)
// })

// const requestBody = JSON.stringify({
//     title: "new title",
//     author:"Ilim"
// })

// request.send(requestBody);
// //fetch

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(function(response) {
//         console.log(response)
//         return 1;
//     }
// ).then(function(one){
//     console.log(one)
// })
    //  function test(){
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    //     .then
    //     console.log(response)
    //     console.log('other code')
    //  }
    //  test()
async function getPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'post',
    body:JSON.stringify({title:'title', auhor:'admin'}),
    headers:{
        lang: 'ru',
        authorization:'12345'
    }
    })
    const data = await response.json()
    console.log(data)
}
getPost()