import React, { Component } from 'react';

export class SearchBar extends Component {
    state = { searchTerm: '' };

    onInputChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        // make sure we call callback from parent
        this.props.onFormSubmit(this.state.searchTerm);
    };

    render() {
        return (
            <div className='ui segment SearchBar'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label htmlFor='videoSearch'>Video Search</label>
                        <input
                            type='text'
                            value={this.state.searchTerm}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
