import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const exponse = [
    {
        id: uuidv4(),
        amount: 20
    },
    {
        id: uuidv4(),
        amount: 10
    },
    {
        id: uuidv4(),
        amount: 5
    }

]

const Addexpense = () => {
  const [addinc, setAddinc] = useState(exponse)
  const [total, setTotal] = useState(0)
  const [newInc, setNewInc] = useState(0)

  useEffect(() => {
    let sum = 0;
    addinc.forEach((item) => {
        sum = sum + parseInt(item.amount)
    })
    setTotal(sum)
  }, [addinc])

  const handleExpense = (e) => {
    e.preventDefault()

    let addNewOne = {id: uuidv4, amount: newInc}

    if(newInc == 0){

    }else{
        setAddinc((pre) => {
            return [
                ...pre,
                addNewOne
            ]
        })

        setNewInc(0)
    }

  }

  return (
    <>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse bg-orange-200">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control text-center">
                            <h2 className="card-title text-2xl">Add Expense</h2>
                            <form onSubmit={handleExpense}>
                                <div className="input-group py-3">

                                    <input type="number" value={newInc} onChange={(e) => {
                                        setNewInc(e.target.value)
                                    }} placeholder="Expence" className="input input-bordered" min={1} required/>

                                    <button type='submit' className="btn btn-square">
                                        Add
                                    </button>

                                </div>
                            </form>
                            <ul>
                                {addinc && addinc.map((item, i) => (
                                    <li key={i} className='bg-lime-300 m-2 p-2'>
                                        <a className='flex justify-between'>
                                        <span className='text-black'>{i+1}.
                                        Added Amount</span>
                                        <span className="badge badge-sm badge-warning text-xl">{item.amount}</span>
                                        </a>
                                  </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl">Expense!</h2>
                        <p className='text-2xl border p-3 my-3'>Total Expense: <span className='font-bold'>${total}</span></p>
                        <p>Back to</p>
                        <div className="card-actions justify-end">
                            <Link to='/' className="btn btn-sm btn-primary">Home</Link>
                            <Link to='/income' className="btn btn-sm bg-lime-700 hover:bg-lime-900">Add Income</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Addexpense