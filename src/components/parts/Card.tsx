import { VStack, styled } from 'styled-system/jsx'

const Card = ({ title, description }: { title: string; description: string }) => {
  return (
    <VStack alignItems={'flex-start'} gap={'16px'}>
      <styled.img src="/panda/assets/images/image.png" alt="image" w={'100%'} />
      <styled.p fontSize={'18px'} fontWeight={'bold'} color={'#0073ff'}>
        {title}
      </styled.p>
      <styled.p lineHeight={'1.6'}>{description}</styled.p>
    </VStack>
  )
}

export default Card
