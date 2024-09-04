'use client'

import { Button } from '@chakra-ui/react'
import React from 'react'
import BoxArrow from '../common/BoxArrow'
import { useRouter } from 'next/navigation'



const ButtonWithArrow = ({link,text}:{link:string,text:string}) => {
    const router = useRouter()
  return (
    <Button
    role="group"
    fontSize={"16px"}
    fontWeight={"500"}
    variant={"brandSecondary"}
    mt={"20px"}
    onClick={()=> router.push(link)}
  >
  {text}
    <BoxArrow
      ms={"10px"}
      borderColor="rgba(15, 95, 98, 0.6)"
      iconColor="rgba(15, 95, 98, 0.6)"
    />
  </Button>
  )
}

export default ButtonWithArrow