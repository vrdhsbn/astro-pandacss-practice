import { styled } from 'styled-system/jsx'
import type { ReactNode } from 'react'

const FormLoginButton = ({ children }: { children: ReactNode }) => {
  return (
    <styled.button
      p={'8px 48px'}
      color={'#fff'}
      bg={'#333'}
      border={'solid 1px transparent'}
      fontWeight={'700'}
      borderRadius={'6px'}
      cursor={'pointer'}
      transition={'background .3s ease'}
      _hover={{
        bg: '#fff',
        color: '#333',
        border: 'solid 1px #333',
      }}
      onClick={() => alert('ログインしました')}
    >
      {children}
    </styled.button>
  )
}

export default FormLoginButton
