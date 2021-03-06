import React from 'react';
import { ZeitUIThemes, Avatar, Text } from '@zeit-ui/react';
import makeStyles from '../makeStyles';

interface Props {
  username: string;
  created: string;
  children: string | React.ReactNode;
}

const useStyles = makeStyles((ui: ZeitUIThemes) => ({
  root: {
    borderBottom: `solid 1px ${ui.palette.accents_2}`,
    padding: '10px 0px',
    alignItems: 'center',
    display: 'flex',
    fontSize: 14
  },
  avatar: {
    width: '32px !important',
    height: '32px !important',
    marginRight: '10px !important'
  },
  message: {
    margin: 0,
    flex: 1
  },
  created: {
    color: 'rgb(153, 153, 153) !important',
    margin: '0 0 0 auto',
    paddingLeft: 10,
    textAlign: 'right'
  }
}));

const EventListItem = ({ children, username, created }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar
        alt={`${username} Avatar`}
        className={classes.avatar}
        src={`https://zeit.co/api/www/avatar/?u=${username}&s=64`}
      />
      <Text className={classes.message}>{children}</Text>
      <Text className={classes.created}>{created}</Text>
    </div>
  );
};

export default EventListItem;
