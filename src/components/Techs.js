import { Grid, GridItem, VStack, Image, Spacer } from '@chakra-ui/react'
import React from 'react'
import Heady from './Heady'
import skills from '../skills'
import FadeBox from '../custom/FadeBox'

function Techs() {
  return (
    <VStack
        p={4.5}
        w="full"
        id="techs"
        h="80vh"
        spacing={6}
    >
        <Spacer/>
        <Heady fontweight={"normal"} data-aos="fade-up">Technologies Used</Heady>
        <Grid 
            templateColumns="repeat(3, minmax(100px, 1fr))" 
            gap="5px"
            justifyItems="center"
            w="full"
            data-aos="fade-up"
            mt={8}
            h="400px"
            p={4}>
            {
                skills.map((skill, i) => {
                    return (
                        <GridItem
                            h="80px"
                            key={i}
                            w="80px">
                            <Image 
                                src={skill}
                                filter="contast(110%)"
                            />
                        </GridItem>
                    )
                })
            }
        </Grid>
    </VStack>
  )
}

export default React.memo(Techs)