import Head from 'next/head'
import { Fragment } from 'react'

export default function Heading(){
    return(
        <Fragment>
            <Head>
                <title>Looking4</title>
                <meta name="description" content="Looking4 freelancing website" />
                <link rel="icon" href="/logo/looking4_favicon.png" />
            </Head>
        </Fragment>
    )
}