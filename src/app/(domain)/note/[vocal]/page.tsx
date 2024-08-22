import React from 'react'
import VocalList from './_components/VocaList'
import { getWord } from '@/axios/word'

const Page = async() => {
  const {data} = await getWord();
  return (
    <VocalList voca={data.list}/>
  )
}

export default Page