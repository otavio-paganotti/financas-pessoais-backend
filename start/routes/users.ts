import Route from '@ioc:Adonis/Core/Route'

Route.get('/users', 'UsersController.index')
Route.post('/users/create', 'CreateUsersController.index')
Route.get('/users/:id', 'GetUserById.index')