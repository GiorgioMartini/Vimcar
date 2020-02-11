export function fetchRestaurants (term, location = "Berlin") {
    const endpoint = `businesses/search?term=${term}&location=${location}&limit=10`
  
    return fetch(endpoint, {
      headers: new Headers({
        'Authorization': 'Bearer oSJvaTmFtYVCEJcMsLFA4uRljDOILtEfp0sTWflSWclozapMP1rCZ6uttKPOoYnrdUGcTXI0ztOf3rTPVSBRa1JjngqcoTKD30YUp7yKxhZCNzS4bsZV_DqzzkAwXXYx',
      }), 
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        if (!data) {
          throw new Error(data.message)
        }
        return data
      })
  }
