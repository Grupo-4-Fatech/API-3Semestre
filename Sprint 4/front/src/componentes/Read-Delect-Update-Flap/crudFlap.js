import React from 'react'
import { Table } from 'semantic-ui-react'

const CrudFlap = ({dados, deletar, editar, load, email}) => {
    
    
    console.log(dados)
    const atributos = Object.keys(dados[0])
    
    return (

        <div className='container'>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        {atributos.length && atributos.map((atributo) => {
                            if (atributo === 'aeronaves') {
                                atributo = 'AERONAVES';
                            } else if (atributo === 'flap') {
                                atributo = 'FLAP';
                            } else if (atributo === 'ice') {
                                atributo = "ICE"
                            }else if (atributo === 'id') {
                                atributo = ""
                            }
                            return (
                                <th >{atributo}</th>
                            )
                        })}
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.length && dados.map((dado) => {
                        return (
                            <tr id={dado['id']}>
                                {atributos.length && atributos.map((atributo) => {
                                    return (
                                        <td>{dado[atributo]}</td>
                                    )
                                })}
                                <td>

                                    <button id='btnex' type="submit"  onClick={deletar}>Delete</button>
                                    <button id='btnex' type="submit"  onClick={editar}>Update</button>

                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </div>

    )

}
export default CrudFlap;