import { Button, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";


interface TextInpuProps {
    extractKeywords: (text:string)=> void
}

const TextInput:React.FC<TextInpuProps> = ({extractKeywords}) => {

    const [text, setState] = useState('')
    const toast = useToast()

    const submitText = () => {
        if (text === '') {
            toast({
                title: 'Text field is empty',
                description: 'Please enter some text',
                status: 'error',
                duration: 5000,
                isClosable: false
            })
        } else {
            extractKeywords(text)
        }
    }

    return (
        <>
            <Textarea bg='blue.400'
                color='white' padding={4} marginTop={6} height={200} value={text} onChange={(e) => setState(e.target.value)} />
            <Button bg='blue.500' color='white' marginTop={4} width='100%'
                _hover={{ bg: 'blue.700' }}
                onClick={submitText}
            >
                Extract Keywords
            </Button>

        </>
    )
}

export default TextInput