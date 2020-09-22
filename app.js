async function getData(firstName, lastName) {
  try {
    const url = `https://api.nytimes.com/svc/books/v3/reviews.json?author=${firstName}+${lastName}&api-key=eKABUa2Lya4MPuxvFBl9h5919D3o8OYn`
    const response = await axios.get(url);

    let dataList = [];
    let titleList = [];

    if (response.data.results.length == 0) {
      noReviews()
      console.log(`nope`)
    } else {

      emptyTitleInfo();   //empties previous title info or "no review" messaging

      for (let i = 0; i < response.data.results.length; i++) {

        let titleObject = {
          book: response.data.results[i].book_title,
          summary: response.data.results[i].summary,                      //creates an object of data
          publicationDate: response.data.results[i].publication_dt,       //to push into the array
          reviewAuthor: response.data.results[i].byline,
          reviewLink: response.data.results[i].url,
        };
        dataList.push(titleObject);
      }
      console.log(dataList)


      for (let i = 0; i < response.data.results.length; i++) {

        let title = response.data.results[i].book_title;
        titleList.push(title);
      }
      console.log(titleList);
    }
    createOption(titleList);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

function emptyOptions() {
  const previousOptions = document.querySelector('select');         //empties previous options
  while (previousOptions.hasChildNodes()) {
    previousOptions.removeChild(previousOptions.firstChild);
  }
}

function noReviews(arr) {
  emptyOptions();
  emptyTitleInfo();
  const titleInfo = document.querySelector('.title-information');
  const h2 = document.createElement('h2');
  titleInfo.append(`Sorry, this author has not been reviewd by the NYT`);
}

function emptyTitleInfo() {
  const previousTitleInfo = document.querySelector('.title-information')      //empties previous info 
  while (previousTitleInfo.hasChildNodes()) {
    previousTitleInfo.removeChild(previousTitleInfo.firstChild);
  }
}
function createVariables(e) {

  e.preventDefault();                                                 //creates variables from user input
  let firstName = document.querySelector('.first').value;             //and passes them to getData function
  let lastName = document.querySelector('.last').value
  getData(firstName, lastName)

}

document.querySelector('button').addEventListener('click', createVariables);

function createOption(arr) {

  emptyOptions();
  const select = document.querySelector('select');                //creates the options list
  return arr.forEach((title) => {
    const option = document.createElement('option');
    option.value = `${title}`;
    option.textContent = `${title}`;
    select.append(option);
  });

}

document.querySelector('select').addEventListener('change', optionData);

function optionData(e) {
  e.preventDefault();
  const optionValue = document.querySelector('select').value
  console.log(optionValue);
}