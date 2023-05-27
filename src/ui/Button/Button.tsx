import React from 'react'

export const Button = React.memo((props: any) => {
  return (
    <>
      <button>
        {props.label}
      </button>
    </>
  )
})
