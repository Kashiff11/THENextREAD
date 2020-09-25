document.querySelector('.first').addEventListener('click', clearPrevInfo);
document.querySelector('.last').addEventListener('click', clearPrevInfo);
document.querySelector('.first').addEventListener('click', emptyOptions);
document.querySelector('.last').addEventListener('click', emptyOptions);
document.querySelector('button').addEventListener('click', createVariables);

function createVariables(e) {  //creates variables from the user's inpt to get data form the API
  e.preventDefault();
  let firstName = document.querySelector('.first').value;
  let lastName = document.querySelector('.last').value;
  getData(firstName, lastName);
}

async function getData(firstName, lastName) {  //pulls all needed data from API
  emptyOptions();
  try {
    const url = `https://api.nytimes.com/svc/books/v3/reviews.json?author=${firstName}+${lastName}&api-key=eKABUa2Lya4MPuxvFBl9h5919D3o8OYn`
    const response = await axios.get(url);
    let dataList = [];
    let titleList = [];
    if (response.data.results.length == 0) {
      noReviews();
    } else {
      for (let i = 0; i < response.data.results.length; i++) {
        let titleObject = {
          book: response.data.results[i].book_title,
          summary: response.data.results[i].summary,
          publicationDate: response.data.results[i].publication_dt,
          reviewAuthor: response.data.results[i].byline,
          reviewLink: response.data.results[i].url,
        };
        dataList.push(titleObject);
      }
      document.querySelector('.buttonTwo').addEventListener('click', optionData);
      function optionData(e) {
        e.preventDefault();
        let optionValue = document.querySelector('select').value;
        dataObject(optionValue, dataList);
      }
      for (let i = 0; i < response.data.results.length; i++) {
        let title = response.data.results[i].book_title;
        titleList.push(title);
      }
    }
    createOption(titleList);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

function emptyOptions() {  //empties previously selected options
  const previousOptions = document.querySelector('select');
  while (previousOptions.hasChildNodes()) {
    previousOptions.removeChild(previousOptions.firstChild);
  }
}

function noReviews(arr) {  //creates an option informing user that their author hasn't been reviewed by the NYT
  clearPrevInfo();
  const select = document.querySelector('select');
  const option = document.createElement('option');
  option.textContent = `No book reviews at the NYT`;
  select.append(option);
}

function createOption(arr) {  //uses the array of titles to create a selection of options
  clearPrevInfo();
  const select = document.querySelector('select');
  return arr.forEach((title) => {
    const option = document.createElement('option');
    option.value = `${title}`;
    option.textContent = `${title}`;
    select.append(option);
  });

}

function clearPrevInfo() {     //clears out previously added information
  let title = document.querySelector('#selected-title');
  title.textContent = ``;
  let summary = document.querySelector('#summary');
  summary.textContent = ``;
  let pubDate = document.querySelector('#publication-date');
  pubDate.textContent = ``;
  let reviewer = document.querySelector('#review-author');
  reviewer.textContent = ``;
  let review = document.querySelector('#review-link');
  review.textContent = ``
}

function dataObject(a, arr) {  //compares the user's selecetd title to the array of objects
  let screenObject = [];       //when title matches to one of the objects ...
  for (let i = 0; i < arr.length; i++) {
    if (a == arr[i].book) {
      screenObject.push(arr[i]);
      printObject(screenObject);   ///it sends it to printObject which displays the information
    }
  }
}

function printObject(screenObject) {  //displays the requested title's information on screen

  let title = document.querySelector('#selected-title');
  let theBook = screenObject[0].book;
  title.textContent = `Title: ${theBook}`;

  let summary = document.querySelector('#summary');
  let theSummary = screenObject[0].summary;
  summary.textContent = theSummary;

  let pubDate = document.querySelector('#publication-date');
  let thePubDate = screenObject[0].publicationDate;
  pubDate.textContent = `Publication Date: ${thePubDate}`;

  let reviewer = document.querySelector('#review-author');
  let theReviewer = screenObject[0].reviewAuthor;
  reviewer.textContent = `Reviewed by: ${theReviewer}`;

  let review = document.querySelector('#review-link');
  let theReview = screenObject[0].reviewLink
  review.href = theReview;
  review.textContent = `${theReviewer}'s review at the NYT.`
}
