import { BookStatus } from '@Enums/book-status.enum';
import Colors from '@Lib/constants/Colors';
import { StyleProp, TextStyle } from 'react-native';

const ACTIONS_COLOR_STATUS: {
  [x: string]: () => StyleProp<TextStyle>;
} = {
  [BookStatus.TO_READ]: () => {
    return {
      backgroundColor: Colors.primary_100.background,
      color: Colors.primary_700.text,
    };
  },
  [BookStatus.READING]: () => {
    return {
      backgroundColor: Colors.error_100.background,
      color: Colors.error_700.text,
    };
  },
  [BookStatus.READY]: () => {
    return {
      backgroundColor: Colors.warning_100.background,
      color: Colors.warning_700.text,
    };
  },
  [BookStatus.COMPLETED]: () => {
    return {
      backgroundColor: Colors.success_100.background,
      color: Colors.success_700.text,
    };
  },
};

export const getColorStatus = (status: BookStatus) => {
  const actionColorStatus = ACTIONS_COLOR_STATUS[status];
  return actionColorStatus();
};
