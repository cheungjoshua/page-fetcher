const request = require("request");
const fs = require("fs");
const url = process.argv[2];
const html = process.argv[3];

console.log(url, html);

request(`${url}`, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  // console.log("body:", body); // Print the HTML for the Google homepage.

  fs.writeFile(`${html}`, body, (err) => {
    if (err) {
      console.error(err);
    }
    fs.stat(`${html}`, (err, stats) => {
      if (err) {
        console.error(err);
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${html}`);
      // we have access to the file stats in `stats`
    });
  });
});
