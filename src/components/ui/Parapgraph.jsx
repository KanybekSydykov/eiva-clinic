import React from 'react'
import { Text } from '@chakra-ui/react'

const Parapgraph = ({content, ...props}) => {
  return (
    <Text fontFamily={'mulish'} {...props}>
        {content}
    </Text>
  )
}

export default Parapgraph