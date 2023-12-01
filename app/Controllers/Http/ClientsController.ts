import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'

import SaleHasProduct from 'App/Models/SaleHasProduct'


export default class ClientsController {
  public async index({}: HttpContextContract) {
    const client = await Client.all()
    return client
  }

  public async create({}: HttpContextContract) {}

  public async store({request}: HttpContextContract) {
    const body = request.only(['name','cpf'])
    const client = await Client.create({
      name:body.name,
      cpf : body.cpf
    })
    console.log(client.$isPersisted) // true
    return client

  }
  public async show({params}: HttpContextContract) {

  const client = await Client.query()
    .where('id', params.id)
    .firstOrFail();


  const sales = await SaleHasProduct.query()
    .where('client_id', client.id)
    .select('prod_name','sales_id','sell_amount','sell_total')
    .exec();

  return { client, sales };


 }

  public async edit({}: HttpContextContract) {}

  public async update({request}: HttpContextContract) {
    const clientId = request.param('id')
    const body = request.only(['name', 'cpf'])
    const client = await Client.findOrFail(clientId)
    await client.merge(body).save()


    return client
  }

  public async destroy({request}: HttpContextContract) {
    const clientId = request.param('id')
    const client = await Client.findOrFail(clientId)
    await client.delete()
    return client
  }
}
