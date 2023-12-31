import { Box, HStack, Stack, VStack, styled } from 'styled-system/jsx'
import ContactButton from '../parts/ContactButton'

const ContactBlock = () => {
  return (
    <VStack
      alignItems={{ base: 'stretch', md: 'center' }}
      p={{ base: '24px 32px', md: '64px' }}
      bg={'#ddd'}
    >
      <styled.p fontSize={'18px'} fontWeight={'700'}>
        お問い合わせ
      </styled.p>
      <styled.p fontSize={{ base: '20px', md: '28px' }} fontWeight={'700'}>
        🐼テストサイトに対するご質問・入会は以下よりお問い合わせください
      </styled.p>
      <Box my={{ base: '8px', md: '24px' }}>
        <ContactButton>お問い合わせ</ContactButton>
      </Box>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        alignItems={'center'}
        gap={{ base: '16px', md: '24px' }}
      >
        <styled.p fontSize={'18px'} fontWeight={'700'}>
          お電話でのお問い合わせ
        </styled.p>
        <styled.p
          fontSize={'30px'}
          fontWeight={'700'}
          display={'flex'}
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={'center'}
          _after={{
            display: { base: 'none', md: 'block' },
            content: '""',
            w: '1px',
            h: '30px',
            borderRight: 'solid 1px #999',
            ml: '16px',
          }}
        >
          <styled.span>📞0120-000-0000</styled.span>
          <styled.span fontSize={'14px'} fontWeight={'700'}>
            （平日00:00〜00:00）
          </styled.span>
        </styled.p>
        <styled.a href="#" color={'#0073ff'} fontSize={'18px'} fontWeight={'700'}>
          よくあるご質問
        </styled.a>
      </Stack>
    </VStack>
  )
}

export default ContactBlock
