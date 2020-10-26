import  React from 'react';

export default class SignInForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label>Username</label>
                    <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="username"/>
                    <label>Password</label>
                    <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="password"/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}