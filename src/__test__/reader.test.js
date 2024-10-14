import read from '../js/reader.js';

describe('reader', () => {
  it('should read file data and return ArrayBuffer', async () => {
    const data = await read();
    expect(data).toBeInstanceOf(ArrayBuffer);
  });

  it('should throw an error when reading fails', async () => {
    jest.spyOn(global, 'setTimeout').mockImplementation((cb) => cb());

    await expect(read()).resolves.not.toThrow();
  });
});