import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Control from './Control'
import Category from './Category'
import Detail from './Detail'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public descripton?: string

  @column()
  public type: string

  @column()
  public controlId: number

  @belongsTo(() => Control)
  public control: BelongsTo<typeof Control>

  @column()
  public categoryId: number

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>

  @column()
  public value: number

  @column()
  public isProjected: boolean

  @column()
  public active: boolean

  @hasMany(() => Detail)
  public details: HasMany<typeof Detail>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
