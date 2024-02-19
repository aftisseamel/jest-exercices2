import manageConfig from '../manageConfig';

const API_URL = {
    BASE: 'base',
    GITHUB: 'github',
  };

const fetchAuthConfigBase = {
  headers: {
    Authorization: 'Bearer token',
    'Content-Type': 'application/json',
  },
  method: 'GET',
};

const fetchAuthConfigGithub = {
  method: 'POST',
};

describe('manageConfig function', () => {
  it('should return the fetchAuthConfig unchanged when apiName is API_URL.BASE', () => {
    const result = manageConfig(API_URL.BASE, fetchAuthConfigBase);
    expect(result).toEqual(fetchAuthConfigBase);
  });

  it('should return the fetchAuthConfig without headers when apiName is not API_URL.BASE', () => {
    const result = manageConfig(API_URL.GITHUB, fetchAuthConfigBase);
    expect(result).toEqual({ method: 'GET' });
  });

  it('should return the fetchAuthConfig without headers when apiName is not API_URL.BASE and headers are not provided', () => {
    const result = manageConfig(API_URL.GITHUB, fetchAuthConfigGithub);
    expect(result).toEqual({ method: 'POST' });
  });
});
