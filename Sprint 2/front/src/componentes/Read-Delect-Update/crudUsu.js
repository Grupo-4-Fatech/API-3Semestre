import React from 'react'
import { Table } from 'semantic-ui-react'
import './crudUsu.css'


  
const CrudUsu = ({ dados, deletar, editar, load}) => {
    
    const atributos = Object.keys(dados[0])

    
    return (
        <div className="cont" >
            <Table striped bordered hover>
                <thead >
                    <tr>
                        {atributos.length && atributos.map((atributo) => {
                            if(atributo ==='nome'){
                                atributo = 'NAME';
                            }else if(atributo === 'email'){
                                atributo = 'EMAIL';
                            }else if(atributo === 'TipoUsuario'){
                                atributo = "USER"
                            }

                           

                            return (
                                <th>{atributo}</th>
                            )
                        })}
                        <th>ACTIONS</th>
                    </tr>


                </thead>
                <tbody>
                    {dados.length && dados.map((dado) => {
                        return (
                            <tr id={dado['email']}>
                                {atributos.length && atributos.map((atributo) => {
                                    
                                    if(atributo === 'TipoUsuario'){
                                        return (
                                            
                                            <td >{dado[atributo] === 2?"Admin":"Cliente"}</td>
                                        )
                                            
                                    }
                                    return (
                                    
                                        <td >{dado[atributo]}</td>
                                    )
                                    
                                   
                                })}
                                <td>
                                    <button id='btnex' type="submit" onClick={deletar}>Excluir</button>
                                    <button id='btnex' type="submit" onClick={editar}>Editar</button>
                                </td>
                            </tr>

                        )
                    })}

                </tbody>
                {/* <Table.Footer fullWidth>
                    <tr>
                        <th />
                        <th colSpan=''>
                            <Button icon primary size='smal' className='button'>Consultar</Button>
                            <Button size='small' className='button'>Deletar</Button>
                        </th>
                    </tr>
                </Table.Footer> */}
            </Table>
        </div>
    )
}

export default CrudUsu;