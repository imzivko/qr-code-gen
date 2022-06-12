import type { NextPage } from 'next'
import Head from 'next/head'
import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'

const Home: NextPage = () => {
  const [url, setUrl] = useState('')

  return (
    <div>
      <Head>
        <title>QR Code Generator</title>
        <meta name="Generate QR Codes" content="QR Code Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
        <h1 className="text-gray-600 font-['MonoLisa'] font-bold text-5xl mb-10">
          QR Code Generator
        </h1>
        <input
          className="mb-10 pl-3 font-['MonoLisa'] text-sm rounded-md pr-3 h-10 w-[400px] outline-none"
          type="text"
          spellCheck={false}
          name="qrcode"
          value={url}
          onChange={(evt: any) => setUrl(evt.target.value)}
        />
        {url && (
          <div className="relative">
            <QRCodeSVG
              value={url}
              size={512}
              bgColor="rgb(226 232 240)"
              fgColor="rgb(75 85 99)"
              level="H"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
