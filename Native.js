//Native - Rough Draft - 01/06/2020
/*
Native is a project written in JS that will include more advanced Js related topics, such as:
.Error Handling
.Random Word Generation
.API Calls To Google's Translate Service
And will be expanded on, and be given more functions as time goes on.
As mentioned above, there will be more functionality added to this program eventually.
*/


//define api (sample boiler plate code below): 
const url = 'https://api.google.com/endpoint';
const apiKey = '';
const getData = async () => {
    try{
        const reponse = fetch(url, {
        method: 'POST',
        body: JSON.stringify({id: 200})
    })
    if(response.ok){
        const jsonResponse = await response.json()
        return jsonResponse
    }
    throw new Error('Request Failed!');
    } catch (error) {
        console.log(error);
    };
};
