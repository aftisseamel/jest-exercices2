// computeDataError.test.js
import { computeDataError } from '../computeDataError';
import { setResponseError } from '../setResponseError';

jest.mock('../setResponseError', () => ({
  setResponseError: jest.fn(),
}));

console.log("setResponseError ISSSSS", setResponseError);

const mockResponse = {
  status: 404,
  json: jest.fn().mockResolvedValue({ error: 'Not found' }),
};

describe('computeDataError function', () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  it('should call setResponseError with response data and status when response.json() succeeds', async () => {
    await computeDataError(mockResponse);
    expect(setResponseError).toHaveBeenCalledWith({
      response: { error: 'Not found', status: 404 },
    });
  });

  it('should call setResponseError with anomaly label and status when response.json() fails', async () => {
    mockResponse.json.mockRejectedValueOnce('Error parsing JSON');
    await computeDataError(mockResponse);
    expect(setResponseError).toHaveBeenCalledWith({
      response: {
        anomaly: { label: 'Erreur: Elément non trouvé' },
        status: 404,
      },
    });
  });
  
});
