

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
  

Route.resource('users', 'UsersController')
Route.resource('clients', 'ClientsController')
Route.resource('adresses', 'AdressesController')
Route.resource('phones', 'PhonesController')
Route.resource('products', 'ProductsController')
Route.resource('sales', 'SalesController')
Route.resource('sale_has_products', 'SaleHasProductsController')
