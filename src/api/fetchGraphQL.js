async function fetchGraphQL(text, variables) {  
    const response = await fetch('https://graphql-pokemon2.vercel.app', {
      method: 'POST',
      body: JSON.stringify({
        query: text,
        variables,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    // Get the response as JSON
    return await response.json();
  }
  
  export default fetchGraphQL;