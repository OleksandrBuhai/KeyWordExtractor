import {
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    CircularProgress
} from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { setModalOpen, selectKeywords } from '../slices/keywordsSlice'



const KeywordsModal:React.FC = () => {

    const dispatch = useDispatch()
    const { value: keywords, loading, modalOpen } = useSelector(selectKeywords)

    const closeModal = () => {
        dispatch(setModalOpen(false))
      }
    
    return (
        <>
        <Modal isOpen={ modalOpen } onClose={ closeModal }>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>
                Keywords
            </ModalHeader>
            <ModalCloseButton/>
            <ModalBody display='flex' alignItems='center' justifyContent='center'>
                { loading ? (
                    <CircularProgress isIndeterminate color="blue.300"/>
                ) : (
                    <Text>
                        {keywords}
                    </Text>
                ) }
            </ModalBody>
            <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={closeModal}>
                    Close
                </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
        </>
    )
}


export default KeywordsModal
