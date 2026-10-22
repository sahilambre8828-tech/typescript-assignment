// Q12. Promise Chaining
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000);
});

promise
  .then(num => {
    console.log("Initial value:", num);
    return num * 2;          // 20
  })
  .then(num => {
    console.log("After multiplying by 2:", num);
    return num + 5;          // 25
  })
  .then(result => {
    console.log("Final result:", result);
  })
  .catch(error => console.log("Error:", error));
