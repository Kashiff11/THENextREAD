## Project Name
THENextREAD

## App Description

Get help from NYT Book Reviews in choosing your next Title! This app is designed for the avid reader; a bookworm in need of help in deciding which of their favorite authors' titles should be next on their reading list. It seeks input (author's first and last name) from the user; and then portrays a drop down list of all works from the mentioned author that the New York Times reviewed. The following information will be portayed once the user selects a particular work:

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
|Sept 21| Project Approval | Complete
|Sept 22| Core Application Structure (HTML, CSS, etc.) | Complete
|Sept 23| MVP | Incomplete
|Sept 24| Post MVP/Styling | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix

https://wireframe.cc/pro/pp/f3194af7d374678

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Preparing Repo | H | 3 hrs| 2.5hrs | 2.5hrs |
| Working with API | H | 3 hrs| 4hrs | 4hrs |
| Creating Form | M | 3hrs| 2hrs | 2hrs |
| Creating Selector | H | 3hrs| 2hrs | 2hrs |
| Creating HTML Template | M | 3hrs| 0hrs | 0hrs |
| Appending Data | H | 3hrs| 0hrs | 0hrs |
| CSS Styling | H | 3hrs| 0hrs | 0hrs |
| Setting Imaging for Banners & Background | L | 3hrs| 0hrs | 0hrs |
| Imnplement Responsive Design | M | 3hrs| 0hrs | 0hrs |
| Working with post MVP API | L | 3 hrs| 0hrs | 0hrs |
| Post MVP Additions | L | 4hrs| 0hrs | 0hrs |
| Deploy Site to Hosting Service | M | 3hrs| 0hrs | 0hrs |
| Total |   | 37hrs| 10.5hrs | 10.5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function yetToCome(string) {
	// here is the code that is yet to come
}
```

## Change Log
 * Upcoming Changes
