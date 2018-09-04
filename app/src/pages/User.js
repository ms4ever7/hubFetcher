import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LOAD_USER_FOLLOWERS, LOAD_USER_FOLLOWING } from '../redux/reducers/user';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UserInfo from './UserInfo';

import { EMPTY_FUNCTION } from '../util/utils';

class User extends Component {
  static propTypes = {
    followers: PropTypes.array,
    following: PropTypes.array,
    selectedMember: PropTypes.object
  }

  static defaultProps = {
    followers: [],
    following: []
  }

  componentDidMount() {
    const { selectedMember, fetchFollowers, fetchFollowing } = this.props;
    const { followers, following } = selectedMember;


    followers && fetchFollowers(followers)
    following && fetchFollowing(following);
  };

  get followers() {
    const { followers } = this.props;

    return followers.map(follower => {
      const { id, nickname, avatarImage } = follower;

      return (<div key={id} 
        className='member-list-item layout-row layout-align-start-center'>
        <img className='member-image' src={avatarImage} width={32} height={32} alt='' />
        <div className='member-nickname'>{nickname}</div>
      </div>
      );
    });
  }

  get following() {
    const { following } = this.props;

    return following.map(follower => {
      const { id, nickname, avatarImage } = follower;

      return (<div key={id} 
        className='member-list-item layout-row layout-align-start-center'>
        <img className='member-image' src={avatarImage} width={32} height={32} alt='' />
        <div className='member-nickname'>{nickname}</div>
      </div>
      );
    });
  }

  get itemsBlock() {
    const { followers, following } = this.props;

    return <div className='member-list layout-row layout-align-space-between-start'>
      <div className='layout-column flex-50'>
        {followers.length ? <h4 className='member-list-header'>Followers:</h4> : null}
        {this.followers}
      </div>
      <div className='layout-column flex-50'>
        {following.length ? <h4 className='member-list-header'>Following:</h4>: null}
        {this.following}
      </div>
    </div>;
  }

  render() {
    const { selectedMember } = this.props;
    
    return (
      <div className='layout-column layout-align-start-center'>
        <UserInfo data={selectedMember} />
        {this.itemsBlock}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedMember: state.members.selectedMember || false,
    followers: state.user.followers,
    following: state.user.following
  };
};

const mapDispatchToProps = dispatch => ({
  fetchFollowers: url =>
    dispatch({
      type: LOAD_USER_FOLLOWERS,
      url
    }),
  fetchFollowing: url =>
    dispatch({
      type: LOAD_USER_FOLLOWING,
      url
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(User);