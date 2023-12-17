import { jest } from '@jest/globals';

export const cryptoMock = Object.defineProperty(window, 'crypto', {
  value: { randomUUID: jest.fn().mockReturnValue(`mockUUID`) },
});

jest.mock('canvas-confetti', () => {
  const confetti = jest.fn();
  return confetti;
});
