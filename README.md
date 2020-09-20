## Project Name
THENextREAD

## App Description

Get help from NYT Book Reviews in choosing your next Title! This app is designed for the avid reader; a bookworm needing help in deciding which of their favorite authors' titles should be next on their reading list. It will seek input (author's first and last name) from the user; and then portray a drop down list of all works from the mentioned author that have been reviewd by the New York Times. The following information will be portayed once the user selects a particular work:

1. The title of the book
2. Publication Date
3. Summary of the book
4. Link to the New York Times Book Review article


## API and Data Sample

New York Times Books API

https://developer.nytimes.com/docs/books-product/1/overview


```{
            "url": "http://www.nytimes.com/2013/10/31/books/sycamore-row-by-john-grisham.html",
            "publication_dt": "2013-10-31",
            "byline": "JANET MASLIN",
            "book_title": "Sycamore Row",
            "book_author": "John Grisham",
            "summary": "John Grisham’s “Sycamore Row” uses many of the same characters as “A Time to Kill” to tell the story of a court case over a will.",
            "uuid": "00000000-0000-0000-0000-000000000000",
            "uri": "nyt://book/00000000-0000-0000-0000-000000000000",
            "isbn13": [
                "9780345543240",
                "9780385363150",
                "9780385366458",
                "9780385366472",
                "9780385537131",
                "9780385537926",
                "9780553393613",
                "9780553545258"
            ]
        },
```

## Wireframes

https://wireframe.cc/pro/pp/5438a40a0374652

## Minimum Viable Product

  * Form requesting the first and last name of an author
  * Selector of the chosen authors' titles (created using data from the API)
  * Section (Div) organized using flexbox, that will portray the requested data in a formatted setting
  * Messaging if data is not available for a requested author
  * Built for desktop with responsive design for cell-phone
  
## Post-Minimum Vaible Product

  * Add a second API to pull author's picture and book covers
  * Add an optin for the user to create a personlized reading list

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Sept 21| Project Approval | Incomplete
|Sept 22| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Sept 23| MVP | Incomplete
|Sept 24| Post MVP/Styling | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.
