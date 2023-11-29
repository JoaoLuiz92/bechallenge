import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sale from 'App/Models/Sale'

export default class SalesController {
  public async index({}: HttpContextContract) {}

  public async store({request}: HttpContextContract) {
    const body = request.only(['client_id','date','total'])
    const sale = await Sale.create({
      client_id:body.client_id,
      date : body.date,
      total : body.total
    })
    return sale


  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
