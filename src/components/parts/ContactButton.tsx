import { styled } from 'styled-system/jsx'
import type { ReactNode } from 'react'

const ContactButton = ({ children }: { children: ReactNode }) => {
  return (
    <styled.button
      border={'solid 1px #0073ff'}
      borderRadius={'8px'}
      bg={'#0073ff'}
      p={'16px'}
      color={'#fff'}
      fontWeight={'700'}
      w={{ base: '100%', md: '520px' }}
      cursor={'pointer'}
      transition={'background .3s ease'}
      _hover={{
        bg: '#fff',
        color: '#0073ff',
      }}
      onClick={() => alert('お問い合わせありがとうございます')}
    >
      {children}
    </styled.button>
  )
}

export default ContactButton
