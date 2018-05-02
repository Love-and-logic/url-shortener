module.exports = {

  sayHey(req,res){
  res.status(200).send(
    {
      message : 'Hey}'
    )}


  postForm(req,res) {
    console.log(req.body)

    res.status(200).send(
      {
        message : 'Here is your long URL: ${req.body.longUrl}. Here is your short URL: ${req.body.code}'
      )}
  }
  /*
  posts: require('./posts.js'),
  comments: require('./comments.js')
  */
}
