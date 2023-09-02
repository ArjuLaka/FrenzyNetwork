import React from 'react';

function SignInComp() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  async function signInUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:8080/api/users/signinuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    const data = await response.json()
    if (data.user) {
      alert('sign in successful')
      window.location.href = '/'
    } else {
      alert('please check your username and password')
    }
  }
  
  return (
    <React.Fragment>
      <div>
        <h1>Ini SignIn</h1>
        <form onSubmit={signInUser}>
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
          <input type="submit" value="SignIn" />
        </form>
      </div>
    </React.Fragment>
  );
}

export default SignInComp;