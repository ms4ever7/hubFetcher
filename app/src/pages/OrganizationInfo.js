import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import moment from 'moment';


const OrganizationInfo = ({ data }) => {
  const { name, createdAt, forksCount, watchers } = data;

  return <div className='organization-info-container layout-column layout-align-center-start'>
    <section className='organization-title-wrapper layout-row layout-align-space-between-center'>
      <h2 className='organization-name'>{name}</h2>
      <h3 className='organization-date'>{moment(createdAt).format("MMM Do YY")}</h3>
    </section>
    <h4 className='organization-count'>Forks count: {forksCount}</h4>
    <h4 className='organization-count'>Watchers count: {watchers}</h4>

    <Link to='/members' style={{ textDecoration: 'none' }}>
      <h5 className='organization-members'>See members</h5>
    </Link>
  </div>
};

export default OrganizationInfo;