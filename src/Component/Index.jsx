import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Welcome to MoneyMinder App</h1>
                <p className="py-6">By using this app you can easily track your income and expense. This app is so amaizing.</p>
                <div className="card-actions justify-center">
                    <Link to='/income' className="btn btn-success">Add Income</Link>
                    <Link to='/expense' className="btn bg-red-700 hover:bg-red-900">Add Expense</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index