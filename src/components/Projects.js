import { 
    Flex,
    Grid,
    GridItem,
    Image,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useMediaQuery
} from '@chakra-ui/react'
import Lightbox from 'react-image-lightbox'
import React, { useEffect, useState } from 'react'
import Heady from './Heady'
import { web, graphics } from '../projects'
import ProjectCard from './ProjectCard'

import '../css/projects.css'
import Aos from 'aos'

function Projects() {

    const [ selected, setSelected] = useState("Web")
    const [ imgIndex, setImgIndex ] = useState(0)
    const [ isOpen, setIsOpen ] = useState(false)
    const [ smallScreen ] = useMediaQuery('(max-width: 768px)')

    useEffect(() => {
        Aos.refresh()
    },[selected])
  return (
    <Flex
        w="100%"
        id="projects"
        justifyContent="center"
        h="fit-content"
        alignItems="center"
        direction="column"
        p={2}
    >
        <Heady fontweight={"normal"} m={4}>My Works</Heady>
        <Tabs mt={4} colorScheme="brand" variant="soft-rounded" align="center">
            <TabList>
                <Tab onClick={() => setSelected("Web")} textColor={selected === "Web" && "#fff"}>
                    <Text size="sm" fontWeight="normal">Web Development</Text>
                </Tab>
                <Tab onClick={() => setSelected("Graphic")} textColor={selected === "Graphic" && "#fff"}>
                    <Text size="sm" fontWeight="normal">Graphic Design</Text>
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Grid 
                        mt="4"
                        className="grid-projects"
                        spacing={6}>
                        {
                            web.map((project, index) => {
                                return (
                                    <ProjectCard
                                        index={index}
                                        key={project.id}
                                        allProjects={web}
                                        project={project}/>
                                )
                            })
                        }
                    </Grid>
                </TabPanel>
                <TabPanel>
                    <Grid 
                        templateColumns={smallScreen ? "repeat(3, 75px)": "repeat(5, 200px)"}
                        placeContent="center"
                        w="fit-content"
                        gap="5px"
                        h="fit-content">
                        {
                            graphics.map((project, index) => {
                                return (
                                    <GridItem key={index}>
                                        <Image
                                            src={project.image}
                                            border='1px'
                                            w="full"
                                            boxShadow="lg"
                                            boxSize={smallScreen ? "75px": "200px"}
                                            onClick={() => {
                                                setImgIndex(index)
                                                setIsOpen(!isOpen)
                                            }}
                                        />
                                    </GridItem>
                                )
                            })
                        }
                    </Grid>
                    {
                        isOpen &&
                        <Lightbox
                            mainSrc={graphics[imgIndex].image}
                            nextSrc={graphics[(imgIndex + 1) % graphics.length].image}
                            onCloseRequest={() => setIsOpen(!isOpen)}
                            onMoveNextRequest={() => setImgIndex((imgIndex+1)%graphics.length)}
                            onMovePrevRequest={() => setImgIndex((imgIndex + graphics.length -1)%graphics.length)}
                            imagePadding={30}
                            enableZoom={false}
                            prevSrc={graphics[(imgIndex + graphics.length - 1) % graphics.length]}
                        />     
                    }
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Flex>

  )
}

export default Projects