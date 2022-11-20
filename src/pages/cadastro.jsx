import React, {useState} from 'react';
import Button from '../components/Buttons';
import Don from '../img/logoWhite.png';



// React Strap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';



const ContinuarCadastro = () => {

  const [name,setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email,setEmail] = useState("");
  const [tiposanguineo, setTipoSanguineo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
     console.log(name,cpf,email,tiposanguineo);
  }



    return ( 
        <div className="main">
             <Link to={'/'}>  <img src={Don} className='lgDon'  style={{width:'15rem'}}/> </Link>

            <div className="content">

                <div className="division">
                <div className="box_cad">

                    <Form className='formStrap' onSubmit={handleSubmit} >
                    <Row className="mb-1">
                        
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control  onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                    
                    </Row>
                    <Row className="mb-1">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control onChange={(e) => setCpf(e.target.value)} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-1">
                        
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Tipo Sanguineo</Form.Label>
                        <Form.Select defaultValue="Choose..."  onChange={(e) => setTipoSanguineo(e.target.value)}>
                            <option></option>
                            <option>A</option>
                            <option>B</option>
                            <option>AB</option>
                            <option>O</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control onChange={(e) => setDataNascimento(e.target.value)} />
                        </Form.Group>  
                    </Row>

                    <Row className="mb-1">

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control onChange={(e) => setTelefone(e.target.value)} />
                        </Form.Group>  

                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Cep</Form.Label>
                        <Form.Control onChange={(e) => setCep(e.target.value)} />
                        </Form.Group>  

                    </Row>
                    <Form.Group className="mb-1" controlId="formGridAddress2">
                        <Form.Label>Rua</Form.Label>
                        <Form.Control onChange={(e) => setRua(e.target.value)} />
                    </Form.Group>

                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control onChange={(e) => setComplemento(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>N° Casa</Form.Label>
                        <Form.Control  onChange={(e) => setNumero(e.target.value)} />
                        </Form.Group>

                        </Row>

                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control onChange={(e) => setBairro(e.target.value)}/>
                        </Form.Group>

                        <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control onChange={(e) => setEstado(e.target.value)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control onChange={(e) => setCidade(e.target.value)} />
                        </Form.Group>

                    </Row>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type='password' onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>

                    <Button variant="primary" type="submit" className='btn_mp_green' value='Cadastrar' ></Button>
                    </Form>

                            </div>
                        </div>
                    </div>
            </div>
     );
}
 

export default ContinuarCadastro; 