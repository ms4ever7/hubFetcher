import React, { Component } from 'react';

import { LOAD_ORGANIZATIONS } from '../redux/reducers/organizations';
import { connect } from "react-redux";
import { Link, Redirect, withRouter } from 'react-router-dom'

import Button from '../components/ui/Button';

class Header extends Component {
  state = {
    organizationName: ''
  }

  render() {
    const { organizationName } = this.state;
    const { searchOrganizations } = this.props;

    return (
      <header className="header layout-row layout-align-space-around-center">
        <Link to='/' className="header-title">
          GitHub Fetcher
        </Link>
        <div className='layout-row layout-align-center-center'>
          <input
            type='text'
            placeholder='Organizations...'
            value={organizationName}
            onChange={event => this.setState({ organizationName: event.target.value })}
            className='input'
          />

          <Button onClick={() => searchOrganizations(organizationName)}>
            <Link className='back-button-link' to='/'>
              Search organization
            </Link>
          </Button>
        </div>
      </header>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    searchOrganizations: name => 
      dispatch({
        type: LOAD_ORGANIZATIONS,
        name
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
