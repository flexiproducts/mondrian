import all from '../data/all.json'
import got from 'got'
import {JSDOM} from 'jsdom'
import {writeFileSync} from 'fs'
import {resolve} from 'path'

const data: any[] = all

async function main() {
  for (const artwork of data) {
    const {body} = await got(artwork.database)
    const website = new JSDOM(body).window.document
    const licenseText = website.querySelectorAll(
      '.galleria-info-licence-attribution'
    )[2]?.innerHTML
    artwork.publicDomain = licenseText === 'License under PUB DOM'

    for (const dd of website.querySelectorAll('dt + dd')) {
      const key = dd.previousElementSibling.innerHTML
      const value = clean(dd)
      if (key === 'English title') {
        artwork.title = value
      }
      if (key.startsWith('Date')) {
        artwork.date = value
      }
    }
    console.log(artwork.title, artwork.date, artwork.publicDomain)
  }

  writeFileSync(
    resolve(__dirname, '../data/all.json'),
    JSON.stringify(data, null, '  ')
  )
}

main()

function clean(node) {
  return removeChildNodes(node).innerHTML.trim()
}

function removeChildNodes(node) {
  for (var i = 0; i < node.childNodes.length; i++) {
    if (node.childNodes[i].nodeType != 3) node.removeChild(node.childNodes[i--])
  }
  return node
}
