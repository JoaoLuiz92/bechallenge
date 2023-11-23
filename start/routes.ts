/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'



Route.get('/', async () => {})

Route.post('login', async ({ auth, request, response }) => {
  const email = request.input('email')
    const pass = request.input('pass')
  
  
    try {
      const token = await auth.use('api').attempt(email, pass)
      return token
    } 
    catch {
      return response.unauthorized('Invalid credentials')
    }
  })
  

Route.resource('users', 'UsersController') // atalho do adonis que uso para montar todas as rotas com 1 linha de code.
