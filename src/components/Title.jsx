import React from 'react';

export const Title = ({primary,secondary,children}) => {
  if (primary) return <h1>{children }</h1>
  if (secondary) return <h2>{children }</h2>
  else return <strong>{children }</strong>
}

export default Title;