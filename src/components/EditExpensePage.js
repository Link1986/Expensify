import React from 'react';

import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        const { editExpense, history } = this.props;

        editExpense(this.props.expense.id, expense);
        history.push('/');
    };

    onRemove = () => {
        const { removeExpense, history } = this.props;

        removeExpense({ id: this.props.expense.id });
        history.push('/');
    };

    render() {
        return (
            <div>    
                <ExpenseForm
                    expense={this.props.expense} 
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({    
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)    
});

const mapDispatchToProps = (dispatch) => ({    
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),    
    removeExpense: (data) => dispatch(removeExpense(data))    
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);