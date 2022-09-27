import { Accordion, AccordionButton, AccordionIcon, Stack, AccordionItem, AccordionPanel, Avatar, Box, Center, Flex, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import Heady from './Heady'
import about from '../aboutme'
import Gallery from './Gallery'
import { FaCheckCircle, FaQuoteLeft } from 'react-icons/fa'


function Intro() {

    const { aboutMe, what_can_i_do} = about
  return (
    <Flex
        direction="column"
        alignItems="center"
        data-aos="fade-up"
        justifyContent="center"
        id="intro"
        p={4}
    >
        <Heady fontweight={"bold"}>
            Quick Start
        </Heady>
        <Box 
            m={3}
            p={4}
        >
            <Center m={4}>
                <Avatar
                    src={require('../images/pormal_ako.jpg')}
                    size="lg"
                    background="transparent"
                    />
            </Center>
            <Stack
                borderRadius="lg"
                maxW={"xl"}
                h="fit-content"
                borderWidth="thin"
                position={"relative"}
                p={"2"}
                mt={8}
            >
                <Heady 
                    position="absolute" 
                    color="#a0522d" 
                    fontSize={"3xl"}
                    top="0"
                    left="0"
                    transform={"translate(-10px, -10px)"}
                >
                    <FaQuoteLeft />
                </Heady>
                <Box p="2.5">
                    <Text as="b" bgClip="text" bgGradient="linear(to-r, #cd7f32, #a0522d, #a0522d)" fontSize={"xl"} mr="2">Time</Text>
                    <Text as="i" fontSize={"lg"} mr="2">is a wide room for improvement. Never</Text>
                    <Text as="b"  bgClip="text" bgGradient="linear(to-r, #cd7f32, #a0522d, #a0522d)" fontSize={"lg"} mr="1">waste</Text>
                    <Text as="i" fontSize={"lg"} mr="1">it.</Text>
                </Box>
                <Text as="cite" w="100" textAlign={"right"} mb={3} fontSize={"sm"}>Karl Sunogan</Text>
            </Stack>
            <Heading 
                fontSize={21}
                m={8}
                fontFamily="Coffee2"
                fontWeight="normal"
                textAlign="center">
                Facts About Me
            </Heading>
            <List spacing={3}>
                {
                    aboutMe.map(my => {
                        return (
                            <ListItem fontSize={14} key={my.id}>
                                <ListIcon as={my.icon} color="#a0522d" />
                                {my.text}
                            </ListItem>
                        )
                    })
                }
            </List>
        </Box>
        {/* gallery
        <Gallery/> */}
        <Box 
            mt={8}
            p={4}
            maxW="680px"
        >
            <Heading 
                fontSize={21}
                mb={5}
                fontFamily="Coffee2"
                fontWeight="normal"
                textAlign="center">
                Why choose me?
            </Heading>
            <List fontSize={14}>
                <ListItem>
                    As a professional and an individual who strive for growth and
                    success, I know I also lacking of experience on how an organization
                    works. But my knowledge of operating the software tools is an encouragement 
                    for me to incorporate my skills and knowledge for future organizations. I 
                    strongly believe that I can keep up with fast-paced environment and
                    fulfill all the needs of a business or an organization.
                </ListItem>
                <Accordion allowMultiple mt={4}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box  fontSize={14} flex="1" textAlign="left">
                                    What Can I Do?
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <List spacing={3}>
                                {
                                    what_can_i_do.map((text, i) => {
                                        return (
                                            <ListItem key={i} fontSize={14}>
                                                <ListIcon as={FaCheckCircle} color="#a0522d" />
                                                {text}
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </List>
        </Box>
    </Flex>
  )
}

export default Intro