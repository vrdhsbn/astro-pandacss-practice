import { HStack, Stack, VStack, styled } from 'styled-system/jsx'
import FormLoginButton from '../parts/FormLoginButton'
import TextInput from '../parts/TextInput'

const HeroSection = () => {
  return (
    <styled.section>
      <Stack
        direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
        justifyContent={'center'}
        alignItems={'center'}
        pl={{ base: '24px', md: '120px' }}
        pr={{ base: '24px', md: '40px' }}
        h={'calc(100vh - 160px)'}
        minH={'640px'}
        bg={'#dfedf5'}
      >
        <VStack
          w={'100%'}
          alignItems={'flex-start'}
          pr={{ base: 0, sm: '64px', md: '64px', lg: '20vw' }}
        >
          <styled.p fontSize={{ base: '16px', md: '18px' }} color={'#666'} fontWeight={'bold'}>
            Panda CSS Test Site
          </styled.p>
          <styled.p
            fontSize={{ base: '24px', md: '32px' }}
            color={'#666'}
            fontWeight={'bold'}
            mt={'24px'}
          >
            タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります
          </styled.p>
        </VStack>
        <styled.form w={'100%'}>
          <VStack
            gap={'16px'}
            w={{ base: '100%', md: '460px' }}
            p={'32px 48px'}
            mt={{ base: '32px', md: 0 }}
            bg={'#fff'}
            border={'solid 1px #ccc'}
            flexShrink={0}
          >
            <styled.p>会員ログイン</styled.p>
            <TextInput id="name" placeholder="ユーザー名" />
            <TextInput id="password" placeholder="パスワード" isPasswordForm />
            <FormLoginButton>ログイン</FormLoginButton>
          </VStack>
        </styled.form>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'flex-start' }}
        alignItems={{ base: 'flex-start', md: 'center' }}
        h={'80px'}
        bg={'#ccc'}
        px={{ base: '16px', md: '32px' }}
        gap={{ base: '8px', md: '40px' }}
      >
        <styled.span fontWeight={'bold'}>重要なお知らせ</styled.span>
        <HStack gap={{ base: '16px', md: '40px' }}>
          <styled.span fontWeight={'bold'}>2020.03.04</styled.span>
          <styled.a href="#" color={'#0073ff'} fontWeight={'bold'}>
            ○○○○グループの事業戦略を発表
          </styled.a>
        </HStack>
      </Stack>
    </styled.section>
  )
}

export default HeroSection
