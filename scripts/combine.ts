import {readdirSync, writeFileSync} from 'fs'

const detectedFiles = readdirSync('./data/detected').map((fileName) => ({
  ...require('../data/catalogue/' + fileName),
  ...require('../data/detected/' + fileName)
}))

writeFileSync('./data/all.json', JSON.stringify(detectedFiles, null, '  '))
