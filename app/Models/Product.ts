import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'


export default class Product extends (BaseModel)  {
  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: true })
  public prod_name: string
  
  @column({ isPrimary: true })
  public pages: number

  @column({ isPrimary: true })
  public price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
}