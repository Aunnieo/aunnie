const outputElement = document.getElementById('terminalOutput');
const demoLines = [
  'Enter an integer, an operation, and another integer',
  '',
  '> 5 + 3',
  '8',
  '',
  'Sessions Over!.',

  'Enter an integer, an operation, and another integer',
  '',
  '> 5 + a',
  'Try again, Invalid Integer.',
  '',
  '> 100201 + -2516182',
  '-2415981',
  'Sessions Over!.'
  
];

let lineIndex = 0;

function typeLine(line, callback) {
  let charIndex = 0;
  function typeCharacter() {
    if (charIndex < line.length) {
      outputElement.innerHTML += line.charAt(charIndex);
      charIndex++;
      setTimeout(typeCharacter, 30); // Adjust typing speed here
    } else {
      outputElement.innerHTML += '\n';
      callback();
    }
  }
  typeCharacter();
}

function runDemo() {
  if (lineIndex < demoLines.length) {
    typeLine(demoLines[lineIndex], function() {
      lineIndex++;
      setTimeout(runDemo, 500); // Pause between lines
    });
  }
}

runDemo();
