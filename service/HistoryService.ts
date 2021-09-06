import { IHistoryItem } from '~/store/types';
import { Sites } from '~/types';
import { randomBetween, randomDate } from '~/utils';

export class HistoryService {
  getList() {
    return this.generateList(50);
  }

  private generateList(length: number) {
    const list: IHistoryItem[] = [];
    let initialNumber = 79271234567;
    let initialId = 1;

    for (let i = 0; i < length; i++) {
      list.push(this.generateItem(initialNumber++, initialId++));
    }

    return list;
  }

  private generateItem(number: number, id: number): IHistoryItem {
    return {
      site: this.generateSite(),
      date: randomDate('01-01-2019').toLocaleString().replace(', ', ' в '),
      message: this.generateMessage(),
      number,
      id,
    };
  }

  private generateSite(): Sites {
    const random = randomBetween(0, 100);

    if (random > 66) return 'avito';
    if (random > 33) return 'yandex';

    return 'OK';
  }

  private generateMessage(): string {
    const initial = 'Ваш код для регистрации на Авито. Никому его не говорите это ';
    const maxLength = 500;
    const length = randomBetween(0, maxLength);
    let message = initial;

    while (message.length < length) {
      message += initial;
    }

    return message;
  }
}
