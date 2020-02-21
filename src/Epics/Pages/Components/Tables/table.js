import React, { Component } from 'react'
import { connect } from 'react-redux'

class table extends Component {

    state = {
        updatedArr:''
    }


    componentDidMount(){
        this.getData(this.props.getTableData)
    }

    getData =(data)=>{
   let arr = JSON.parse(JSON.stringify(data));
   this.setState({updatedArr:arr},()=>this.getDetails)
    } 

    // getDetails = ()=>{
    //     if(this.state.updatedArr){
    //         this.state.updatedArr.map(user => (
    //             <tr key={user.id}>
    //               <td>{user.empId}</td>
    //               <td>{user.empName}</td>
    //               <td>{user.foodPref}</td>
    //               <td>{user.transport}</td>              
    //             </tr>
    //           ))
    //     }
  
    // }
    nameFilter=(e)=>{
        let val = e.target.value
       this.props.getTableData.filter((item)=>{
           if(item.empName === val){
              return item
           }
        
       }) 
      let arr = JSON.parse(JSON.stringify(this.props.getTableData))
       this.setState({updatedArr:arr})
    }


  render () {
    console.log(this.props.getTableData, 'in table')
    return (
      <div>
          <input type="text" placeholder="filter by name" onChange={this.nameFilter}></input>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Food</th>
              <th>Transport</th>
            </tr>
          </thead>
          <tbody>
         
{ this.props.getTableData?  this.props.getTableData.map(user => (
                <tr>
                  <td>{user.empId}</td>
                  <td>{user.empName}</td>
                  <td>{user.foodPref}</td>
                  <td>{user.transport}</td>              
                </tr>
              )):<div/>}
{/* {this.getDetails()} */}

          </tbody>
        </table>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  getData: state.simpleReducer.FirstData,
  isLoading: state.simpleReducer.isLoading
})

export default connect(mapStateToProps,null)(table)
