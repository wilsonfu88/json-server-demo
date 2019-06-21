let Mock  = require('mockjs');
let Random = Mock.Random;

module.exports = function() {
  var data = { users: [] }
  // Create 1000 users
  for (var i = 0; i < 25; i++) {
    data.users.push({ id: i, 
	name: Random.cname(),
	birthday:Random.date(),
	city:Random.city(),
	country:Random.county(true),
	image:Random.image('500x500', Random.color(), Random.word(2,6)),
	views:Random.integer(10,5000)
	})
  }
  //console.log(data);
  return data
}