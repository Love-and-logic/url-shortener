const createPost = () => {
	const data = {
	original: document.querySelector('#orig').value
	text: document.querySelector('#text').value
	}


console.log('Saving the following object to the server:', data);

fetch('http://localhost:3000/posts/', {
	method: 'POST'
	body: JSON.stringify(data),
	headers: {"Content-Type": "application/json"}
}).then(function(response){
	return response.json();
}).then(function(data) {
	console.log(data)
})

}