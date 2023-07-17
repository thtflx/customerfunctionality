import React from 'react'

const AddCustomers = () => {
    return (
        <div>
            <h1>Add Customers</h1>
            <div>
                <label>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </label>

                <div>
                    <h3>Status</h3>
                    <div>
                        <button>User</button>
                        <button>Administrator</button>
                    </div>
                </div>

                <label>
                    <input type="text" />
                    <input type="text" />
                </label>

                <button>Save</button>
            </div>
        </div>
    )
}

export default AddCustomers
