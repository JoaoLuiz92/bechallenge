import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Adress extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column({ isPrimary: true })
  public country: string

  @column({ isPrimary: true })
  public state: string

  @column({ isPrimary: true })
  public city: string

  @column({ isPrimary: true })
  public neighborhood: string

  @column({ isPrimary: true })
  public street: string

  @column({ isPrimary: true })
  public number: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
