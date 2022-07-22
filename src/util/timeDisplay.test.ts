import { convertToHhMmSs } from './timeDisplay'

test('convert 0 should be 00:00:00', () => {
  expect(convertToHhMmSs(0)).toBe("00:00:00")
})

test('convert 60 should be 00:01:00', () => {
    expect(convertToHhMmSs(60)).toBe("00:01:00")
})

test('convert 61 to be 00:01:01', () => {
    expect(convertToHhMmSs(61)).toBe("00:01:01")
})

test('convert 18733 to ', () => {
    expect(convertToHhMmSs(18733)).toBe("05:12:13")
})