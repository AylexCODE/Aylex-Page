import axios from "axios";

export default class ClanData {
    async getClanData(){
        const options = {
            method: "GET",
            url: `${process.env.REACT_APP_CLASH_OF_CLANS_API_URL}/clashofclans?type=clan&id=${encodeURIComponent("#2J9LCP80Q")}`
        }

        try{
            const response = await axios(options);
            return response.data;
        }catch(error){
            console.log(error?.response);
            return "Error Getting Clan Data";
        }
    }
}