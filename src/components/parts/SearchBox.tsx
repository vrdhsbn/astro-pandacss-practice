import { styled } from 'styled-system/jsx'
import { useEffect, useCallback } from 'react'

const SearchBox = () => {
  const keyFunc = useCallback((event: KeyboardEvent) => {
    if (event.code === 'Enter') {
      alert('検索しました！')
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', keyFunc, false)
  }, []) // eslint-disable-line

  return <styled.input type="text" placeholder="キーワードを入力" p={'6px 12px'} h={'40px'} />
}

export default SearchBox
