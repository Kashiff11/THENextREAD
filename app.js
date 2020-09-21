//Endpoint: https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=eKABUa2Lya4MPuxvFBl9h5919D3o8OYn

async function getData(firstName, lastName) {
  try {
    const url = `https://api.nytimes.com/svc/books/v3/reviews.json?author=${firstName}+${lastName}&api-key=eKABUa2Lya4MPuxvFBl9h5919D3o8OYn`
    const response = await axios.get(url);
    let list = [];
    for (let i = 0; i < response.data.results.length; i++) {
      list.push(response.data.results[i].book_title);
    }
    console.log(list)
    createOption(list);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

function createVariables(e) {
  e.preventDefault();
  let firstName = document.querySelector('.first').value;
  let lastName = document.querySelector('.last').value
  getData(firstName, lastName)
}

document.querySelector('button').addEventListener('click', createVariables);

function createOption(arr) {
  emptyOptions();
  const select = document.querySelector('select');
  return arr.forEach((title) => {
    const option = document.createElement('option');
    option.value = `${title}`;
    option.textContent = `${title}`;
    select.append(option);
  })
}

function emptyOptions() {
  const previousOptions = document.querySelector('select');
  while (previousOptions.hasChildNodes()) {
    previousOptions.removeChild(previousOptions.firstChild);
  }
}







