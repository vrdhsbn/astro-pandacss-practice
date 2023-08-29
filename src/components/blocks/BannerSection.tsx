import { Box, Stack, VStack, styled } from 'styled-system/jsx'

const BannerSection = () => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      alignItems={'flex-start'}
      gap={'32px'}
      pt={'40px'}
      pb={'64px'}
      borderTop={'solid 1px #ccc'}
    >
      <Box w={'100%'}>
        <styled.img src="/panda/assets/images/image2.png" alt="image" w={'100%'} />
      </Box>
      <VStack w={'100%'} alignItems={'flex-start'}>
        <styled.p fontSize={'18px'} fontWeight={'bold'} color={'#0073ff'}>
          審査請求について
        </styled.p>
        <styled.p lineHeight={'1.6'}>
          説明テキストが入ります説明テキストが入ります説明テキストが入ります
          説明テキストが入ります説明テキストが入ります
        </styled.p>
      </VStack>
    </Stack>
  )
}

export default BannerSection
