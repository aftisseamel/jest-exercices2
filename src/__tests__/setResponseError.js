import { setResponseError, STATUS_API, STATUS_HTTP_MESSAGES } from '../setResponseError';

describe('setResponseError function', () => {
  it('should return the correct error object for a warning status', () => {
    const response = {
      status: STATUS_API.WARNING,
      anomaly: { label: 'Warning!' },
    };
    const result = setResponseError({ response });
    expect(result).toEqual({
      label: 'Warning!',
      detail: '',
      type: 'danger',
      iconName: 'alert',
    });
  });

  it('should return the correct error object for an error status', () => {
    const response = {
      status: STATUS_API.ERROR,
      anomaly: { label: 'Error!' },
    };
    const result = setResponseError({ response });
    expect(result).toEqual({
      label: 'Error!',
      detail: '',
    });
  });

  it('should return an empty object for other status codes', () => {
    const response = {
      status: STATUS_API.SUCCESS,
      anomaly: { label: 'Success!' },
    };
    const result = setResponseError({ response });
    expect(result).toEqual({});
  });
});

describe('STATUS_HTTP_MESSAGES constant', () => {
  it('should contain the correct message for each status code', () => {
    expect(STATUS_HTTP_MESSAGES[STATUS_API.SUCCESS]).toBe('Succès: La requête a réussi');
    expect(STATUS_HTTP_MESSAGES[STATUS_API.CREATED]).toBe('Succès: Création réussie');
  });
});
