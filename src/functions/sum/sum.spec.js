const sum = require('./sum')

test('should add two numbers together', () => { 
    expect(sum(1, 2)).toBe(5) 
})

test('result should be undefined witht two strings', () => { 
    expect(sum('a', 'b')).toBe(undefined) 
})