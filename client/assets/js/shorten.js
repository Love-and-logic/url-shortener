// add an event listener to the shorten button for when the user clicks it

// const getURL =()=>{
//   fetch('https://localhost:3000/api/shorten',{
//     method: 'GET',
//     body: JSON.stringify({
//       url: $('#url-field').val(),
//       shortUrl: $('#short-field').val()
//     }),
//     headers: {'Content-Type': 'application/json'}
//   }).then(function(response){
//     return res.status(201).send(model)
//   })
//   next()
// }


const saveURL = () => {
    fetch('https://mmart162-final-project.herokuapp.com/urls', {
        method: 'POST',
        body: JSON.stringify({
            url: $('#url-field').val(),
            shortUrl: $('#short-field').val()
        }),
        headers: {"Content-Type": "application/json"}
    }).then(function(response){
        return response.json();
    }).then(function(data) {
        console.log(data)
        var resultHTML = '<a class="result" href=https://mmart162-final-project.herokuapp.com/urls' + data.shortUrl + '>'
            + data.shortUrl + '</a>';
        $('#link').html(resultHTML);
        $('#link').hide().fadeIn('slow');
    })
};

// Tried using this code to setup 404 error page
// const page404=(req, res, next) => {
//     const err = new Error();
//     err.status = 404;
//     next();
// });
//
// app.use(function(err, req, res, next){
//     res.sendStatus(404);
//     res.render('404');
//     return;
// }

$('.btn-shorten').on('click', saveURL)


//
// $('.btn-shorten').on('click', function(){
//   // AJAX call to /api/shorten with the URL that the user entered in the input box
//   fetch({
//     url: 'http://localhost:3000/api/shorten',
//     type: 'POST',
//     dataType: 'JSON',
//     data: {url: $('#url-field').val()},
//     success: function(data){
//         // display the shortened URL to the user that is returned by the server
//         var resultHTML = '<a class="result" href="' + data.shortUrl + '">'
//             + data.shortUrl + '</a>';
//         $('#link').html(resultHTML);
//         $('#link').hide().fadeIn('slow');
//     }
//   });
//
// });
