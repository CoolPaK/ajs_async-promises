import json from '../js/parser.js';

describe('json parser', () => {
  it('should parse ArrayBuffer to string correctly', async () => {
    const data = new Uint16Array([67, 97, 109, 101]).buffer; // "Game" in UTF-16
    const result = await json(data);
    expect(result).toBe('Came');
  });

  it('should throw an error if data is not valid', async () => {
    const invalidInput = undefined;

    await expect(json(invalidInput)).resolves.toEqual("");

    await expect(json(null)).resolves.toEqual("");
  });
});