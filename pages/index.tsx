import { useState } from 'react'
import { Section } from '@styled/Section'
import { SearchBox } from '@src/components/SearchBox'
import Head from 'next/head'

export default function Home(): JSX.Element {
  const [searchString, setSearchString] = useState('')

  return (
    <div>
      <Head>
        <title>Transpic</title>
        <meta name="description" content="Translate text and get related image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Section>
          <SearchBox value={searchString} onChange={setSearchString} />
        </Section>
      </main>

      <footer></footer>
    </div>
  )
}
