import { Button, FormControl, Input, Textarea, Stack, Heading, FormLabel } from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import useToastify from '../custom/Toastify'
function ContactForm() {
    
    const setToast = useToastify();
    const [ mailData, setMailData ] = React.useState({
        emailSubject: '',
        emailMessage: ''
    });

    const submitMessage = (e) => {
        e.preventDefault()
        setToast({
            title: 'Opening email provider...',
            status: 'success',
            id: 'email'
        })
        setTimeout(window.open(`mailto:sunogan77@gmail.com?subject=${mailData.emailSubject}&body=${mailData.emailMessage}`), 2000)
        setMailData({ emailSubject: '', emailMessage: ''})
        return;
    }
  return (
    <form onSubmit={submitMessage}>
        <Heading 
            fontSize={21}
            fontWeight="normal"
            fontFamily="Coffee2"
        >Send Me An Email</Heading>
        <Stack spacing={3}>
            <FormControl isRequired mt={5}>
                <FormLabel fontSize={15}>Purpose/Message Title</FormLabel>
                <Input 
                    type="text"
                    placeholder="Enter your purpose or message title..."
                    name="emailSubject"
                    borderColor="#a0522d"
                    fontSize={15}
                    value={mailData.emailSubject}
                    onChange={(e) => setMailData({ ...mailData, [e.target.name]: e.target.value})}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel fontSize={15}>Your Message</FormLabel>
                <Textarea 
                    type="message"
                    placeholder="Enter your message here..."
                    name="emailMessage"
                    onChange={(e) => setMailData({ ...mailData, [e.target.name]: e.target.value})}
                    rows={4}
                    fontSize={15}
                    borderColor="#a0522d"
                    w="full"
                    value={mailData.emailMessage}
                />
                <Button
                    type="submit"
                    leftIcon={<FaEnvelope/>}
                    w="full"
                    bgColor="#a0522d"
                    color="#f4f5f6"
                    fontSize={15}
                    fontWeight="normal"
                    _hover={{ background: '#a0522d', filter: 'brightness(80%)' }}
                    mt={2}
                >Send Mail</Button>
            </FormControl>
        </Stack>
    </form>
  )
}

export default ContactForm