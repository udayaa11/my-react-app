import React from 'react'

const HOC = (Component) => {
    return(
        class extends React.Component {
            state = {
                auth : true
            }
            render(){
                return(
                    <div>
                        {/* <Component /> */}
                        {this.state.auth ? <Component  name='uday' />  : <h1> PLEASE LOGIn </h1> }
                    </div>
                )
            }
        }
    )
}

export default HOC