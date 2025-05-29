const descriptions = [
  [
    `This project was completed after the Rotate Cube project with a continuation of exploring the CSS
  perspective property and 3d transformations. There was an initial challenege of getting the front
  and back cards to rotate seemlessly about the y-axis. Realizing that I could take both cards
  out of their respective flow with absolute potioning and with the CSS property backface-visibility,
  hiding the back of a 3d transformed object, I found my solution.`,

  `The Match Game was also my first implementation of a timer. To build this, I used the
  asynchronous Window method, setInterval. Being a project dealing with many images, I became
  curious about responsive images and was led to the HTML attributes srcset and sizes, where I
  supplied the browser with my image sizes and breakpoints, allowing the browser, based on the
  client's pixel density to serve the most appropriate image from the selection I offered.`,

  `My favorite highlight of this project was getting to implement a Knuth sort to acheive the fatest
  runtime for randomly sorting an array of images with a O(n). I chose frontend as a means of seeing
  what I was building. Getting to utilize the computer science I had learnt from my time in college
  was thrilling for me.`
  ],
  [
    `The Rotate Cube project was inspired after reading from multiple sources on the capabilities of
    CSS. I had been inspired by cards, that when moused over, would move in 3d space in response.
    I set out to make a rotating cube demo to better learn 3d transformations in CSS. The key to
    making any 3d object with CSS is recognizing which parent element is the "scene". That which
    contains the perspective.`,

    `This project further helped me better understand the need to group similar control fields and
    the change event as well as keyframes and simple animations. Of course stacking context was an
    important concept during the creation of this rotating cube.`
  ],
  [
    `No Dice began as a simple Udemy project where the goal was that both players had a button each
    to click that would roll a dice. The instructor was seeking us to understand click events, 
    using the built in document interface to access elements in the DOM tree and deliver the correct
    dice image (1-6) as well as compare the scores, with highest winning.`,

    `While the project taught me the objectives, I want to push myself with something slightly more
    complex; hence, No Dice. The project became a game where players tried to get as close to 21 as
    possible with the ability to hold. Thus different scenarios of player scores and when they hold
    needed to be considered.`,

    `Unfortunately, this was one of my first projects, and in my eagerness I didn't start with
    drawing designs nor flow charts for the logic. I ended up with code that constantly needed
    logical bugfixes. I was happy that after some months taking a break from this, i was able to
    comeback with more experience and fresh eyes, and drew out the flow of logic and cleaned all the
    bugs.`
  ],
  [
    `The Task Tracker app was a Udemy project intended to be done by ourselves. Using the images and
    specifications giving, I set out to make this task tracking app. The example shown to me was
    clearly made for Desktop with a mobile-first approach not considered. Responsiveness is
    important to me, so I set out making a mobile-first version of the site with an animation that
    slides a tab on and off the screen. The project further differed with the instructor using
    Tailwind and myself using Styled-Components.`,

    `This project was more of a capstone project to reienforce lifting state, useState, useRef,
    list rendering and keeping components reuesable. What is truly interesting to me about this
    project is that this project will lend itself to learning backend. I began to work with Node.js
    as my local JS runtime and Express.js as my application server. I took a break from backend to
    instead focus on frontend technologies such as Typescript. I intend on finishing this project
    purely as a static site with intentions of setting up my own backend and changing the jsx files
    to tsx`
  ]
];

export default descriptions;
