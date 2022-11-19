import React from 'react'
import { Table } from 'semantic-ui-react'

const CrudFlap = (dados) => {
    const atributos = Object.keys(dados[0])
    return (

        <div className='container'>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        {atributos.length && atributos.map((atributo) => {
                            return (
                                <th >{atributo}</th>
                            )
                        })}

                    </tr>
                </thead>
                <tbody>
                    {dados.length && dados.map((dado) => {
                        return (
                            <tr>
                                {atributos.length && atributos.map((atributo) => {
                                    return (
                                        <td>{dado[atributo]}</td>
                                    )
                                })}
                                <td>

                                    <button id='btnex' type="submit" >Delete</button>
                                    <button id='btnex' type="submit" >Update</button>

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