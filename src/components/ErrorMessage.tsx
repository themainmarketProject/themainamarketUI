import React from 'react'

function ErrorMessage({error}: any) {
    return (
        <div>
            <strong>{error.message}</strong>
        </div>
    )
}

export default ErrorMessage
