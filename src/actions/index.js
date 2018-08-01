export function fetchData() {
    return (dispatch) => {
        dispatch(getData())
        return (fetch('http://jsonplaceholder.typicode.com/users'))
            .then((Response) => Response.json())
            .then((res) => {
                return (dispatch(getSuccessData(res)))
            })
            .catch(err => dispatch(failedData(err)))
    }
}

function getData(){
    return {
        type: 'FETCH'
    }
}

function getSuccessData(data) {
    return {
        type: 'FETCH_SUCCESS',
        data
    }
}

function failedData() {
    return {
        type: 'FAILED_DATA'
    }
}