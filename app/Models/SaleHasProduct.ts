import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class SaleHasProduct extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column({ })
  public client_id: number

  @column({ })
  public sales_id: number

  @column({ })
  public product_id: number
  
  @column({ })
  public sell_price: number

  @column({ })
  public sell_amount: number

  @column({ })
  public sell_total: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
