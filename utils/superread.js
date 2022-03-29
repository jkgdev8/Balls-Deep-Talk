// function to generate markdown for README
function generateRead(answers) {
  return  `
  ## Favorite Sport!
  ${answers.pick}
  ## Favorite Team!
  ${answers.team}

  ## About The Team
  ${answers.About}
  
  ## Table of Contents
  1. [Favorite Team](#pick)
  2. [About](#About) 
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
  
 
  ## License
  ${answers.License}
  ## Contributing
  ${answers.Contributing}
  ## Tests
  ${answers.Tests}
  ## Questions
  ${answers.Questions}
  ${answers.LinkedIn}
  ${answers.Email}
  
`;
}

module.exports = {generateRead};