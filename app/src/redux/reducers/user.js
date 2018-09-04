export const LOAD_USER_FOLLOWERS = "LOAD_USER_FOLLOWERS";
export const LOAD_USER_FOLLOWERS_SUCCESS = "LOAD_USER_FOLLOWERS_SUCCESS";
export const LOAD_USER_FOLLOWERS_FAILURE = "LOAD_USER_FOLLOWERS_FAILURE";
export const LOAD_USER_FOLLOWING = "LOAD_USER_FOLLOWING";
export const LOAD_USER_FOLLOWING_SUCCESS = "LOAD_USER_FOLLOWING_SUCCESS";
export const LOAD_USER_FOLLOWING_FAILURE = "LOAD_USER_FOLLOWING_FAILURE";
export const SELECT_MEMBER = 'SELECT_MEMBER';

const initialState = {
  followers: [],
  following: []
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_FOLLOWERS:
      return { ...state, url: action.url };
    case LOAD_USER_FOLLOWERS_SUCCESS:
      return { ...state, followers: action.followers, error: [] };
    case LOAD_USER_FOLLOWERS_FAILURE:
      return { ...state, error: action.error, followers: [] };
    case LOAD_USER_FOLLOWING:
      return { ...state, url: action.url };
    case LOAD_USER_FOLLOWING_SUCCESS:
      return { ...state, following: action.following, error: [] };
    case LOAD_USER_FOLLOWING_FAILURE:
      return { ...state, error: action.error, following: [] };
    default:
      return state;
  }
}

export default user;