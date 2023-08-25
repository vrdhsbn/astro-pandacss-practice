import { styled } from 'styled-system/jsx'
import { HStack, VStack } from 'styled-system/jsx'

const menuItems1 = [
  { label: '🐼テストサイトとは', href: '#' },
  { label: '会長挨拶', href: '#' },
  { label: '役員名簿', href: '#' },
  { label: '参加特定行政庁一覧', href: '#' },
  { label: '協議会の規約等', href: '#' },
]

const menuItems2 = [
  { label: '🐼会議について', href: '#' },
  { label: '協議・提言について', href: '#' },
]

const menuItems3 = [
  { label: '審査請求について', href: '#' },
  { label: 'お問い合わせ', href: '#' },
  { label: 'プライバシーポリシー', href: '#' },
]

const Footer = () => {
  return (
    <styled.footer bg={'#333'} color={'#fff'} p={'32px'}>
      <HStack justifyContent={'space-between'} alignItems={'flex-start'}>
        <HStack alignItems={'flex-start'} gap={'32px'}>
          <ColumnContainer headings="協議会について" array={menuItems1} />
          <VStack alignItems={'flex-start'}>
            <HStack alignItems={'flex-start'} gap={'32px'}>
              <ColumnContainer headings="活動内容" array={menuItems2} />
            </HStack>
            <HStack alignItems={'flex-start'} gap={'32px'} mt={'24px'}>
              <ColumnContainer headings="" array={menuItems3} />
            </HStack>
          </VStack>
        </HStack>
        <VStack gap={'4em'} alignItems={'stretch'}>
          <HStack alignItems={'flex-start'} gap={'32px'}>
            <styled.p>お問い合わせ</styled.p>
            <styled.p fontWeight={'700'}>
              🐼テストサイト事務局
              <br />
              〒000-0000 北海道札幌市中央区北X条西Y丁目
              <br />
              🐼テストサイトビル内
              <br />
              TEL 0120-000-000（直通）
            </styled.p>
          </HStack>
          <styled.p fontSize={'12px'} textAlign={'right'}>
            (c)Panda CSS test site
          </styled.p>
        </VStack>
      </HStack>
    </styled.footer>
  )
}

const ColumnContainer = ({ headings, array }: { headings: string; array: any[] }) => {
  const menuItems = array
  return (
    <>
      <styled.p minW={'4em'}>{headings}</styled.p>
      <VStack alignItems={'flex-start'}>
        {menuItems.map((item, index) => (
          <styled.a href="" key={index} fontWeight={'700'} _hover={{ opacity: '.6' }}>
            {item.label}
          </styled.a>
        ))}
      </VStack>
    </>
  )
}

export default Footer
