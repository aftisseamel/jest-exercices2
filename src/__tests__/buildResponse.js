import { buildResponse } from '../buildResponse';

jest.mock('../computeDataError', () => ({
  computeDataError: jest.fn(),
}));

const mockResponse = {
  status: 200,
  json: jest.fn().mockResolvedValue({ data: 'mocked data' }),
};

describe('buildResponse function', () => {
  it('should return the response data when status is SUCCESS and config does not specify blob or text', async () => {
    const config = {};
    const response = await buildResponse(mockResponse, config);
    expect(response).toEqual({
      data: 'mocked data',
      statusHttp: 200,
    });
  });
});