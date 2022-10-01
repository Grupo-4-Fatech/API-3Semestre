import React from 'react'
import { Button, Table } from 'semantic-ui-react'

const CrudUsu = ({ dados }) => {
    const atributos = Object.keys(dados[0])
    return (
        <div className="cont">
            <Table compact celled definition className='Tabela'>
                <Table.Header >
                    <Table.Row>
                        {atributos.length && atributos.map((atributo) => {
                            return (
                                <Table.HeaderCell>{atributo}</Table.HeaderCell>
                            )
                        })}
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {dados.length && dados.map((dado) => {
                        return (
                            <Table.Row>
                                {atributos.length && atributos.map((atributo) => {
                                    return (
                                        <Table.Cell>{dado[atributo]}</Table.Cell>
                                    )
                                })}

                            </Table.Row>
                        )
                    })}

                </Table.Body>

                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell colSpan=''>
                            <Button
                                floated='right'
                                icon
                                labelPosition='left'
                                primary
                                size='smal'
                                className='button'
                            >
                                Consultar
                            </Button>
                            <Button size='small' className='button'>Deletar</Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}

export default CrudUsu;