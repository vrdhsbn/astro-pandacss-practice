import { Stack, VStack, styled } from 'styled-system/jsx'
import type { StackProps } from 'styled-system/jsx'

type ColumnContainerType = {
  headings: string
  array: any[]
} & StackProps

const ColumnContainer = ({ headings, array, ...props }: ColumnContainerType) => {
  const menuItems = array
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      alignItems={'flex-start'}
      gap={{ base: '8px', md: '32px' }}
      {...props}
    >
      <styled.p minW={'4em'}>{headings}</styled.p>
      <VStack alignItems={'flex-start'}>
        {menuItems.map((item, index) => (
          <styled.a href="" key={index} fontWeight={'700'} _hover={{ opacity: '.6' }}>
            {item.label}
          </styled.a>
        ))}
      </VStack>
    </Stack>
  )
}

export default ColumnContainer
