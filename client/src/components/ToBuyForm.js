import React from 'react'

    class ToBuyForm extends React.Component {
        state = { name: '' }

        handleSubmit =(e)=> {
          e.preventDefault()
          const { name } = this.state;
          this.props.addProduct(this.state.name)
          this.setState = { name: '' }
        }

        handleChange =(e)=> {
            const {name, value} = e.target
            this.setState( { [name]: value } )
        }


        render (){
            return (
            <div>
              <form onSubmit = {this.handleSubmit}>
                <input
                    placeholder = 'Add an item'
                    required
                    value={this.state.name}
                    onChange={this.handleChange}/>
                   <button className="btn">Submit</button>
              </form>
            </div>
            )
        }
    }
export default ToBuyForm;