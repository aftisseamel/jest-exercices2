import { setCurrentPage } from "../setCurrentPage";

describe('setCurrentPage function', () => {
  it('should return 1 if max is 0', () => {
    const result = setCurrentPage({ max: 0, skip: 10 });
    expect(result).toBe(1);
  });

  it('should return 1 if max is not 0 and skip is 0', () => {
    const result = setCurrentPage({ max: 10, skip: 0 });
    expect(result).toBe(1);
  });

  it('should return 1 if max is not 0 and skip is less than max', () => {
    const result = setCurrentPage({ max: 10, skip: 5 });
    expect(result).toBe(1);
  });

  it('should return 2 if max is not 0 and skip is greater than max but not evenly divisible', () => {
    const result = setCurrentPage({ max: 10, skip: 15 });
    expect(result).toBe(2);
  });

});
