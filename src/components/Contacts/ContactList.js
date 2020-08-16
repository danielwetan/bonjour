/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
// import {View, Text} from 'react-native';
import Message from './Contact';
import {getContact} from '../../redux/actions/contact';
import {connect} from 'react-redux';

const ContactList = (props) => {
  const [data, setData] = useState([]);

  const getContacts = () => {
    props.dispatch(getContact(props.auth.data.id))
      .then(() => {
        setData(props.contact.data);
        // console.log(props.contact.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      {data.map((singleData) => {
        return (
          <Message
            key={singleData.id}
            id={singleData.id}
            name={singleData.name}
            profile_img={singleData.profile_img}
            about={singleData.about}
            nav={props.nav}
            email={singleData.email}
          />
        );
      })}
      {console.log(data)}
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  contact: state.contact
})

export default connect(mapStateToProps)(ContactList);
