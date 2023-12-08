import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Scroll() {
    const history = useHistory()

    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0,0)
        })

        return () => {
            unlisten()
        }
    }, [history])
    
    return null
}

export default Scroll