//1. define functions: aka ask for the blog entries

const getPosts = () => {
    container.innerHTML = ''
    fetch('http://localhost:3000/posts/').then(response =>{ //2. waiting for all blog entries to be returned from server
        return response.json();
      }).then(showPosts) // do something with that data
}

const showPosts = (posts) => {
    console.log(posts)
    const container = document.getElementById('container')
    posts.forEach(post => {
        let template = `
              <h2>${post.name}</h2>
              <a href="${post.url}">More</a>
              <p>${post.text}</p>
              <div class="comments">
                    <h3>Comments</h3>
                    <p>TODO next week...</p>
              </div>`
        container.innerHTML += template;
    })
}
getPosts()