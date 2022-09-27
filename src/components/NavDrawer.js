import { Box, Drawer, Image, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Button, Text, VStack, DrawerBody } from '@chakra-ui/react'
import React from 'react'
import Heady from './Heady'
import { FaLaugh, FaHammer, FaHome, FaPhone, FaBullseye } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { scroller, animateScroll } from 'react-scroll'

function NavDrawer({ isOpen, onClose }) {

    const onClickLinkItem = (id, offset) => {
        scroller.scrollTo(id, {
            duration: 1500,
            delay: 100,
            smooth: 'easeInQuint',
            offset: offset
        })
    }

  return (
    <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
    >
        <DrawerContent maxW="240px" h="fit-content" borderBottomEndRadius="10px">
            <DrawerCloseButton/>
            <DrawerHeader>
            <Flex mt={8} justifyContent="center" cursor="pointer">
                <Image 
                    src={require('../images/dog.png')}
                    boxSize="30px"
                    mr={2}
                />
                <Heady 
                    fontweight={"extrabold"}
                    fontSize={21}
                    onClick={() => {
                        animateScroll.scrollToTop({
                            duration: 1500,
                            delay: 100,
                            smooth: 'easeInQuint',
                        })
                    }}>
                        KSunog
                </Heady>
            </Flex>
            </DrawerHeader>
            <DrawerBody fontFamily={"Gruppo"}>
                <VStack spacing={3}>
                    <Button 
                        w="full"
                        borderRadius="30px"
                        onClick={() => {
                            animateScroll.scrollToTop({
                                duration: 500,
                                smooth: 'easeInOutQuart',
                            })
                        }}
                        _hover={{ background: '#a0522d', transition: 0.4, color: '#f4f5f6'}}
                        background="transparent">
                            Home
                    </Button>
                    <Button
                        w="full"
                        borderRadius="30px"
                        onClick={() => onClickLinkItem('intro', -100)}
                        _hover={{ background: '#a0522d', transition: 0.4, color: '#f4f5f6'}}
                        background="transparent" >
                            About
                    </Button>
                    <Button 
                        w="full"
                        borderRadius="30px"
                        onClick={() => onClickLinkItem('projects', -100)}
                        _hover={{ background: '#a0522d', transition: 0.4, color: '#f4f5f6'}}
                        background="transparent">
                            Projects
                    </Button>
                    <Button
                        w="full"
                        borderRadius="30px"
                        onClick={() => onClickLinkItem('techs', -50)}
                        _hover={{ background: '#a0522d', transition: 0.4, color: '#f4f5f6'}}
                        background="transparent">
                            Skills
                    </Button>
                    <Button
                        w="full"
                        borderRadius="30px"
                        onClick={() => onClickLinkItem('contact', -100)}
                        _hover={{ background: '#a0522d', transition: 0.4, color: '#f4f5f6'}}
                        background="transparent">
                            Contact
                    </Button>
                </VStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
  )
}

export default NavDrawer