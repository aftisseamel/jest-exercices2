import setConfirmClassModifier from '../setConfirmClassModifier';

describe('setConfirmClassModifier function', () => {
  it('should return the default classModifier when hasErrors is false', () => {
    const result = setConfirmClassModifier(false);
    expect(result).toBe('confirm success');
  });

  it('should return the default classModifier with "disabled" suffix when hasErrors is true', () => {
    const result = setConfirmClassModifier(true);
    expect(result).toBe('confirm disabled');
  });

  it('should return the classModifier with "disabled" suffix when hasErrors is true and a custom classModifier is provided', () => {
    const result = setConfirmClassModifier(true, 'custom');
    expect(result).toBe('custom disabled');
  });

  it('should return the classModifier with "success" suffix when hasErrors is false and a custom classModifier is provided', () => {
    const result = setConfirmClassModifier(false, 'custom');
    expect(result).toBe('custom success');
  });
});
