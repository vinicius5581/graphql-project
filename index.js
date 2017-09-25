const { graphql } = require('graphql');
const readline = require('readline');

const mySchema = require('./schema/main.js');

const rli = readline.createInterface({
  input: process.stdin,
  outpu: process.stdout
});

rli.question('Client Request: ', inputQuery => {
  graphql(mySchema, inputQuery).then(result => {
      console.log('Server answer :', result.data);
  });

  rli.close();
});
