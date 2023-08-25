import { Center, styled } from 'styled-system/jsx'
import Headings from '../parts/Headings'
import PrimaryButton from '../parts/PrimaryButton'
import Table from '../parts/Table'

const newsList = [
  {
    id: 0,
    date: '2020.03.04',
    title: '○○○○グループの事業戦略を発表',
    href: '#',
  },
  {
    id: 1,
    date: '2020.02.14',
    title: '「日経×TECH」にて○○○○が紹介されました',
    href: '#',
  },
  {
    id: 2,
    date: '2020.03.04',
    title: '○○○○グループの事業戦略を発表',
    href: '#',
  },
  {
    id: 3,
    date: '2020.03.04',
    title: '「日経産業新聞」に、経営統合について紹介されました',
    href: '#',
  },
  {
    id: 4,
    date: '2020.03.04',
    title: '○○○○グループの事業戦略を発表',
    href: '#',
  },
]

const NewsSection = () => {
  return (
    <styled.section w={'100%'}>
      <Headings>お知らせ</Headings>
      <Table data={newsList} />
      <Center mt={'32px'}>
        <PrimaryButton>すべて見る</PrimaryButton>
      </Center>
    </styled.section>
  )
}

export default NewsSection
