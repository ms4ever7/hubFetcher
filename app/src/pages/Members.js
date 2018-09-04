import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LOAD_MEMBERS, SELECT_MEMBER } from '../redux/reducers/members';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import OrganizationInfo from './OrganizationInfo';

import { EMPTY_FUNCTION } from '../util/utils';

class Members extends Component {
  static propTypes = {
    members: PropTypes.array,
    fetchMembers: PropTypes.func
  }

  static defaultProps = {
    members: [],
    fetchMembers: EMPTY_FUNCTION,
  }

  componentDidMount() {
    const { selectedOrganization, fetchMembers } = this.props;
    const { membersUrl } = selectedOrganization;

    membersUrl && fetchMembers(membersUrl);
  };

  _selectMember(id) {
    const { members, selectMember } = this.props;
    const appropriateMember = members.find(user => user.id === id);

    selectMember(appropriateMember);
  }

  get items() {
    const { members } = this.props;

    return members.map(member => {
      const { id, nickname, avatarImage } = member;

      return (<Link to='/user' key={id} 
        className='member-list-item layout-row layout-align-start-center'
        onClick={() => this._selectMember(id)}>
        <img className='member-image' src={avatarImage} width={32} height={32} alt='' />
        <div className='member-nickname'>{nickname}</div>
      </Link>
      );
    });
  }

  get itemsBlock() {
    const { members } = this.props;

    if (!members || !members.length) {
      return null;
    }

    return <div className='member-list layout-column flex-40'>
      <h4 className='member-list-header layout-row layout-align-space-between'>
      <Link className='back-button-link' to='/'>Back</Link>
        Choose the member u're looking for:
        </h4>
      {this.items}
    </div>;
  }

  render() {
    const { selectedOrganization } = this.props;
    
    return (
      <div className='layout-column layout-align-center-center'>
        <div style={{ width: '100%' }} className='layout-row layout-align-space-between-start'>
          {this.itemsBlock}
          <div className='flex-40'>
            <OrganizationInfo data={selectedOrganization} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedOrganization: state.organizations.selectedOrganization || false,
    members: state.members.members
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMembers: url =>
    dispatch({
      type: LOAD_MEMBERS,
      url
    }),
  selectMember: selectedMember =>
    dispatch({
      type: SELECT_MEMBER,
      selectedMember
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);