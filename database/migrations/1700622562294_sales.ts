import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'sales'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('client').notNullable().unique()
      table.string('product').notNullable().unique()
      table.double('quantity').notNullable()
      table.double('price').notNullable()
      table.double('totalPrice').notNullable()
      table.dateTime('date').notNullable().unique()



      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true,true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
