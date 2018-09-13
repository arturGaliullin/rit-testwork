import React, { Component } from 'react'

export default class SparesList extends Component {
    render() {
        const { spares, deleteSpare } = this.props

        return (
            <div className='spare-list'>
                {spares.map(spare =>
                        <div className='spare' key= { spare.id }>
                            <span className='spare-text'>{ spare.text }</span>
                            <span className='spare-delete' onClick={() => deleteSpare(spare.id)}>X</span>
                        </div>
                )}
            </div>

        )

    }
}
