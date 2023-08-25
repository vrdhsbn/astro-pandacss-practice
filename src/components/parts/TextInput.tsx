import { styled } from 'styled-system/jsx'

const TextInput = ({
  id,
  placeholder,
  isPasswordForm,
}: {
  id: string
  placeholder: string
  isPasswordForm?: boolean
}) => {
  return (
    <styled.input
      type={isPasswordForm ? 'password' : 'text'}
      name=""
      id={id}
      placeholder={placeholder}
      w={'100%'}
      border={'solid 1px #ccc'}
      p={'8px 16px'}
      autoComplete={isPasswordForm ? 'current-password' : undefined}
    />
  )
}

export default TextInput
