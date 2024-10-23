import AxiosInstance from "../Config/AxiosInstance";

// add menu
export const AddMenu = async (addMenu) => {
    try {
        const response = await AxiosInstance.post('/AddMenu', addMenu);
        return response.data;
    } catch (error) {
        console.error("Error fetching Adding the job:", error);
        throw error;
    }
};



// het menu
export const getAllmenu = async () => {

    try {
        const response = await AxiosInstance.get('/getAllmenu');
        return response.data;
    } catch (error) {
        console.error("Error fetching job:", error);
        throw error;
    }
}
