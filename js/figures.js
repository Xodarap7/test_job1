fetch('http://localhost:3000/api/figures')
.then((response) => {
return response.json();
})
.then((data) => {
console.log(data);
});



