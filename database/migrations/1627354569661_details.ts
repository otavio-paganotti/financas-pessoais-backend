import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Details extends BaseSchema {
  protected tableName = 'details'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique()
      table.string('title').notNullable()
      table.string('description')
      table.decimal('value', 2).notNullable().defaultTo(0.00)
      table.boolean('active').notNullable().defaultTo(true)
      table.integer('transaction_id').references('id').inTable('transactions').onUpdate('CASCADE').onDelete('CASCADE')


      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
