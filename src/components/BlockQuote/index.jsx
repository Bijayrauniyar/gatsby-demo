import React from 'react'

export default function blockQuote() {
  return (
    <>
      <blockquote className='news-block'>
        <p>
          <strong>Good news!</strong> We have been awarded trademark for
          "danfebooks".
                </p>
        <cite>
          Read{' '}
          <a href='press-release.html?utm_source=DanfeBooks&amp;utm_medium=LandingNews'>
            press release
                  </a>{' '}
          for more
                </cite>
      </blockquote>
    </>
  )
}

