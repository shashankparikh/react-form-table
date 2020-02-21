import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from '../Pages/Components/Tables/table'
import { simpleAction } from '../../actions/simpleAction'
import { HomeConetent, BodyContent } from './style'


class Home extends Component {
  state = {
    empId: '',
    empName: '',
    foodPref: '',
    transport: ''
  }

  simpleAction = () => {
    const data = {
      empId: this.state.empId,
      empName: this.state.empName,
      foodPref: this.state.foodPref,
      transport: this.state.transport
    }
    this.props.simpleAction(data)
  }
  changeEmpId = e => {
    let value = e.target.value
    this.setState({ empId: value })
  }
  changeEmpName = e => {
    let value = e.target.value
    this.setState({ empName: value })
  }
  changeEmpFood = e => {
    let value = e.target.value
    this.setState({ foodPref: value })
  }
  changeTransport = e => {
    let value = e.target.value
    this.setState({ transport: value })
  }

  render () {
     console.log(this.props.getData,"from reducer")
     
    return (
      <div>
        <HomeConetent>Home Page</HomeConetent>
        <BodyContent>
          {/* {!isLoading ? <Cards cars={cardsArray} /> : null} */}

          <form>
            <label>
              Employee Id:
              <input type='text' name='name' onChange={this.changeEmpId} />
            </label>
            <label>
              Employee Name:
              <input type='text' name='name' onChange={this.changeEmpName} />
            </label>
            <label>
              Food Preference:
              <input type='text' name='name' onChange={this.changeEmpFood} />
            </label>
            <label>
              Mode of Transport
              <input type='text' name='name' onChange={this.changeTransport} />
            </label>
            {/* <input type='submit' value='Submit' /> */}
          </form>
          <button onClick={this.simpleAction}>Submit</button>
        </BodyContent>

        {/* <pre>{JSON.stringify(this.props)}</pre> */}
        {this.props.getData? <Table getTableData = {this.props.getData}/>:''}
       
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  simpleAction: data => dispatch(simpleAction(data))
})

const mapStateToProps = state => ({
  getData: state.simpleReducer.FirstData,
  isLoading: state.simpleReducer.isLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
