import { styled } from 'styled-system/jsx'
import type { ReactNode } from 'react'

const PrimaryButton = ({ children }: { children: ReactNode }) => {
  return (
    <styled.button
      border={'solid 1px #0073ff'}
      p={'8px 32px'}
      color={'#0073ff'}
      fontWeight={'700'}
      borderRadius={'10px'}
      cursor={'pointer'}
      transition={'background .3s ease'}
      _hover={{
        bg: '#0073ff',
        color: '#fff',
      }}
      onClick={() => alert('クリックされました！')}
    >
      {children}
    </styled.button>
  )
}

export default PrimaryButton
