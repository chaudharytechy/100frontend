const FormEnquiryReducer =(state ,action) =>{
    switch (action.type){
        case "FRONT_PAGE_ENQUIRY_LOADING":
            return{
               ...state,
               isfrontEnquiriesLoading:true,
            }

        case "SET_SINGLE_FRONTPAGE_LOADING":
            return{
                ...state,
                isSingleFrontPageLoading:true,
            }
        
        case "ALL_FRONT_ENQUIRES":
            return{
                ...state,
                FrontPageEnquiries:action.payload,
                isfrontEnquiriesLoading:false,
            }

        case "GET_SINGLE_FRONT_ENQUIRY":
            return{
                ...state,
                SingleFrontPageEnquiry:action.payload,
                isSingleFrontPageLoading:false,
            }
        
        case "FRONT_ENQUIRY_ERROR":
            return{
                ...state,
                isfrontEnquiriesLoading:false,
                isError:true,
            }

        case "SINGLE_FRONT_ENQUIRY_ERROR":
            return{
                ...state,
                isSingleFrontPageLoading:false,
                isError:true,
            }
    }

    return state;
}

export default FormEnquiryReducer;