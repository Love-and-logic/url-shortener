// add an event listener to the shorten button for when the user clicks it

const saveURL = () => {
    fetch('http://localhost:3000/api/shorten', {
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
        var resultHTML = '<a class="result" href="' + data.shortUrl + '">'
            + data.shortUrl + '</a>';
        $('#link').html(resultHTML);
        $('#link').hide().fadeIn('slow');
    })
};

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
