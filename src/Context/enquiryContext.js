import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"
import reducer from "../reducer/formEnquiryReducer";

const EnquiryContext = createContext();

const APIFORFRONT = "https://api.100acress.com/contact/viewAll";
const APiPROJECTENQUIRY ="https://api.100acress.com/userInsert";
//contact_view/:id/customer

const initialState ={
    FrontPageEnquiries: [],
    isfrontEnquiriesLoading: false,
    SingleFrontPageEnquiry: {},
    isSingleFrontPageLoading: false,
    
    isError: false,
}

const EnquiryProvider =({children}) =>{
    const [state, dispatch] = useReducer(reducer,initialState);

    const getFrontEnquiries = async (url) =>{
        dispatch({type:"FRONT_PAGE_ENQUIRY_LOADING"})
        try {
            const res = await axios.get(url);
            const allFormEnquiry = await res.data?.data;
            dispatch({type:"ALL_FRONT_ENQUIRES",payload:allFormEnquiry})
        } catch (error) {
            dispatch({type:"FRONT_ENQUIRY_ERROR"})
        }
    }

    const getSingleFrontEnquiry = async (url) =>{
        dispatch({type:"SET_SINGLE_FRONTPAGE_LOADING"})
        try {
            const res = await axios.get(url);
            const singleEnquiry = await res.data?.data;
            dispatch({type:"GET_SINGLE_FRONT_ENQUIRY",payload:singleEnquiry})
        } catch (error) {
            dispatch({type:"SINGLE_FRONT_ENQUIRY_ERROR"})
        }
    }
  
    useEffect(()=>{
        getFrontEnquiries(APIFORFRONT);
    },[])
    
    return (
        <EnquiryContext.Provider value={{...state,getSingleFrontEnquiry}}>
           {children}
        </EnquiryContext.Provider>
    )
};

const useEnquiryContext =() =>{
    return useContext(EnquiryContext);
}
export {EnquiryProvider,EnquiryContext,useEnquiryContext};