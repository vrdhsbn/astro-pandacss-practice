import { HStack, styled } from 'styled-system/jsx'
import LoginButton from '../parts/LoginButton'
import SearchBox from '../parts/SearchBox'

const menuItems = [
  { label: '協議会について', href: '#' },
  { label: '活動内容', href: '#' },
  { label: '審査請求について', href: '#' },
  { label: 'よくあるご質問', href: '#' },
  { label: 'お知らせ', href: '#' },
]

const Header = () => {
  return (
    <styled.header bg={'#333'} color={'#fff'}>
      <HStack justifyContent={'space-between'} alignItems={'center'} h={'80px'} p={'32px'}>
        <styled.h1 fontSize={'20px'} fontWeight={'700'}>
          🐼テストサイト
        </styled.h1>
        <HStack gap={'40px'}>
          <styled.ul display={'flex'} gap={'32px'}>
            {menuItems.map((item, index) => (
              <styled.li key={index} fontWeight={'700'}>
                <a href={item.href}>{item.label}</a>
              </styled.li>
            ))}
          </styled.ul>
          <HStack gap={'16px'}>
            <LoginButton>会員ログイン</LoginButton>
            <SearchBox></SearchBox>
          </HStack>
        </HStack>
      </HStack>
    </styled.header>
  )
}

export default Header
