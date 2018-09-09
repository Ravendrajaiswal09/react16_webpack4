import axios from 'axios';

const configHeader = { headers: { 'Content-Type': 'multipart/form-data' } };

export const getUsers = (requestUrl, action) => {
    return function(dispatch) {
        return axios.get(requestUrl)
            .then((response) => {
                dispatch({
                    type: action,
                    response: response.data
                })
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                } else if (error.request) {
                    console.log(error.request);
                }
            });
        }
};

export const addUsers = (requestUrl, action, data, configHeader) => {
  return function(dispatch) {
     axios.post(requestUrl, data, configHeader)
        .then((response) => {
            dispatch({
                    type: action,
                    response: response.data
                })
        })
        .catch((error) => {
             if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
                console.log(error.config);
        });
    };
};

export const updateUsers = (requestUrl, action, data, configHeader) => {
  return function(dispatch) {
     axios.put(requestUrl, data, configHeader)
        .then((response) => {
            dispatch({
                    type: action,
                    response: response.data
                })
        })
        .catch((error) => {
             if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
                console.log(error.config);
        });
    };
};

export const deleteUser = (requestUrl, action, data, configHeader) => {
    return function(dispatch) {
       axios.delete(requestUrl, data, configHeader)
          .then((response) => {
              dispatch({
                      type: action,
                      response: response.data
                  })
          })
          .catch((error) => {
               if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
              } else if (error.request) {
                  console.log(error.request);
              } else {
                  console.log('Error', error.message);
              }
                  console.log(error.config);
          });
      };
  };