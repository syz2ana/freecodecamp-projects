// Change code below this line

// Change code above this line

const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
  
    switch (action.type) {
      case LOGIN: // Change this line
        return {
          authenticated: true
        }
      case LOGOUT: // Change this line
        return {
          authenticated: false
        }
  
      default:
        return state;
  
    }
  
  };
  
  const store = Redux.createStore(authReducer);
  
  const LOGIN = "LOGIN";
  const LOGOUT = "LOGOUT";
  const loginUser = () => {
    return {
      type: LOGIN
    }
  };
  
  const logoutUser = () => {
    return {
      type: LOGOUT
    }
  };