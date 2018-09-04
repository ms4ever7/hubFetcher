import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import moment from 'moment';


const UserInfo = ({ data }) => {
  const { nickname, avatarImage, url } = data;

  return <div className='user-info-container layout-column layout-align-center-start'>
    <section className='user-title-wrapper layout-row layout-align-start-start'>
      <Link className='back-button-link' to='/members'>Back</Link>
      <img className='user-image' src={avatarImage} width='120' height='120' alt='' />
      <h2 className='user-name'>{nickname}</h2>
    </section>
    <a className='user-date-link' href={url} target='blank' >
      User's github page: {url}
    </a>
  </div>
};

export default UserInfo;