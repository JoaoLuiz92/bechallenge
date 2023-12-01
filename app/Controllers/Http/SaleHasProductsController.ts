import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SaleHasProduct from 'App/Models/SaleHasProduct'

export default class SaleHasProductsController {
  public async index({}: HttpContextContract) {
    const salehasproducts = await SaleHasProduct.all()
    return salehasproducts
  }

  public async create({}: HttpContextContract) {}

  public async store({request}: HttpContextContract) {
    const body = request.only(['client_id','sales_id','prod_name','sell_price','sell_amount','sell_total',])
    const salehasproducts = await SaleHasProduct.create({
      client_id:body.client_id,
      sales_id:body.sales_id,
      prod_name: body.prod_name,
      sell_price: body.sell_price,
      sell_amount: body.sell_amount,
      sell_total: (body.sell_price)*(body.sell_amount)
    })
    console.log(salehasproducts.$isPersisted) // true
    return salehasproducts
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
