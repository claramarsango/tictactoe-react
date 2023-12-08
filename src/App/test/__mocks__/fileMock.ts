import { jest } from '@jest/globals';

export const cryptoMock = jest.mock('crypto', () => {
  return {
    randomUUID: jest.fn().mockReturnValue(`mockUUID`),
  };
});
