const initialState = {
  users: [
    {
      name: 'Oscar',
      email: 'oscar.osses@chilecompra.cl',
      password: 'oscar123'
    },
    {
      name: 'Orlando',
      email: 'orlando.marin@chilecompra.cl',
      password: 'orlando123'
    }
  ]
}

function loginFormReducer (state = initialState, action) {
  switch (action.type) {
    default: {
      return state
    }
  }
}

export default loginFormReducer
