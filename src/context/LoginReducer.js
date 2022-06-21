const LoginReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          user: null,
          loading: true,
          error: null,
        };
      case "LOGIN_SUCCESS":
        return {
          user: action.payload,
          loading: false,
          error: null,
        };
      case "LOGIN_FAILURE":
        return {
          user: null,
          loading: false,
          error: action.payload,
        };
      case "LOGOUT":
        return {
          user: null,
          loading: false,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default LoginReducer