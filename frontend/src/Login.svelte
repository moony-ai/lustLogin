<script>
  let email = '';
  let password = '';
  
  function login() {
    // Placeholder for login logic
    console.log('Login with', email, password);
  }
</script>

<form on:submit|preventDefault={login}>
  <input type='email' bind:value={email} placeholder='Email'>
  <input type='password' bind:value={password} placeholder='Password'>
  <button type='submit'>Login</button>
</form>
