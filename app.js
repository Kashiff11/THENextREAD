//Endpoint: https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=eKABUa2Lya4MPuxvFBl9h5919D3o8OYn

async function getData(firstName, lastName) {
  try {
    const url = `https://api.nytimes.com/svc/books/v3/reviews.json?author=${firstName}+${lastName}&api-key=eKABUa2Lya4MPuxvFBl9h5919D3o8OYn`
    const response = await axios.get(url);
    console.log(response.data.results);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

function practiceFunction(e) {
  e.preventDefault();
  let firstName = document.querySelector('.first').value;
  let lastName = document.querySelector('.last').value
  console.log(`Author's name: ${firstName} ${lastName}`);
  getData(firstName, lastName)
}

document.querySelector('button').addEventListener('click', practiceFunction);








