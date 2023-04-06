import React from 'react';

export const Title = (title) => {
  if (title.primary) return <h1>{ title.children }</h1>
  if (title.secondary) return <h2>{ title.children }</h2>
  else return <strong>{ title.children }</strong>
}

export default Title;