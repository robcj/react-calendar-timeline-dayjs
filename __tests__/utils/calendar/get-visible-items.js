import { getVisibleItems } from 'lib/utility/calendar'
import dayjs from 'dayjs'

const itemTimeStartKey = 'start'
const itemTimeEndKey = 'end'

const keys = {
  itemTimeStartKey,
  itemTimeEndKey
}

describe('getVisibleItems', () => {
  it('returns items within date range - both dates', () => {
    const startRange = dayjs()
      .add({days: -1})
      .valueOf()
    const endRange = dayjs(startRange).add({days: 1})
    const items = [
      {
        [itemTimeStartKey]: dayjs(startRange)
          .add({minutes: 10})
          .valueOf(),
        [itemTimeEndKey]: dayjs(startRange)
          .add({minutes: 20})
          .valueOf(),
        id: 1
      }
    ]

    const result = getVisibleItems(items, startRange, endRange, keys)

    expect(result).toMatchObject(items)
  })

  it('returns items within date range - start date', () => {
    const startRange = dayjs()
      .add({days: -1})
      .valueOf()
    const endRange = dayjs(startRange).add({days: 1})
    const items = [
      {
        [itemTimeStartKey]: dayjs(endRange)
          .add({minutes: -10})
          .valueOf(),
        [itemTimeEndKey]: dayjs(endRange)
          .add({minutes: 20})
          .valueOf(),
        id: 1
      }
    ]

    const result = getVisibleItems(items, startRange, endRange, keys)

    expect(result).toMatchObject(items)
  })

  it('returns items within date range - end date', () => {
    const startRange = dayjs()
      .add({days: -1})
      .valueOf()
    const endRange = dayjs(startRange).add({days: 1})
    const items = [
      {
        [itemTimeStartKey]: dayjs(startRange)
          .add({minutes: -10})
          .valueOf(),
        [itemTimeEndKey]: dayjs(startRange)
          .add({minutes: 10})
          .valueOf(),
        id: 1
      }
    ]

    const result = getVisibleItems(items, startRange, endRange, keys)

    expect(result).toMatchObject(items)
  })

  it('does not return items outside of date range - before start date', () => {
    const startRange = dayjs()
      .add({days: -1})
      .valueOf()
    const endRange = dayjs(startRange).add({days: 1})
    const items = [
      {
        [itemTimeStartKey]: dayjs(startRange)
          .add({days: -2})
          .valueOf(),
        [itemTimeEndKey]: dayjs(startRange)
          .add({days: -1})
          .valueOf(),
        id: 1
      }
    ]

    const result = getVisibleItems(items, startRange, endRange, keys)

    expect(result).toMatchObject([])
  })

  it('does not return items outside of date range - after end date', () => {
    const startRange = dayjs()
      .add({days: -1})
      .valueOf()
    const endRange = dayjs(startRange).add({days: 1})
    const items = [
      {
        [itemTimeStartKey]: dayjs(endRange)
          .add({days: 1})
          .valueOf(),
        [itemTimeEndKey]: dayjs(endRange)
          .add({days: 2})
          .valueOf(),
        id: 1
      }
    ]

    const result = getVisibleItems(items, startRange, endRange, keys)

    expect(result).toMatchObject([])
  })
})
