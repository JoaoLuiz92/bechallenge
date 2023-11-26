

import Route from '@ioc:Adonis/Core/Route'


Route.get('/', async () => {})

Route.post('login', async ({ auth, request, response }) => {
    const email = request.input('email')
    const password = request.input('password')


  
    try {

      const token = await auth.use('api').attempt(email, password)
      await auth.use('api').attempt(email, password, {
        expiresIn: '7 days'
      })

      
      return token
    } 
    catch (e) {
      console.log(e)
      
      return response.unauthorized("invalid credentials")
    } 
  })


Route.get('dashboard', async ({ auth }) => {

 await auth.use('api').authenticate()
 auth.use('api').isLoggedIn

 
  return `Você esta logado!!`    
  
})
  

Route.resource('users', 'UsersController')// atalho do adonis que uso para montar todas as rotas com 1 linha de code.
Route.resource('clients', 'ClientsController')
Route.resource('adresses', 'AdressesController')
Route.resource('products', 'ProductsController')
Route.resource('sales', 'SaleController')
