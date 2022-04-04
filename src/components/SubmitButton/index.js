import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({children, onClick}) => {
  return (
    <Button onClick={onClick}>{children}</Button>
  )
}
