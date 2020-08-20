import { isRestrictedDate, IDayGridOptions, ICalendarStrings } from '@fluentui/date-time-utilities';

export const validateDate = (
  futureSelectedDate: Date,
  futureFormattedDate: string,
  calendarOptions: IDayGridOptions,
  dateFormatting: ICalendarStrings,
  required: boolean,
): string => {
  if (futureSelectedDate) {
    if (isRestrictedDate(futureSelectedDate, calendarOptions)) {
      return dateFormatting.isOutOfBoundsErrorMessage;
    }
  } else if (futureFormattedDate) {
    return dateFormatting.invalidInputErrorMessage;
  } else if (required && !futureSelectedDate) {
    return dateFormatting.isRequiredErrorMessage;
  }
  return '';
};
