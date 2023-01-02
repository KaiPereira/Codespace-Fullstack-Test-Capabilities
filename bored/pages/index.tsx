import Head from 'next/head'
import Image from 'next/image'
import axios from "axios"
import React from "react"

export default function Home() {
  const [message, changeMessage] = React.useState()

  React.useEffect(() => {
    axios.get("https://kaipereira-shiny-space-engine-pqpvx6x9p7636gvr-5000.preview.app.github.dev/chat/test", {
      headers: {
        "Access-Allow-Control-Origin": "*"
      }
    })
      .then(data => changeMessage(data.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <>
      Hello World Test {message}
    </>
  )
}
