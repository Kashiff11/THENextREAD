document.querySelector('.first').addEventListener('click', clearPrevInfo);
document.querySelector('.last').addEventListener('click', clearPrevInfo);
document.querySelector('button').addEventListener('click', createVariables);

async function getData(firstName, lastName) {
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
function emptyOptions() {
  const previousOptions = document.querySelector('select');
  while (previousOptions.hasChildNodes()) {
    previousOptions.removeChild(previousOptions.firstChild);
  }
}

function noReviews(arr) {
  clearPrevInfo();
  const select = document.querySelector('select');
  const option = document.createElement('option');
  option.textContent = `No Titles Reviewed by the NYT`;
  select.append(option);
  }

function createVariables(e) {
  e.preventDefault();
  let firstName = document.querySelector('.first').value;
  let lastName = document.querySelector('.last').value;
  getData(firstName, lastName);
}

function createOption(arr) {
  clearPrevInfo();
  const select = document.querySelector('select');
  return arr.forEach((title) => {
    const option = document.createElement('option');
    option.value = `${title}`;
    option.textContent = `${title}`;
    select.append(option);
  });
  
}
function printObject(screenObject) {

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

function dataObject(a, arr) {
  let screenObject = [];
  for (let i = 0; i < arr.length; i++) {
    if (a == arr[i].book) {
      screenObject.push(arr[i]);
      printObject(screenObject);
    }
  }
}

function clearPrevInfo() {
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
