/* eslint-disable */
import { getMinUnit, minCellWidth } from 'lib/utility/calendar';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { defaultTimeSteps } from 'lib/default-config';

dayjs.extend(duration);

describe('getMinUnit', () => {
  // this is the happy path and used as safety net if we make any refactorings
  // to this function.  There seem to be a ton of edge cases here...
  describe('standard width of 1200', () => {
    const standardWidth = 1200;
    it('should be second for one minute duration', () => {
      const oneMinute = dayjs.duration({ minutes: 1 }).asMilliseconds();
      const result = getMinUnit(oneMinute, standardWidth, defaultTimeSteps);

      expect(result).toBe('second');
    });
    it('should be minute for one hour duration', () => {
      const oneHour = dayjs.duration({ hours: 1 }).asMilliseconds();
      const result = getMinUnit(oneHour, standardWidth, defaultTimeSteps);

      expect(result).toBe('minute');
    });
    it('should be hour for one day duration', () => {
      const oneDay = dayjs.duration({ days: 1 }).asMilliseconds();
      const result = getMinUnit(oneDay, standardWidth, defaultTimeSteps);

      expect(result).toBe('hour');
    });
    it('should be day for one week duration', () => {
      const oneWeek = dayjs.duration({ weeks: 1 }).asMilliseconds();
      const result = getMinUnit(oneWeek, standardWidth, defaultTimeSteps);

      expect(result).toBe('day');
    });
    it('should be day for one month duration', () => {
      const oneMonth = dayjs.duration({ months: 1 }).asMilliseconds();
      const result = getMinUnit(oneMonth, standardWidth, defaultTimeSteps);

      expect(result).toBe('day');
    });
    it('should be month for one year duration', () => {
      const oneYear = dayjs.duration({ years: 1 }).asMilliseconds();
      const result = getMinUnit(oneYear, standardWidth, defaultTimeSteps);

      expect(result).toBe('month');
    });
  });
});
