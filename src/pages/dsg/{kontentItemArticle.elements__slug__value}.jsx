import * as React from "react"

export default function Component(props){
    return <div>{new Date().toUTCString()}</div>
}

export async function config(){
    return () => {
        return {
            defer: true,
        }
    }
}