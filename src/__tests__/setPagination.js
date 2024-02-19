import { setCurrentPage } from '../setCurrentPage';
import { setNumberPages } from '../setNumberPages';
import { setPagination } from '../setPagination';

jest.mock('../setCurrentPage', () => ({
  setCurrentPage: jest.fn(() => 1),
}));

jest.mock('../setNumberPages', () => ({
  setNumberPages: jest.fn(() => 1),
}));

describe('setPagination function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the correct pagination object with default values', () => {
    const result = setPagination({});
    expect(result).toEqual({
      total: 1,
      numberItems: 1,
      numberPages: 1,
      currentPage: 1,
    });
  });

  it('should return the correct pagination object with custom values', () => {
    const result = setPagination({ total: 100, skip: 10, max: 20 });
    expect(result).toEqual({
      total: 100,
      numberItems: 20,
      numberPages: 1,
      currentPage: 1,
    });
  });

  it('should call setCurrentPageFn and setNumberPagesFn with correct arguments', () => {
    setPagination({ total: 50, skip: 10, max: 25 });
    expect(setCurrentPage).toHaveBeenCalledWith({ max: 25, skip: 10 });
    expect(setNumberPages).toHaveBeenCalledWith({ total: 50, max: 25 });
  });
});
