import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'api_tokens'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id',10)
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
      table.string('name',255)
        .notNullable()
      table.string('type',255)
        .notNullable()
      table.string('token', 64)
          .notNullable()
          .unique()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps (true,true,true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
