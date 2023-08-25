import { styled } from 'styled-system/jsx'
import Headings from '../parts/Headings'
import Table from '../parts/Table'

const calendarList = [
  {
    id: 0,
    date: '2020.03.04',
    title: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇',
  },
  {
    id: 1,
    date: '2020.03.04',
    title: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇',
  },
  {
    id: 2,
    date: '2020.03.04',
    title: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇',
  },
  {
    id: 3,
    date: '2020.03.04',
    title: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇',
  },
  {
    id: 4,
    date: '2020.03.04',
    title: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇',
  },
  {
    id: 5,
    date: '2020.03.04',
    title: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇',
  },
]

const CalendarSection = () => {
  return (
    <styled.section w={'100%'}>
      <Headings>行事カレンダー</Headings>
      <Table data={calendarList} />
    </styled.section>
  )
}

export default CalendarSection
