import React, { useState } from 'react'

let url =
  'http://col-development.germanywestcentral.cloudapp.azure.com:7110/api/Registration/trainer'

// eslint-disable-next-line no-unused-vars
async function sendContactData(contactDetails) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.message || 'Something Went Wrong!')
  }
}

const App = () => {
  const [enteredEmail, setEnteredEmail] = useState('')

  async function sendContactData() {
    try {
      await sendContactData({
        email: enteredEmail,
      })
      setEnteredEmail('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <main className="card">
        <form action="" onSubmit={sendContactData}>
        <input
          type="text"
          placeholder="email@email.com"
          value={enteredEmail}
          onChange={(e) => setEnteredEmail(e.target.value)}
        />
        <br />
        <button >Send</button>
        </form>
      </main>
    </>
  )
}

export default App
