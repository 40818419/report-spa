import moment from 'moment';

export const formatDate = (date: string) => (date ? moment(date).format('LLL') : null);
