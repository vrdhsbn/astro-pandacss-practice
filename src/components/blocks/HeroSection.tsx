import { HStack, VStack, styled } from 'styled-system/jsx'
import FormLoginButton from '../parts/FormLoginButton'
import TextInput from '../parts/TextInput'

const HeroSection = () => {
  return (
    <styled.section>
      <HStack pl={'120px'} pr={'40px'} h={'calc(100vh - 160px)'} minH={'640px'} bg={'#dfedf5'}>
        <VStack w={'100%'} alignItems={'flex-start'} pr={'296px'}>
          <styled.p fontSize={'18px'} color={'#666'} fontWeight={'bold'}>
            Panda CSS Test Site
          </styled.p>
          <styled.p fontSize={'32px'} color={'#666'} fontWeight={'bold'} mt={'24px'}>
            タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります
          </styled.p>
        </VStack>
        <styled.form>
          <VStack
            gap={'16px'}
            w={'460px'}
            p={'32px 48px'}
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
      </HStack>
      <HStack h={'80px'} bg={'#ccc'} px={'32px'} gap={'40px'}>
        <styled.span fontWeight={'bold'}>重要なお知らせ</styled.span>
        <HStack gap={'40px'}>
          <styled.span fontWeight={'bold'}>2020.03.04</styled.span>
          <styled.a href="#" color={'#0073ff'} fontWeight={'bold'}>
            ○○○○グループの事業戦略を発表
          </styled.a>
        </HStack>
      </HStack>
    </styled.section>
  )
}

export default HeroSection
