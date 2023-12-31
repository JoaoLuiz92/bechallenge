import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Adress extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  

  @column({  })
  public country: string

  @column({  })
  public state: string

  @column({  })
  public city: string

  @column({  })
  public neighborhood: string

  @column({  })
  public street: string

  @column({  })
  public number: number

  @column({  })
  public client_id: number
  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

