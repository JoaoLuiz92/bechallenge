import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'sale_has_products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('sales_id')
        .unsigned()
        .notNullable()
      table.foreign('sales_id')
        .references('id')
        .inTable('sales')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.integer('product_id')
        .unsigned()
        .notNullable()
      table.foreign('product_id')
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.double('sell_price').notNullable()
      table.double('sell_amount').notNullable()
      table.double('sell_total').notNullable()


      table.timestamps(true,true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
