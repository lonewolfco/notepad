# 📝 Note Pad
[GitHub Repo](https://github.com/lonewolfco/notepad)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://lo-notepad.herokuapp.com/)  



## Table of Contents
- [Description](#description)
- [User Story](#userstory)
- [Acceptance Criteria](#ac)
- [Languages Used](#languages)
- [Mock-Up](#mockup)
- [Report a Bug](#bug)
- [Questions?](#questions)
- [License](#license)

---

## [Description](#description)
<a name="description"></a>
Note Pad can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.



## [User Story](#userstory)
<a name="userstory"></a>

```
AS A computer user
I WANT to be able to write and save notes through a web application
SO THAT I can digitally organize my thoughts and keep track of tasks I need to complete
```


## [Acceptance Criteria](#ac)
<a name="ac"></a>
```
GIVEN a note-taking application
WHEN I open the Note Pad
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## [Languages Used](#languages)

<a name="languages"></a>
HTML, CSS, Bootstrap Framework, JavaScript, Express.js, Node.Js,  NPM Packages including fs & uuid.


## [Mock-Up](#mockup)
<a name="mockup"></a>

The following images show the web application's appearance and functionality:

![Note Pad/s HomePage](./Assets/homepage.png)

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/notes.png)


![Once a note is saved, it will appear on the left hand side ready to be accessed again later, or deleted by clicking the trash can icon.](./Assets/saved.png)




- - -
## [License](#license)
<a name="mockup"></a>
[![License: MIT](https://img.shields.io/badge/License-MIT-lightblue.svg)](https://opensource.org/licenses/MIT)  

© 2022 LoneWolfCo
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
