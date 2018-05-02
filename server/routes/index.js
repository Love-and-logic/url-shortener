//array of objects to be stored
const database = []


const makeid() = () => {
  let text = ''
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

console.log(makeid())

module.exports = {

  sayHey(req,res){
  res.status(200).send({message : 'Hey}')}

  postForm(req,res) {
    //store it and send it
    database.push(req.body)
    if (req.body.code.length === 0) {
      req.body.code = 'walter'
    } else if (req.body.code.length < ) {
      res.status(500).send({
        message : 'Too short!! Please enter a code that is at least 6 characters'
      })
      return
    }

    res.status(200).send({
        message : req.body.code
        message : 'Here is your long URL: ${req.body.longUrl}. Here is your short URL: ${req.body.code}'
      )}
  }
  /*
  posts: require('./posts.js'),
  comments: require('./comments.js')
  */
}
