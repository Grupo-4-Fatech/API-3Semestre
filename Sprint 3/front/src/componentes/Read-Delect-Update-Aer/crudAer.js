import React from 'react'
import { Table } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import './crudAer.css'



  
const CrudAer = ({ dados, deletar, editar, load, email}) => {
    
    const atributos = Object.keys(dados[0])

    
    return (
        <div className="cont" >
            <Table striped bordered hover>
                <thead >
                    <tr>

                        {atributos.length && atributos.map((atributo) => {
                             if(atributo ==='modelo_de_aeronave'){
                                atributo = 'MODEL';
                            // // }else if(atributo === 'motor'){
                            // //     atributo = 'ENGINE';
                            // // }else if(atributo === 'certificacao'){
                            // //     atributo = "CERTIFICATION"
                            // // }else if(atributo === 'peso'){
                            // //     atributo = "WEIGHT"
                            // // }else if(atributo === 'reversor'){
                            // //     atributo = "REVERSER"
                            }

                           

                            return (
                                <th>{atributo}</th>
                            )
                        })}
                        <th>ACTIONS</th>

                        {/* atributos.length && atributos.map((atributo) => {
                            return (
                                <th>{atributo}</th>
                            )
                        }) */}
                        {/* <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th> */}

                    </tr>


                </thead>
                <tbody>
                    {dados.length && dados.map((dado) => {
                        return (
                            <tr id={dado['modelo_de_aeronave']}>
                                {atributos.length && atributos.map((atributo) => {
                                    
                                    // if(atributo === 'TipoUsuario'){
                                    //     return (
                                            
                                    //         <td >{dado[atributo] === 2?"Admin":"Cliente"}</td>
                                    //     )
                                            
                                    // }
                                    return (
                                    
                                        <td >{dado[atributo]}</td>
                                    )
                                    
                                   
                                })}
                                <td>

                                    <button id='btnex' type="submit" onClick={deletar}>Delete</button>
                                    <button id='btnex' type="submit" onClick={editar}>Update</button>

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

export default CrudAer;