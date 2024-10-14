import GameSavingLoader from '../js/GameSavingLoader.js';
import read from '../js/reader.js';
import json from '../js/parser.js';

jest.mock('../js/reader.js');
jest.mock('../js/parser.js');

describe('GameSavingLoader', () => {
  it('should load game saving correctly', async () => {
    const mockData = new ArrayBuffer(42);
    read.mockResolvedValue(mockData);
    json.mockResolvedValue({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    });

    const saving = await GameSavingLoader.load();

    expect(saving).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    });
  });

  it('should reject if reading fails', async () => {
    read.mockRejectedValue(new Error('Ошибка чтения файла'));

    await expect(GameSavingLoader.load()).rejects.toThrow('Ошибка загрузки данных');
  });

  it('should reject if parsing fails', async () => {
    const mockData = new ArrayBuffer(42);
    read.mockResolvedValue(mockData);
    json.mockRejectedValue(new Error('Ошибка парсинга'));

    await expect(GameSavingLoader.load()).rejects.toThrow('Ошибка загрузки данных');
  });
});