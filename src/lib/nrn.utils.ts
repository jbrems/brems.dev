export function uglifyNrn(value: string): string {
  const uglyNrn = value.replace(/[^0-9]/g, '')

  if (uglyNrn.length > 11) return uglyNrn.substring(0, 11)

  return uglyNrn
}

export function formatNrn(value: string): string {
  let formattedNrn = uglifyNrn(value)

  if (formattedNrn.length > 6) formattedNrn = formattedNrn.split('').toSpliced(6, 0, ' ').join('')
  if (formattedNrn.length > 10) formattedNrn = formattedNrn.split('').toSpliced(10, 0, ' ').join('')

  return formattedNrn
}

export function completeNrn(value: string): string | null {
  if (!isValidDate(value.substring(0, 6)) && !isValidBisDate(value.substring(0, 6))) return null
  if (!isValidBirthCounter(value.substring(6, 9))) return null

  if (value.length >= 9) return addCheckSum(value)
  if (value.length >= 6) return addCheckSum(completeBirthCounter(value))

  return addCheckSum(completeBirthCounter(completeDate(value)))
}

function determineCentury(value: string): '19' | '20' {
  const year = value.substring(0, 2)
  return year > new Date().getFullYear().toString().substring(2, 4) ? '19' : '20'
}

function isValidDate(value: string): boolean {
  let paddedValue = value.padEnd(5, '1')

  if (paddedValue.length === 5 && paddedValue.endsWith('3')) paddedValue += '0'
  else paddedValue += '1'

  const year = paddedValue.substring(0, 2)
  const month = paddedValue.substring(2, 4)
  const day = paddedValue.substring(4, 6)

  const century = determineCentury(paddedValue)

  const date = new Date(`${century}${year}-${month}-${day}`)

  return date.getFullYear() === Number(`${century}${year}`) && date.getMonth() === Number(month) - 1 && date.getDate() === Number(day)
}

function isValidBisDate(value: string): boolean {
  if (value.length <= 2) return isValidDate(value)

  const month = Number(value.substring(2, 4).padEnd(2, '1'))

  if (month > 40) return isValidDate(`${value.substring(0, 2)}${(month - 40).toString().padStart(2, '0')}${value.substring(4)}`)
  if (month > 20) return isValidDate(`${value.substring(0, 2)}${(month - 20).toString().padStart(2, '0')}${value.substring(4)}`)

  return isValidDate(value)
}

function isValidBirthCounter(value: string): boolean {
  return !['000', '999'].includes(value)
}

function addCheckSum(value: string): string {
  const centuryModifier = determineCentury(value) === '20' ? '2' : ''
  const checkSum = 97 - Number(centuryModifier + value.substring(0, 9)) % 97
  return value.substring(0, 9) + checkSum.toString().padStart(2, '0')
}

function completeBirthCounter(value: string): string {
  const birthCounter = value.substring(6, 9)
  const randomBirthCounter = Math.ceil(Math.random() * 500).toString().padStart(3, '0')
  const mergedBirthCounters = (birthCounter[0] || randomBirthCounter[0]) + (birthCounter[1] || randomBirthCounter[1]) + (birthCounter[2] || randomBirthCounter[2])

  if (!isValidBirthCounter(mergedBirthCounters)) return completeBirthCounter(value)

  return value.substring(0, 6) + mergedBirthCounters
}

function completeDate(value: string): string {
  return completeDay(completeMonth(completeYear(value)))
}

function completeYear(value: string): string {
  const year = value.substring(0, 2)
  const randomYear = Math.floor(Math.random() * 100).toString().padStart(2, '0')
  return (year[0] || randomYear[0]) + (year[1] || randomYear[1]) + value.substring(2)
}

function completeMonth(value: string): string {
  const month = value.substring(2, 4)
  const randomMonth = Math.ceil(Math.random() * 12).toString().padStart(2, '0')

  const mergedValue = value.substring(0, 2) + (month[0] || randomMonth[0]) + (month[1] || randomMonth[1])

  if (!isValidDate(mergedValue) && !isValidBisDate(mergedValue)) return completeMonth(value)

  return mergedValue + value.substring(4)
}

function completeDay(value: string): string {
  const day = value.substring(4, 6)
  const randomDay = Math.ceil(Math.random() * 31).toString().padStart(2, '0')

  const mergedValue = value.substring(0, 4) + (day[0] || randomDay[0]) + (day[1] || randomDay[1])

  if (!isValidDate(mergedValue) && !isValidBisDate(mergedValue)) return completeDay(value)

  return mergedValue + value.substring(6)
}