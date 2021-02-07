import React from 'react';

class SearchBar extends React.Component {

    state = { query: '' }

    getInputValue = (event) => {
        this.setState({ query: event.target.value });
        console.log(this.state.query);
    }

    submitFormData = (event) => {
        event.preventDefault();
        this.props.onSubmitForm(this.state.query);

        
    }



    render() {
        return (
            <div className="ui search-bar segment">
                <div className="ui form">
                    <form onSubmit={this.submitFormData} className="field">
                        <label>Please type video you want to search</label>
                        <input type="text"
                            value={this.state.query}
                            onChange={this.getInputValue}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;