# Homework05

## Work Day Scheduler

This schedule tool was developed using HTML, CSS, javascript, jQuery, and bootstrap. 

The HTML was layed out in a way that would allow for time blocks by the hour with a location to write notes, and save them to local storage. The css was started using bootstrap classes, but there were some changes made with a local css file to override any styling that was not desired from bootstrap. The javascript and moment were used to change classes in the html based on time criteria. Military time was used when comparing the current time to the time blocks. At each page reload, the current time would impact the colors of the time blocks. Other functions within the javascript file focused on event listeners for the save buttons in order to capture any text inputs from the user and save that input into local storage. Finally, to ensure that the user input was not cleared when the page was reloaded, or closed, javascript was used to re-populate the text input areas at the associated times. 

The functionality of the page is listed below: 

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
Here is a link to the application: https://sandra-marr.github.io/005_Work-Day-Scheduler/

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./assets/WDS.gif)
## MIT License

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

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

&copy;2021 Sandra Marr

