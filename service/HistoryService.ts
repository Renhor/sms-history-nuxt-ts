import { IHistoryItem } from '~/store/types';
import { DateString, Sites } from '~/types';

export class HistoryService {
  getList() {
    return this.generateList(10);
  }

  private generateList(length: number) {
    const list: IHistoryItem[] = [];
    const site: Sites = 'avito';
    const date: DateString = '05.09.2020 в 16:30:15.';
    const message = 'Ваш код для регистрации на Авито. Никому его не говорите это';
    let initialNumber = 7634383426;

    for (let i = 0; i < length; i++) {
      list.push({
        site,
        date,
        message,
        number: initialNumber++,
      });
    }

    return list;
  }
}
