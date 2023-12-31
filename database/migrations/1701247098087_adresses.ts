import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'adresses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string ('country',255).notNullable()
      table.string ('state',255).notNullable()
      table.string ('city',255).notNullable()
      table.string ('neighborhood',255).notNullable()
      table.string ('street',255).notNullable()
      table.double ('number',255).notNullable()
      table.integer('client_id')
        .unsigned()
        .notNullable()
      table.foreign('client_id')
        .references('id')
        .inTable('clients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.timestamps(true,true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

