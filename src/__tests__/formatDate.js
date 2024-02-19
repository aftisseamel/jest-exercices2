import { formatDate, isValidDate, setDate } from '../formatDate'; // Assurez-vous d'importer correctement vos fonctions depuis votre fichier source

describe('isValidDate function', () => {
  it('should return true for a valid date', () => {
    const result = isValidDate('2022-02-20');
    expect(result).toBe(true);
  });

  it('should return false for an empty string', () => {
    const result = isValidDate('');
    expect(result).toBe(false);
  });

  it('should return false for null or undefined', () => {
    const resultNull = isValidDate(null);
    const resultUndefined = isValidDate(undefined);
    expect(resultNull).toBe(false);
    expect(resultUndefined).toBe(false);
  });

});

describe('formatDate function', () => {
  it('should format the date correctly with default locale and options', () => {
    const result = formatDate('2022-02-20');
    expect(result).toBe('20/02/2022');
  });

  it('should format the date correctly with specified locale and options', () => {
    const result = formatDate('2022-02-20', 'en-US', { weekday: 'long' });
    expect(result).toBe('Sunday, February 20, 2022');
  });

});

describe('setDate function', () => {
  it('should return the formatted date if date is valid', () => {
    const result = setDate({ date: '2022-02-20' });
    expect(result).toBe('20/02/2022');
  });


});
