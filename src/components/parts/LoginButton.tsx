import { styled } from 'styled-system/jsx'
import type { ReactNode } from 'react'

const LoginButton = ({ children }: { children: ReactNode }) => {
  return (
    <styled.button
      h={'40px'}
      border={'solid 1px #fff'}
      p={'4px 24px'}
      color={'#fff'}
      fontWeight={'700'}
      cursor={'pointer'}
      transition={'background .3s ease'}
      _hover={{
        bg: '#fff',
        color: '#333',
      }}
      onClick={() => alert('ログインしました')}
    >
      {children}
    </styled.button>
  )
}

export default LoginButton
