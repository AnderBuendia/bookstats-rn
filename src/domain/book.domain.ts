import { BookStatus } from '@Enums/book-status.enum';
import Colors from '@Lib/constants/Colors';
import { StyleProp, TextStyle } from 'react-native';
import type { CognitoUser } from '@aws-amplify/auth';

const ACTIONS_COLOR_STATUS: {
  [x: string]: () => StyleProp<TextStyle>;
} = {
  [BookStatus.TO_READ]: () => {
    return {
      backgroundColor: Colors.primary_300.background,
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

export const getColorStatus = (status: string) => {
  const actionColorStatus = ACTIONS_COLOR_STATUS[status];
  return actionColorStatus();
};

export const bookToDomain = ({
  author,
  pages,
  status,
  title,
  username,
}: {
  author: string;
  pages: number;
  status: string;
  title: string;
  username: string;
}) => {
  return {
    author,
    pages: Number(pages),
    status,
    title,
    username,
    rating: 0,
  };
};
