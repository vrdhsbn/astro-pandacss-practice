import { HStack, styled } from 'styled-system/jsx'
import Headings from '../parts/Headings'
import Card from '../parts/Card'

const contentList = [
  {
    title: '🐼会議について',
    description:
      '説明テキストが入ります説明テキストが入ります説明テキストが入ります説明テキストが入ります説明テキストが入ります',
  },
  {
    title: '建議・提言について',
    description:
      '説明テキストが入ります説明テキストが入ります説明テキストが入ります説明テキストが入ります説明テキストが入ります',
  },
]

const ActivitySection = () => {
  return (
    <styled.section>
      <Headings center>活動内容</Headings>
      <HStack gap={'32px'} alignItems={'flex-start'} mt={'40px'}>
        {contentList.map((content, index) => (
          <Card key={index} title={content.title} description={content.description} />
        ))}
      </HStack>
    </styled.section>
  )
}

export default ActivitySection
