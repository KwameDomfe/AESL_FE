import React from 'react'

const PoweredBy = () => {
  return (
    <div id = "m__poweredby"
    className="flex items-center justify-center flex-column 
        white 
        f0-75"
>
    <small className="mb0-50">powered by:</small>
    <a href="https://www.kdadesign.tech"
        className="white-90"
    >
        <div className="flex">
            <small className="">
                kda design technologies
            </small>
            <small className="ml0-50">
                &copy; {new Date().getFullYear()};
            </small>
        </div>
    </a>
</div> 
  )
}

export default PoweredBy