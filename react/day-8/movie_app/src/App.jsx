import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import 'react-responsive-pagination/themes/classic.css';
import ResponsivePagination from 'react-responsive-pagination';

function App() {

  const [data, setData] = useState([])
  const [search,setSearch]=useState("")

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  

  let myMovie=(e)=>{
    setSearch(e.target.value)
  }

 

  let displayData = () => {

    let Api;

    if(search!=""){

      console.log(search)
         Api=`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`
    }
    else{
      Api=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${currentPage}`
    }

    axios.get(Api)
      .then((ress) => {
        setData(ress.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    displayData()
  }, [search,currentPage])



  return (
    <>
      <Container>
        <div className='p-2'>
          <input type='text' value={search} placeholder='Search movie' className='w-75'  onChange={myMovie} />
        </div>

        <Row md={4} sm={2} className='mt-3 p-2 ' >

          {data.map((v, i) => {
           
            return (
              <Col className='my-2' >
                <Card >
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${v.poster_path}`} />
                  <Card.Body>
                    <Card.Title> {v.title} </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}




        </Row>

        <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
    />
      </Container>
    </>
  )
}

export default App
