import { HStack, IconButton, Link,Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaFacebook } from 'react-icons/fa'

function Footer(props) {
  
  return (
    <VStack
        h="fit-content"
        w="full"
        id="footer"
        borderTop="1px"
        borderTopColor={"#ccc"}
        p={2.5}
    >
        <Text fontSize={13}>All rights reserved. 2022</Text>

            <HStack spacing={1}>
                <Link href="https://github.com/ronskie69" target="_blank"> 
                  <IconButton
                    isRound
                    size="lg"
                    background="transparent"
                    icon={<FaGithub/>}
                  />
                </Link>
                <Link href="https://facebook.com/sunog.an003" target="_blank"> 
                  <IconButton
                    isRound
                    size="lg"
                    background="transparent"
                    icon={<FaFacebook/>}
                  />
                </Link>
            </HStack>
    </VStack>
  )
}

export default Footer