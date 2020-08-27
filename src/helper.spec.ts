import { formatDate} from './helper';

describe('method `formatDate`', () => {
  it('should return correct formatted date', () => {
    expect(formatDate('2020-03-07T15:51:28.133Z')).toBe('March 7, 2020 4:51 PM')
  });
  it('should return `null` when date is not provided', () => {
    expect(formatDate()).toBe(null)
  });
});
