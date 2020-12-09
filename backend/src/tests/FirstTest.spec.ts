import { User } from '../models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Tony'

  expect(user.name).toEqual('Tony')
})
