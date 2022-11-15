console.log("<<< Starting >>>"); // 1
// This is called Synchronusly and is the first one, that's why is showing first

const p2 = new Promise((resolve, reject) => {
    // This a promise but nothing is being resolved, that means that everything that's inside is being called Synchronusly
    // that's why they are called in second and thir place
  console.log("First");// 2
  console.log("Last"); // 3
});

p2.then((res) => {
    //nothing is being resolved
  console.log(res); 
});

console.log("<<< Ending >>>");// 4 
// This is being called Synchronusly and it's in the fourth position and all of the other ones were called Synchronusly
// that means is gonna be in the fourth position


