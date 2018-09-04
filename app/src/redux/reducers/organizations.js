export const LOAD_ORGANIZATIONS = 'LOAD_ORGANIZATIONS';
export const LOAD_ORGANIZATIONS_SUCCESS = 'LOAD_ORGANIZATIONS_SUCCESS';
export const LOAD_ORGANIZATIONS_FAILURE = 'LOAD_ORGANIZATIONS_FAILURE';
export const SELECT_ORGANIZATION = 'SELECT_ORGANIZATION'

const initialState = {
  organizations: []
};

const organizations = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORGANIZATIONS:
      return { ...state };
    case LOAD_ORGANIZATIONS_SUCCESS:
      return { ...state, organizations: action.organizations, error: [], selectedOrganization: false };
    case LOAD_ORGANIZATIONS_FAILURE:
      return { ...state, error: action.error, organizations: [], selectedOrganization: false };
    case SELECT_ORGANIZATION:
      return { ...state, selectedOrganization: action.selectedOrganization }
    default:
      return state;
  }
}

export default organizations;