import React from 'react';

function SignUpComp() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  async function signUpUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:8080/api/users/signupuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    })
    const data = await response.json()
    console.log(data)
  }
  
  return (
    <React.Fragment>
      <div>
        <h1>Ini SignUp</h1>
        <form onSubmit={signUpUser}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />
          <input type="submit" value="SignUp" />
        </form>
      </div>
    </React.Fragment>
  );
}

export default SignUpComp;