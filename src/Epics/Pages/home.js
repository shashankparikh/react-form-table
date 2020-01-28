import React, { Component } from 'react'
import { connect } from 'react-redux'
import { simpleAction } from '../../actions/simpleAction'
import Cards from '../Pages/Components/Cards/cards'
import { HomeConetent, BodyContent } from './style'

class Home extends Component {
  state = {
    page: 1,
    limit: 3,
    cardsArray: []
  }

  simpleAction = () => {
    const data = {
      page: this.state.page + 1,
      limit: this.state.limit
    }
    this.setState({ limit: this.state.limit, page: this.state.page + 1 }, () =>
      this.props.simpleAction(data)
    )
  }

  componentDidMount () {
    const data = {
      page: this.state.page,
      limit: this.state.limit
    }
    this.setState({ limit: this.state.limit, page: this.state.page }, () =>
      this.props.simpleAction(data)
    )
  }

  componentWillReceiveProps (nextProps) {
    this.addingCardData(nextProps)
  }

  addingCardData = data => {
    data.getData.map(item => {
      this.state.cardsArray.push(item)
    }, console.log(this.state.cardsArray, 'this.state.cardsArray'))
  }

  render () {
    const { getData, isLoading } = this.props
    const { cardsArray } = this.state
    console.log(getData)
    return (
      <div>
        <HomeConetent>Home Page</HomeConetent>
        <BodyContent>
          {!isLoading ? <Cards cars={cardsArray} /> : null}
        </BodyContent>
        <button onClick={this.simpleAction}>Test redux action</button>
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
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
