// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    baseURL: "http://rachel.restful.training/api/blog/",

    // use your own key
    params: {
        key: "1288c1e1ca2cd27b5f82add2814340928efeaaf2",
    },

    // make sure we get JSON back
    headers: {
        Accept: "application/json",
    },
});