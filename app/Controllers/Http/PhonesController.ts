import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Phone from 'App/Models/Phone'

export default class PhonesController {
  public async index({}: HttpContextContract) {

  }

  public async store({request}: HttpContextContract) {
    const body = request.only(['phone','client_id'])
    const phone = await Phone.create({
      phone:body.phone,
      client_id : body.client_id

    })
    return phone
  }

  public async show({}: HttpContextContract) {

  }


  public async update({}: HttpContextContract) {

  }

  public async destroy({}: HttpContextContract) {

  }
}
