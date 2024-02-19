import { setNumberPages } from '../setNumberPages';

describe('setNumberPages function', () => {
  it('should return 1 if total and max are both 1', () => {
    const result = setNumberPages({ total: 1, max: 1 });
    expect(result).toBe(1);
  });

  it('should return 1 if total is less than or equal to max', () => {
    const result1 = setNumberPages({ total: 5, max: 10 });
    const result2 = setNumberPages({ total: 10, max: 10 });
    expect(result1).toBe(1);
    expect(result2).toBe(1);
  });

  it('should return the correct number of pages if total is greater than max', () => {
    const result = setNumberPages({ total: 25, max: 10 });
    expect(result).toBe(2);
  });

  it('should handle fractional values correctly', () => {
    const result = setNumberPages({ total: 15, max: 7 });
    expect(result).toBe(2);
  });
});
