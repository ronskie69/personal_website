import React from 'react'
import { 
    Box,
    Image,
    Heading,
    Stack,
    Text,
    Button,
    IconButton,
    Link
} from '@chakra-ui/react'
import { FaLink } from 'react-icons/fa'
import LightBox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

function ProjectCard({project, allProjects, index}) {
    const [ isOpen, setOpen ] = React.useState(false);
    const [ currentImg, setCurrentImg ] = React.useState(0)

  return (
    <Box
        boxShadow="lg"
        border="1px"
        borderColor="#ccc"
        borderRadius="md"
        textAlign="center"
        className={`project-card ${project.type}`}
        p={project.type==="Website" ? 3 : 0}
        data-aos="fade-up"
        h="fit-content"
        w="210px"
        position={"relative"}
    >
    <Image
        zIndex="10"
        w="full"
        h="140px"
        border="#ccc"
        borderRadius={2}
        boxShadow={"xl"}
        mb="4"
        objectFit={project.type==="Website" ? "fill" : "cover"}
        src={project.image}
        onClick={() => {
            setCurrentImg(index)
            setOpen(!isOpen)
        }}
    />
        {
            project.type === "Website" &&
            <>
                <Heading
                fontSize={"md"}>
                    {project.title}
                </Heading>
                <Text
                    p={2}
                    fontSize={13}
                >{project.description}
                </Text>
                <Stack direction={"row"}>
                    {
                        project.languages.map((lang, i) => {
                            return <Button key={i} fontSize={12} leftIcon={<lang.icon/>} size="sm">{lang.name}</Button>
                        })
                    }
                    <Link href={project.link} target="_blank">
                        <IconButton
                            icon={<FaLink/>}
                            size="sm"
                        />
                    </Link>
                </Stack>
            </>
            
        }
        {
            isOpen &&
            <LightBox
                mainSrc={allProjects[currentImg].image}
                nextSrc={allProjects[(currentImg + 1) % allProjects.length].image}
                prevSrc={allProjects[(currentImg + allProjects.length - 1) % allProjects.length]}
                onCloseRequest={() => setOpen(!isOpen)}
                onMoveNextRequest={() => setCurrentImg((currentImg+1)%allProjects.length)}
                onMovePrevRequest={() => setCurrentImg((currentImg + allProjects.length -1)%allProjects.length)}
                imagePadding={30}
                enableZoom={true}
                imageCaption={allProjects[currentImg].info}
            />
                
                
        }
    </Box>
  )
}

export default React.memo(ProjectCard)

//setCurrentSong(songs[(currentSong + 1) % songs.length].song)
//allProjects[(currentImg + allProjects.length - 1) % allProjects.length]