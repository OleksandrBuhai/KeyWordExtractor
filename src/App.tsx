import { Box, Container } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import Footer from "./components/Footer"
import Header from "./components/Header"
import KeywordsModal from './components/KeyWordsModal'
import TextInput from "./components/TextInput"
import { selectKeywords, setKeywords, setLoading, setModalOpen } from "./slices/keywordsSlice"

function App() {

  const dispatch = useDispatch()
  useSelector(selectKeywords)

  const extractKeywords = async (text: string) => {
    dispatch(setLoading(true))
    dispatch(setModalOpen(true))

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content:
              'Extract keywords from this text. Make the first letter of each word uppercase and separate with commas\n\n' +
              text,
          },
        ],
        model: 'gpt-3.5-turbo'
      }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_OPENAI_API_URL,
        options
      )
      const json = await response.json();
      dispatch(setKeywords(json.choices[0].message.content))
      dispatch(setLoading(false))
    } catch (error) {
      console.error(error)
    }
  };


  return (
    <Box bg='blue.600' color='white' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <KeywordsModal />
    </Box>
  )
}

export default App


