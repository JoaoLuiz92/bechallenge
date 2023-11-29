import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({}: HttpContextContract) {
    
    const product = await Product.all()
    
    return product


  }

  public async create({}: HttpContextContract) {

  }

  public async store({request}: HttpContextContract) {
    const body = request.only(['prod_name','price','category','prod_amount'])
    const product = await Product.create({
      prod_name :body.prod_name,
      price :body.price,
      category :body.category,
      prod_amount :body.prod_amount

    })
      console.log(product.$isPersisted) // true
      return product
  

  }

  public async show({request}: HttpContextContract) {
    const productId = request.param('id')
    const product = await Product.find(productId)

    return product
  }

  public async update({request}: HttpContextContract) {
    const productId = request.param('id')
    const body = request.only(['prod_name', 'pages','price'])
    const product = await Product.findOrFail(productId)
    await product.merge(body).save()


    return product

  }

  public async destroy({request}: HttpContextContract) {
    const productId = request.param('id')
    const product = await Product.findOrFail(productId)
    await product.delete()
    return product

  }
}

