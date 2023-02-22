import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Recommends from './Recommends'
import Viewers from "./Viewers"
import NewDisney from "./NewDisney"
import Originals from './Originals'
import Trending from './Trending'
import { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {db} from '../firebase'
import { collection, getDocs} from "firebase/firestore"; 
import { setMovies } from '../features/movie/movieSlice'
import { selectedUserName } from '../features/user/userSlice'

const Home = ({props}) => {
  const movieRef = collection(db, "movies");
  const dispatch = useDispatch()
  const userName = useSelector(selectedUserName)
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    getDocs(movieRef).then((querySnapshot)=>{
      querySnapshot.forEach((doc) => {
        
      });
    })
  }, [])
  

  return (
    <Container>
        <ImgSlider/>
        <Viewers/>
        <Recommends/>
        <NewDisney/>
        <Originals/>
        <Trending/>
    </Container>
  )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after{
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
    }
`

export default Home
