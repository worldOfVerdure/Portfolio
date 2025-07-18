const descriptions = [
  [
    `This project was completed after the Rotate Cube project with a continuation of exploring the CSS
  perspective property and 3d transformations. There was an initial challenge of getting the front
  and back cards to rotate seamlessly about the y-axis. Realizing that I could take both cards
  out of their respective flow with absolute positioning and with the CSS property backface-visibility,
  hiding the back of a 3d transformed object, I found my solution.`,

  `The Match Game was also my first implementation of a timer. To build this, I used the
  asynchronous Window method, setInterval. Being a project dealing with many images, I became
  curious about responsive images and was led to the HTML attributes srcset and sizes, where I
  supplied the browser with my image sizes and breakpoints, allowing the browser, based on the
  client's pixel density to serve the most appropriate image from the selection I offered.`,

  `My favorite highlight of this project was getting to implement a Knuth sort to achieve the fastest
  runtime for randomly sorting an array of images with a O(n).`
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

    `While the project taught me the objectives, I wanted to push myself with something slightly more
    complex; hence, No Dice. The project became a game where players tried to get as close to 21 as
    possible with the ability to hold. Thus different scenarios of player scores and when they hold
    needed to be considered.`,

    `Unfortunately, this was one of my first projects, and in my eagerness, I didn't start with
    drawing designs nor flow charts for the logic. I ended up with code that constantly needed
    logical bugfixes. I was happy that after some months taking a break from this, I was able to
    come back with more experience and fresh eyes, and drew out the flow of logic and cleaned all the
    bugs.`
  ],
  [
    `The Resume Builder stemmed from my desire to have full control of the visuals of my Resume
    while also being able to quickly change the text. This project's goal is to mimic the size of
    printable paper and be saved as a pdf. This is a rare instance where responsiveness was not an
    objective for me. I had been learning TypeScript and TSX in my spare time, so when I encountered
    a runtime bug, where my prop being passed resulted in undefine, I switched the React project to
    TS. The result was that  was quickly able to locate my issue. This project was also my first
    time using absolute units which I used to achieve a near A4 sized paper. This project gave me
    hands on experience with how TS can speed up development by pointing out bugs in a more quick
    and precise manner.`
  ]
];

export default descriptions;
