//uses backticks ` not '****
//ReadMe template literal
const generateReadme = (title, description) => {
    return `
       # ${title}
      ## Description 
      ${description}
  `; 
 };

 
 module.exports = generateReadme;