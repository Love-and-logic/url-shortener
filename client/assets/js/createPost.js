const genURL = () => {
	const data = {
	longURL: document.getElementById('longURL').value
	shortURL: document.getElementById('shortURL').value
	}
	console.log(genURL)

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
