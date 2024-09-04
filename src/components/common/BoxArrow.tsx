'use client'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react'
import React from 'react'

const BoxArrow = ({iconColor="paragraph",borderColor="darkGreen",...props}) => {
  return (
    <Flex
          w={"30px"}
          h={"30px"}
          borderRadius={"50%"}
          border={`2px solid ${borderColor}`}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
          {...props}
        >
          <Flex
            flexDir={"row"}
            transform={"rotate(-45deg) translateX(-16px)"}
            _groupHover={{
              transform: "rotate(-45deg) translateX(16px)",
              color: "red",
            }}
            transition={"transform 0.3s linear"}
            gap={"16px"}
          >
            <ArrowForwardIcon transform={"rotate(0)"} color={iconColor} />
            <ArrowForwardIcon transform={"rotate(0)"} color={iconColor} />
          </Flex>
        </Flex>
  )
}

export default BoxArrow