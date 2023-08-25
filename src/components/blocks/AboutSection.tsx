import { HStack, styled } from 'styled-system/jsx'
import Headings from '../parts/Headings'
import Card from '../parts/Card'

const contentList = [
  {
    title: '🐼とは',
    description:
      '説明テキストが入ります説明テキストが入ります説明テキストが入ります説明テキストが入ります説明テキストが入ります',
  },
  {
    title: '参加特定行政庁一覧',
    description:
      '説明テキストが入ります説明テキストが入ります説明テキストが入ります説明テキストが入ります説明テキストが入ります',
  },
  {
    title: '協議会の規約等',
    description:
      '説明テキストが入ります説明テキストが入ります説明テキストが入ります説明テキストが入ります説明テキストが入ります',
  },
]

const AboutSection = () => {
  return (
    <styled.section>
      <Headings center>協議会について</Headings>
      <HStack gap={'32px'} alignItems={'flex-start'} mt={'40px'}>
        {contentList.map((content, index) => (
          <Card key={index} title={content.title} description={content.description} />
        ))}
      </HStack>
    </styled.section>
  )
}

export default AboutSection
