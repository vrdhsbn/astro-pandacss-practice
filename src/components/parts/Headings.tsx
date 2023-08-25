import { styled } from 'styled-system/jsx'
import type { ReactNode } from 'react'

const Headings = ({ center, children }: { center?: boolean; children: ReactNode }) => {
  return (
    <styled.h2 textAlign={center ? 'center' : 'left'} fontWeight={'bold'} fontSize={'24px'}>
      {children}
    </styled.h2>
  )
}

export default Headings
