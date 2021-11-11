const BASE_URL = 'https://api.b7web.com.br/devbarber';
// const BASE_URL = 'http://127.0.0.1:443';

export default {
    checkToken: async(token) =>{

        const req = await fetch(`${BASE_URL}/api/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({token})

        });

        const json = await req.json();
        return json;
        
    },

    signIn: async(email, password) =>{
        try {
            const req = await fetch(`${BASE_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });

            const json = await req.json();       
            return json;

        } catch (error) {
            console.error(error)
        }
        
    },

    

    signUp: async(name, email, password) =>{

        const req = await fetch(`${BASE_URL}/user`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({name, email, password})

        });

        const json = await req.json();
        return json;

    },
}