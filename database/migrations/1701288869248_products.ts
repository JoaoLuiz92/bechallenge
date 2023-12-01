import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('prod_name',255)
        .notNullable()
      table.double('price')
        .notNullable()
      table.string('category',255)
        .notNullable()
      table.double('prod_amount')
        .notNullable()
      

      table.timestamps(true,true)

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
