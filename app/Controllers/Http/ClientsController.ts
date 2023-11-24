import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'

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
  public async show({request}: HttpContextContract) {
    const clientId = request.param('id')
    const client = await Client.find(clientId)

    return client
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
