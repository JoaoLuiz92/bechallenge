import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SaleHasProduct from 'App/Models/SaleHasProduct'

export default class SaleHasProductsController {
  public async index({}: HttpContextContract) {
    const salehasproducts = await SaleHasProduct.all()
    return salehasproducts
  }

  public async create({}: HttpContextContract) {}

  public async store({request}: HttpContextContract) {
    const body = request.only(['sales_id','product_id','sell_price','sell_amount','sell_total',])
    const salehasproducts = await SaleHasProduct.create({
      sales_id:body.sales_id,
      product_id: body.product_id,
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
