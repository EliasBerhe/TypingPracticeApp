import React, { useRef } from 'react'

const RestartButton = ({

    onRestart: handleRestart,
    className= "",

}

) => {

    const buttonRef = useRef(null);

    const handleClick = () =>{
        buttonRef.current?.blur();
        handleRestart();
    }



  return (
    <button ref = {buttonRef}
            onClick = {handleClick}
            className= {`block rounded px-8 py-2 hover:bg-slate-700/50  ${className}`}


    >

      Restart

    </button>
  )
}

export default RestartButton