import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read(); // получаем Promise с данными
      const value = await json(data); // получаем Promise с распарсенными данными
      return value; // возвращаем распарсенные данные
    } catch (error) {
      throw new Error('Ошибка загрузки данных'); // обработка ошибок
    }
  }
}