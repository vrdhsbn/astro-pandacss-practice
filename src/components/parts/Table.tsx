import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'

type DataType = {
  id: number
  date: string
  title: string
  href?: string
}

const Table = ({ data }: { data: Array<DataType> }) => {
  return (
    <styled.table w={'100%'} mt={'16px'}>
      <styled.tbody>
        {data.map((row) => (
          <styled.tr
            key={row.id}
            className={css({
              '&:last-of-type th': { borderBottom: 'solid 1px #ccc' },
              '&:last-of-type td': { borderBottom: 'solid 1px #ccc' },
            })}
          >
            <styled.th borderTop={'solid 1px #ccc'} py={'16px'} fontWeight={'bold'}>
              {row.date}
            </styled.th>
            <styled.td borderTop={'solid 1px #ccc'} py={'16px'} pl={'40px'}>
              {row.href ? (
                <styled.a href={row.href} color={'#0073ff'} fontWeight={'bold'}>
                  {row.title}
                </styled.a>
              ) : (
                <>{row.title}</>
              )}
            </styled.td>
          </styled.tr>
        ))}
      </styled.tbody>
    </styled.table>
  )
}

export default Table
