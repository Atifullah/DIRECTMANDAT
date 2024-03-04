import axios from 'axios';

// const apiBaseUrl = process.env.REACT_APP_BASE_URL; // Replace with your API base URL
const apiBaseUrl = "https://pgr.directmandat.com"; // Replace with your API base URL

export const apiService = axios.create({
    baseURL: apiBaseUrl,
});


export const getLocAnns = async (time) => {
    try {
        const { data } = await apiService.get(`/anns/loca/${"month"}?ses=${JSON.parse(localStorage.getItem("ses"))}`);
        if (data.status === "OK") {
            return data;
        } else {
            return console.log("Session is Expired");
        }
    } catch (error) {
        return console.log("Fetching Error:", error);
    }
}

export const getVenteAnns = async (time) => {
    try {
        console.log(JSON.parse(localStorage.getItem("ses")))
        const { data } = await apiService.get(`https://pgr.directmandat.com/anns/vent/month?ses=c6726af4-e8d0-45d3-a3b8-65b07f7f3a0e`);
        console.log(data)
        if (data.status === "OK") {
            return data;
        } else {
            return console.log("Session is Expired");
        }
    } catch (error) {
        return console.log("Fetching Error:", error);
    }
}

export const checkSession = async () => {
    try {
        const { data } = await apiService.get(`/age?ses=${JSON.parse(localStorage.getItem("ses"))}`);
        if (data.status === "KO") {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return console.log("Fetching Error:", error);
    }
}

export const getListCommunes = async () => {

    try {
        const { data } = await apiService.post(`/geo/getListeCommunes?sessionID=${JSON.parse(localStorage.getItem("ses"))}`);
        console.log(data,"cors")
        if (data.status === "OK") {
            return data.results;
        } else {
            return console.log("Session is Expired");
        }
    } catch (error) {
        return console.log("Fetching Error:", error);
    }
}



export const getInsee = async (insee) => {
    try {
        const { data } = await apiService.get(`geo/getContourCommune?sessionID=${JSON.parse(localStorage.getItem("ses"))}&insee=${insee}`);
       console.log(data,"isne")
        if (data.status === "OK" && data.geometry != null) {
            return data.geometry.coordinates[0];
        }
        if (data.geometry == null) {
            return false
        }
        else {
            return console.log("Session is Expired");
        }
    } catch (error) {
        return console.log("Fetching Error:", error);
    }
}
