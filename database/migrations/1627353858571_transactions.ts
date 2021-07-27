import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Transactions extends BaseSchema {
  protected tableName = 'transactions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique()
      table.string('title').notNullable()
      table.string('description')
      table.string('type').notNullable().defaultTo('despesa')
      table.decimal('value', 2).notNullable().defaultTo(0.00)
      table.boolean('is_projected').notNullable().defaultTo(false)
      table.boolean('active').notNullable().defaultTo(true)
      table.integer('category_id').references('id').inTable('categories').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('control_id').references('id').inTable('controls').onUpdate('CASCADE').onDelete('CASCADE')


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
