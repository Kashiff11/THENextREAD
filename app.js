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
        console.log(optionValue);
        console.log(dataList)
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
  emptyOptions();
  const titleInfo = document.querySelector('.title-information');
  titleInfo.textContent = `Sorry, this author has not been reviewd by the NYT`;
}
function emptyTitleInfo() {
  const previousTitleInfo = document.querySelector('.title-information');
  while (previousTitleInfo.hasChildNodes()) {
    previousTitleInfo.removeChild(previousTitleInfo.firstChild);
  }
}
function createVariables(e) {
  e.preventDefault();
  let firstName = document.querySelector('.first').value;
  let lastName = document.querySelector('.last').value;
  getData(firstName, lastName);
}
function createOption(arr) {
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
  title.textContent = theBook;

  let summary = document.querySelector('#summary');
  let theSummary = screenObject[0].summary;
  summary.textContent = theSummary;

  let pubDate = document.querySelector('#publication-date');
  let thePubDate = screenObject[0].publicationDate;
  pubDate.textContent = thePubDate;

  let reviewer = document.querySelector('#review-author');
  let theReviewer = screenObject[0].reviewAuthor;
  reviewer.textContent = theReviewer;

  let review = document.querySelector('#review-link');
  let theReview = screenObject[0].reviewLink
  review.textContent = theReview
    
  
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
