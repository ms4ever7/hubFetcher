export const LOAD_MEMBERS = "LOAD_MEMBERS";
export const LOAD_MEMBERS_SUCCESS = "LOAD_MEMBERS_SUCCESS";
export const LOAD_MEMBERS_FAILURE = "LOAD_MEMBERS_FAILURE";
export const SELECT_MEMBER = 'SELECT_MEMBER';

const initialState = {
  members: []
};

const members = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MEMBERS:
      return { ...state, url: action.url };
    case LOAD_MEMBERS_SUCCESS:
      return { ...state, members: action.members, error: [] };
    case LOAD_MEMBERS_FAILURE:
      return { ...state, error: action.error, members: [] };
    case SELECT_MEMBER:
      return { ...state, selectedMember: action.selectedMember };
    default:
      return state;
  }
}

export default members;