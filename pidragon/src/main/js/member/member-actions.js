import callService from '../core/api/api-call';

// actions
export function loadInitMember(responseJson) {
  return { type:'NO', responseJson };
}

// thunk
export function initMember() {
  return function(dispatch) {
    let requestParams = {};
    requestParams.action = "INIT";
    requestParams.service = "MEMBER_SVC";
    //requestParams.prefForms = new Array("LOGIN_FORM","REGISTRATION_FORM","FORGOTPASSWORD_FORM","PASSWORD_CHANGE_FORM");
    requestParams.prefTexts = new Array("MEMBER_PAGE");
    requestParams.menuNames = new Array("MEMBER_MENU_TOP");
    let params = {};
    params.requestParams = requestParams;
    params.URI = '/api/member/callService';

    return callService(params).then( (responseJson) => {
      dispatch({ type: "LOAD_INIT", responseJson });
    }).catch(error => {
      throw(error);
    });

  };
}
