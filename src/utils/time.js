/* eslint no-bitwise: "off" */
const forceDoubleDigits = integer => (
  integer < 10 ? `0${integer}` : integer // 7 -> 07
)

export const getDisplayDay = date => (
  `${date.getMonth() + 1}/${date.getDate()}` // 8/26
)

export const getDisplayTime = date => (
  `${forceDoubleDigits(date.getHours())}:${forceDoubleDigits(date.getMinutes())}` // 14:08
)

export const getDisplayableDaysHoursMinutes = ms => ({
  days: (ms / 1000 / 86400 | 0),
  hours: ((ms / 1000 / 60 / 60 | 0) % 24),
  minutes: forceDoubleDigits((ms / 1000 / 60 | 0) % 60),
})
