/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {getMessage} from '../../redux/actions/chat';
import {connect} from 'react-redux';
import Message from './Message';

const MessageList = (props) => {
  const [data, setData] = useState([]);

  const [name, setName] = useState('');
  let nameParams = props.name

  const getMessages = () => {
    props.dispatch(getMessage(props.auth.data.id))
      .then(() => {
        setData(props.chat.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    setName(nameParams)
  }, [nameParams])

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      {data.map((singleData) => {
        return (
          <Message
            key={singleData.id}
            id={singleData.id}
            sender_id={singleData.sender_id}
            receiver_id={singleData.receiver_id}
            sender_name={singleData.sender_name}
            profile_img={singleData.profile_img}
            message={singleData.message}
            nav={props.nav}
          />
        );
      })}
    </>
  );
};

const mapStateToProps = state => ({
  chat: state.chat,
  auth: state.auth
})

export default connect(mapStateToProps)(MessageList);
