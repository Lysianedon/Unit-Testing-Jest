const express = require('express');
const app = express();
const port = 8000;
const isEven = require('./functions/isEven');

// test('if n is even or odd', () => { 
//     const oddResult = isEven(3);
//     const evenResult = isEven(4);

//     expect(oddResult).toBe(false);
//     // expect(evenResult).toBe(true);
//  })


app.listen(port, () =>  console.log("Listening on port", port))