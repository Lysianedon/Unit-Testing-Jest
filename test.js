const isEven = require('./functions/isEven');


test('if n is odd', () => { 

    const oddResult = isEven(3);
    expect(oddResult).toBe(false);

 })

 test('if n is even', () => { 

    const evenResult = isEven(4);
    expect(evenResult).toBe(true);
 })

 test('if n is a string', () => { 
    const result = isEven("nombre");
    expect(result).toBe(false);
 })

 test('if n is a string and contains a number', () => { 

    const result = isEven("12");
    expect(result).toBe(true);
 })

