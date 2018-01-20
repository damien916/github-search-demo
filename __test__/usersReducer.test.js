import { currentUser } from '../reducers/users'
import { actionTypes } from '../actions/users'

describe('users reducer - currentUser', () => {
  it('should return the initial state', () => {
    expect(currentUser(undefined, {})).toEqual({})
  })

  // Set current user
  it('should handle SET_CURRENT_USER', () => {
    expect(
      currentUser([], {
        type: actionTypes.SET_CURRENT_USER,
        user: {
          id: 1234,
          name: 'John Doe',
          url: 'http://www.john-doe.com',
          avatar: 'http://www.john-doe.com/beautiful-john.jgp'
        }
      })
    ).toEqual(
      {
        id: 1234,
        name: 'John Doe',
        url: 'http://www.john-doe.com',
        avatar: 'http://www.john-doe.com/beautiful-john.jgp'
      }
    )
  })

  // Fetch user from API
  it('should handle FETCH_USER_FULFILLED', () => {
    expect(
      currentUser([], {
        type: `${actionTypes.FETCH_USER}_FULFILLED`,
        payload: {
          id: 1234,
          login: 'John Doe',
          html_url: 'http://www.john-doe.com',
          avatar_url: 'http://www.john-doe.com/beautiful-john.jgp',
          other: 'fake'
        }
      })
    ).toEqual(
      {
        id: 1234,
        name: 'John Doe',
        url: 'http://www.john-doe.com',
        avatar: 'http://www.john-doe.com/beautiful-john.jgp'
      }
    )
  })
})