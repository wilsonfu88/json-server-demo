let Mock  = require('mockjs');
let Random = Mock.Random;

console.log(Random.city());          //=> 珠海市
console.log(Random.cname());         //=> 韩桂英
console.log(Random.date());          //=> 2007-08-05
console.log(Mock.mock({              //=> {stars: '★★★★★'}
  "stars|1-10": "★"
}));
Random.image('200x100', '#4A7BF7', 'hello')
  //=>  见下图