import { expect, test } from 'vitest'
import { LOCATIONS } from './locations'
import { EMPTY_ARRAY } from './consts'

const SET_OF_EVERY_INDEX = new Set(EMPTY_ARRAY.keys());

test('every ga-ko index exists', () => {
  expect(new Set(LOCATIONS.map(location => location.index))).toEqual(SET_OF_EVERY_INDEX)
})

test('every kerotan index exists', () => {
  expect(new Set(LOCATIONS.map(location => location.kerotanIndex ?? location.index))).toEqual(SET_OF_EVERY_INDEX)
})
