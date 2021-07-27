import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Projections extends BaseSchema {
  protected tableName = 'projections'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique()
      table.string('title').notNullable()
      table.text('description')
      table.decimal('max_entry', 2).notNullable().defaultTo(0.00)
      table.decimal('max_expense', 2).notNullable().defaultTo(0.00)
      table.integer('qtd_month').notNullable().defaultTo(1)
      table.boolean('active').notNullable().defaultTo(true)

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
