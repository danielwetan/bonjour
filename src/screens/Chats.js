import React from 'react';
import Main from '../components/Chats';
import BottomNav from '../components/Navigation/BottomNav';

const Chats = ({navigation}) => {
  return (
    <>
      <Main nav={navigation} />
      <BottomNav />
    </>
  );
};

export default Chats;
