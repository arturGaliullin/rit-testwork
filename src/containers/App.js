import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSpare, deleteSpare, clearError } from '../AC'
import SparesList from '../components/SparesList'
import SparesScheme from '../components/SparesScheme'

class App extends Component {
  render() {
    const errorBlock = (
        <div className='error'>
            <span className='error-message'>{this.props.error}</span>
            <span className='spare-delete' onClick={() => this.props.clearError()}>X</span>
        </div>
    )
    return (
      <div className='main'>
          <SparesScheme
              addSpare={ this.props.addSpare }
              deleteSpare={ this.props.deleteSpare }
              spares={ this.props.spares }
              loading={ this.props.loading }
          />
          {this.props.error ? errorBlock : null}
          <SparesList spares={ this.props.spares } deleteSpare={ this.props.deleteSpare } />
      </div>
    )
  }
}
function mapStateToProps(state) {
    const { spares, error, loading } = state.spares
    return { spares, error, loading }
}

export default connect(mapStateToProps, { addSpare, deleteSpare, clearError })(App)
