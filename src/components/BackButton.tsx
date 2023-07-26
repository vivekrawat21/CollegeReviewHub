import React from 'react'
import Link from 'next/link'

type Props = {}

const BackButton = (props: Props) => {
  return (
    <div className="absolute top-0 left-0 mt-4 ml-4">
        <Link href="/">
          <button
            className="bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Back
          </button>
        </Link>
      </div>
  )
}

export default BackButton