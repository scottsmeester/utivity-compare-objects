/**
 * Function average should take inputs as an object with the following allowed paramaters:
 *  - Flavor
 *  - Location
 *  - Date (object)
 * It should then look through the inputs and find the average number of scoops that match the inputs
 *
 * @params {object} params - Input parameters
 * @returns {float} Average number of scoops that meets the parameters
 */

 var input = [
    { 
  flavor: "Chocolate",
  scoops: 7,
  location: "Little Man",
  date: Date.parse("2014-11-10"),
    },
    { 
	flavor: "Chocolate",
	scoops: 2,
	location: "Little Man",
	date: Date.parse("2014-11-10"),
    },
    {
	flavor: "Vanilla",
	scoops: 4,
	location: "Sweet Cow",
	date: Date.parse("2014-11-9"),
    },
    { 
	flavor: "Strawberry",
	scoops: 1,
	location: "Little Man",
	date: Date.parse("2014-11-7"),
    },
    {
	flavor: "Chocolate",
	scoops: 19,
	location: "Mike's Ice Cream Fair",
	date: Date.parse("2014-10-1"),
    },
    {
	flavor: "Vanilla",
	scoops: 3,
	location: "Little Man",
	date: Date.parse("2014-11-10"),
    }
];

var params =
{
	flavor: 'Chocolate',
  location: 'Little Man'
};

var average = function(arr, toCheck) {

  var filtered = _.where(arr,toCheck);

  var scoopCount = filtered.reduce(function(total, scoops){
      return total + scoops.scoops;
  },0);

  return scoopCount / filtered.length;
};

console.log(average(input,params));


