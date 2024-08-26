import { Container } from 'react-bootstrap';
import './style.css'

const CommoSection = ({ title }) => {
  return (
    <section className='commom__section'>
        <Container className='text-center d-flex justify-content-center align-items-center'>
            <h1 className='fw-bold text-white'>{title}</h1>
        </Container>
    </section>
  )
}

export default CommoSection 
