import React, { Component } from "react";
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { SELECT_ORGANIZATION } from '../redux/reducers/organizations';

import OrganizationInfo from './OrganizationInfo';

import { EMPTY_FUNCTION } from '../util/utils';

class Index extends Component {
  static propTypes = {
    organizations: PropTypes.array,
    selectedOrganization: PropTypes.object,
    searchOrganizations: PropTypes.func
  }

  static defaultProps = {
    organizations: [],
    searchOrganizations: EMPTY_FUNCTION,
  }

  get items() {
    const { organizations, selectOrganization } = this.props;

    return organizations.map(organization => {
      const { id, name } = organization;

      return (<div key={id} 
        className='organization-list-item layout-row layout-align-start-center'
        onClick={() => selectOrganization(organizations.find(org => org.id === id))}>
        {name}
      </div>
    )
  });
  }

  get itemsBlock() {
    return <div className='organization-list layout-column flex-40'>
      <h4 className='organization-list-header'>Choose an organization u're looking for:</h4>
      {this.items}
    </div>;
  }

  get organizationInfo() {
    const { selectedOrganization } = this.props;

    if (!selectedOrganization) {
      return <div className='organization-info-empty-header'>
        Choose please an organization from the list on the right.
      </div>;
    }
  
    return <OrganizationInfo data={selectedOrganization} onClick={url => console.log('here', url)} />;
  }

  get titleMessage() {
    const { error } = this.props;
    const NO_ORGANIZATION_FOUND = 'There are no organizations found! Try again pls.';
    const DEFAULT_TITLE = "Welcome to github fetcher, type the name of organization tha u're looking for in the top bar";

    return error
      ? NO_ORGANIZATION_FOUND
      : DEFAULT_TITLE;
  }

  render() {
    const { organizations } = this.props;
    
    if (!organizations || !organizations.length) {
      return <div className='no-results-container layout-row layout-align-center-center'>
        <h3 className='no-results-title'>{this.titleMessage}</h3>
      </div>;
    }

    return (
      <div className='layout-column layout-align-center-center'>

      <div style={{ width: '100%' }}className='layout-row layout-align-space-between-start'>
        {this.itemsBlock}
        <div className='flex-40'>
          {this.organizationInfo}
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    organizations: state.organizations.organizations,
    error: state.organizations.error,
    selectedOrganization: state.organizations.selectedOrganization
  };
};

const mapDispatchToProps = dispatch => ({
  selectOrganization: selectedOrganization => 
    dispatch({
      type: SELECT_ORGANIZATION,
      selectedOrganization
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);