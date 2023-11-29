import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Adress from 'App/Models/Adress'

export default class AdressesController {
  public async index({}: HttpContextContract) {

    const adress = await Adress.all()
    
    return adress

  }

  public async create({}: HttpContextContract) {

  }

  public async store({request}: HttpContextContract) {
    const body = request.only(['country', 'state', 'city', 'neighborhood', 'street', 'number', 'client_id'])
  
    // Fix the typo in the property name
      const adress = await Adress.create({
      country: body.country,
      state: body.state,
      city: body.city,
      neighborhood: body.neighborhood,
      street: body.street,
      number: body.number,
      client_id:body.client_id
    })
  
    return adress
  }

  public async show({}: HttpContextContract) {

  }

  public async edit({}: HttpContextContract) {

  }

  public async update({}: HttpContextContract) {

  }

  public async destroy({request}: HttpContextContract) {
    const adressId = request.param('id')
    const adress = await Adress.findOrFail(adressId)
    await adress.delete()
    return adress

  }
}
