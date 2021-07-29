import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Transaction from './Transaction'

export default class Detail extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description?: string

  @column()
  public value: number

  @column()
  public active: boolean

  @column()
  public transactionId: number

  @belongsTo(() => Transaction)
  public transaction: BelongsTo<typeof Transaction>

  @column()
  public father?: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
