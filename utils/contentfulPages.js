const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENT_DELIVERY_API

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchHero() {
  const entry = await client.getEntry('7jV3yUY8Yr0SIWGWZJJ29H')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}

export async function fetchLeftRightText() {
  const entry = await client.getEntry('6wyjmURIJGUIqTLFp9YCbc')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}

export async function fetchFooter() {
  const entry = await client.getEntry('7828oR6NenrsI5ygNGeqPj')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}

export async function fetchGroomsmenPageContent() {
  const entry = await client.getEntry('5563KlTsr67jLyo6xx9qP2')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}