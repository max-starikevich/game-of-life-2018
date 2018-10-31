import React, { Component } from 'react'
import { Cell } from './components/Cell'
import './styles.scss'

class Row extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let cells = this.props.cells.map((cell, index) =>
      <Cell y={cell.y}
            x={cell.x}
            value={cell.value}
            key={index}
            handleCellClick={this.props.handleCellClick}
      />
    )

    return (
      <div className="row">
        { cells }
      </div>
    )
  }
}

export {
  Row
}
