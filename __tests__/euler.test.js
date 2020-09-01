import Euler from './../src/euler.js';

describe('Euler', () => {

  test('should find the sum of all multiples under 1000', () => {
    const euler = new Euler();
    expect(euler.getSum()).toEqual(233168);
  });

  test('should find the sum of all even fibonacci sequence numbers under 4,000,000', () => {
    const euler = new Euler();
    
    expect(euler.getFibonacci()).toEqual(44);

  });
  
});