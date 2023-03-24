import client from "../../../../../../utils/client";
import { gql } from "apollo-boost";
import { logout } from "../../../../login/store/actions/login.actions";

// ACTION NAMES
// ****************************** / /


// GET ALL SEARCHED_MENTORS
export const GET_ALL_SEARCHED_MENTORS = "GET_ALL_SEARCHED_MENTORS";
export const ALL_SEARCHED_MENTORS_IS_LOADING =
  "ALL_SEARCHED_MENTORS_IS_LOADING";
export const ALL_SEARCHED_MENTORS_FAILED =
  "ALL_SEARCHED_MENTORS_FAILED";
export const RESET_SEARCHED_MENTORS = "RESET_SEARCHED_MENTORS";

// GET ALL MINI_SEARCHED_MENTORS
export const GET_ALL_MINI_SEARCHED_MENTORS = "GET_ALL_MINI_SEARCHED_MENTORS";
export const ALL_MINI_SEARCHED_MENTORS_IS_LOADING =
  "ALL_MINI_SEARCHED_MENTORS_IS_LOADING";
export const ALL_MINI_SEARCHED_MENTORS_FAILED =
  "ALL_MINI_SEARCHED_MENTORS_FAILED";
export const RESET_MINI_SEARCHED_MENTORS = "RESET_MINI_SEARCHED_MENTORS";

// GET ALL SEARCHED_SUPPLIERS
export const GET_ALL_SEARCHED_SUPPLIERS = "GET_ALL_SEARCHED_SUPPLIERS";
export const ALL_SEARCHED_SUPPLIERS_IS_LOADING =
  "ALL_SEARCHED_SUPPLIERS_IS_LOADING";
export const ALL_SEARCHED_SUPPLIERS_FAILED =
  "ALL_SEARCHED_SUPPLIERS_FAILED";
export const RESET_SEARCHED_SUPPLIERS = "RESET_SEARCHED_SUPPLIERS";

// GET ALL Mini SEARCHED_SUPPLIERS
export const GET_ALL_MINI_SEARCHED_SUPPLIERS = "GET_ALL_MINI_SEARCHED_SUPPLIERS";
export const ALL_MINI_SEARCHED_SUPPLIERS_IS_LOADING =
  "ALL_MINI_SEARCHED_SUPPLIERS_IS_LOADING";
export const ALL_MINI_SEARCHED_SUPPLIERS_FAILED =
  "ALL_MINI_SEARCHED_SUPPLIERS_FAILED";
export const RESET_MINI_SEARCHED_SUPPLIERS = "RESET_MINI_SEARCHED_SUPPLIERS";

// GET ALL SEARCHED_REFUGEES
export const GET_ALL_SEARCHED_REFUGEES = "GET_ALL_SEARCHED_REFUGEES";
export const ALL_SEARCHED_REFUGEES_IS_LOADING =
  "ALL_SEARCHED_REFUGEES_IS_LOADING";
export const ALL_SEARCHED_REFUGEES_FAILED =
  "ALL_SEARCHED_REFUGEES_FAILED";
export const RESET_SEARCHED_REFUGEES = "RESET_SEARCHED_REFUGEES";

// GET ALL MINI SEARCHED_REFUGEES
export const GET_ALL_MINI_SEARCHED_REFUGEES = "GET_ALL_MINI_SEARCHED_REFUGEES";
export const ALL_MINI_SEARCHED_REFUGEES_IS_LOADING =
  "ALL_MINI_SEARCHED_REFUGEES_IS_LOADING";
export const ALL_MINI_SEARCHED_REFUGEES_FAILED =
  "ALL_MINI_SEARCHED_REFUGEES_FAILED";
export const RESET_MINI_SEARCHED_REFUGEES = "RESET_MINI_SEARCHED_REFUGEES";

//DELETE REQUEST
export const DELETE_REQUEST = "DELETE_REQUEST";
export const DELETE_REQUEST_IS_lOADING = "DELETE_REQUEST_IS_lOADING";
export const DELETE_REQUEST_FAILED = "DELETE_REQUEST_FAILED";
export const RESET_DELETE_REQUEST = "RESET_DELETE_REQUEST";

//BLOCK REQUEST
export const BLOCK_REQUEST = "BLOCK_REQUEST";
export const BLOCK_REQUEST_IS_lOADING = "BLOCK_REQUEST_IS_lOADING";
export const BLOCK_REQUEST_FAILED = "BLOCK_REQUEST_FAILED";
export const RESET_BLOCK_REQUEST = "RESET_BLOCK_REQUEST";

//UNBLOCK REQUEST
export const UNBLOCK_REQUEST = "UNBLOCK_REQUEST";
export const UNBLOCK_REQUEST_IS_lOADING = "UNBLOCK_REQUEST_IS_lOADING";
export const UNBLOCK_REQUEST_FAILED = "UNBLOCK_REQUEST_FAILED";
export const RESET_UNBLOCK_REQUEST = "RESET_UNBLOCK_REQUEST";


// GET ALL SearchedRefugees HELPERS
export const allSearchedRefugeesIsLoading = (ms) => ({
  type: ALL_SEARCHED_REFUGEES_IS_LOADING,
  payload: ms,
});

export const allSearchedRefugeesFailed = (ms) => ({
  type: ALL_SEARCHED_REFUGEES_FAILED,
  payload: ms,
});

export const resetSearchedRefugees = (ms) => ({
  type: RESET_SEARCHED_REFUGEES,
  payload: ms,
});

// GET ALL Mini SearchedRefugees HELPERS
export const allMiniSearchedRefugeesIsLoading = (ms) => ({
  type: ALL_MINI_SEARCHED_REFUGEES_IS_LOADING,
  payload: ms,
});

export const allMiniSearchedRefugeesFailed = (ms) => ({
  type: ALL_MINI_SEARCHED_REFUGEES_FAILED,
  payload: ms,
});

export const resetMiniSearchedRefugees = (ms) => ({
  type: RESET_MINI_SEARCHED_REFUGEES,
  payload: ms,
});

// GET ALL SearchedMentors HELPERS
export const allSearchedMentorsIsLoading = (ms) => ({
  type: ALL_SEARCHED_MENTORS_IS_LOADING,
  payload: ms,
});

export const allSearchedMentorsFailed = (ms) => ({
  type: ALL_SEARCHED_MENTORS_FAILED,
  payload: ms,
});

export const resetSearchedMentors = (ms) => ({
  type: RESET_SEARCHED_MENTORS,
  payload: ms,
});

// GET ALL MiniSearchedMentors HELPERS
export const allMiniSearchedMentorsIsLoading = (ms) => ({
  type: ALL_MINI_SEARCHED_MENTORS_IS_LOADING,
  payload: ms,
});

export const allMiniSearchedMentorsFailed = (ms) => ({
  type: ALL_MINI_SEARCHED_MENTORS_FAILED,
  payload: ms,
});

export const resetMiniSearchedMentors = (ms) => ({
  type: RESET_MINI_SEARCHED_MENTORS,
  payload: ms,
});

// GET ALL SearchedSuppliers HELPERS
export const allSearchedSuppliersIsLoading = (ms) => ({
  type: ALL_SEARCHED_SUPPLIERS_IS_LOADING,
  payload: ms,
});

export const allSearchedSuppliersFailed = (ms) => ({
  type: ALL_SEARCHED_SUPPLIERS_FAILED,
  payload: ms,
});

export const resetSearchedSuppliers = (ms) => ({
  type: RESET_SEARCHED_SUPPLIERS,
  payload: ms,
});

// GET ALL MiniSearchedSuppliers HELPERS
export const allMiniSearchedSuppliersIsLoading = (ms) => ({
  type: ALL_MINI_SEARCHED_SUPPLIERS_IS_LOADING,
  payload: ms,
});

export const allMiniSearchedSuppliersFailed = (ms) => ({
  type: ALL_MINI_SEARCHED_SUPPLIERS_FAILED,
  payload: ms,
});

export const resetMiniSearchedSuppliers = (ms) => ({
  type: RESET_MINI_SEARCHED_SUPPLIERS,
  payload: ms,
});

//DELETE Request  ACTIONS

export const deleteRequestLoading = (ms) => ({
  type: DELETE_REQUEST_IS_lOADING,
  payload: ms,
});

export const deleteRequestFailed = (ms) => ({
  type: DELETE_REQUEST_FAILED,
  payload: ms,
});

export const resetDeleteRequest = (ms) => ({
  type: RESET_DELETE_REQUEST,
  payload: ms,
});

//Block Request  ACTIONS

export const blockRequestLoading = (ms) => ({
  type: BLOCK_REQUEST_IS_lOADING,
  payload: ms,
});

export const blockRequestFailed = (ms) => ({
  type: BLOCK_REQUEST_FAILED,
  payload: ms,
});

export const resetBlockRequest = (ms) => ({
  type: RESET_BLOCK_REQUEST,
  payload: ms,
});

//UNBlock Request  ACTIONS

export const unblockRequestLoading = (ms) => ({
  type: UNBLOCK_REQUEST_IS_lOADING,
  payload: ms,
});

export const unblockRequestFailed = (ms) => ({
  type: UNBLOCK_REQUEST_FAILED,
  payload: ms,
});

export const resetUnblockRequest = (ms) => ({
  type: RESET_UNBLOCK_REQUEST,
  payload: ms,
});

export function getAllSearchedMentors(page, limit, search = '', filter = 'all', refugeeId = '', status = 'all') {
  return (dispatch) => {
    dispatch(allSearchedMentorsIsLoading(true));

    client
      .query({
        query: gql`
          {
            searchAllMentors(page: ${parseInt(page)}, limit: ${parseInt(limit)}, search: "${search}", filter:{refugeeId: "${refugeeId}", assignType: "${filter}", status: "${status}"}) {
                  totalDocs
                  limit
                  page
                  totalPages
                  hasNextPage
                  hasPrevPage
                  nextPage
                  prevPage
                  pagingCounter
                  docs{
                    id
                    bsn
                    name
                      email
                      phoneNumber
                      totalRefugees
                      isAssigned
                      status
                      isDeleted
                      createdAt
                    municipality{
                      _id
                     name
                      province
                    }
                  }
              }
          }
        `,
        fetchPolicy: 'network-only'
      }

      )
      .then((response) => {
        dispatch({
          type: GET_ALL_SEARCHED_MENTORS,
          payload: response.data,
        });
      })

      .catch((err) => {
        if (err.networkError && err.networkError.result && err.networkError.result.errors && err.networkError.result.errors.length && err.networkError.result.errors[0] && err.networkError.result.errors[0].extensions && err.networkError.result.errors[0].extensions.code && err.networkError.result.errors[0].extensions.code === 401) {
          dispatch(logout());
        }
        else {
          if (err.graphQLErrors && err.graphQLErrors.length > 0) {
            dispatch(
              allSearchedMentorsFailed(
                err.graphQLErrors[0].message
              )
            );
          }
          else {
            dispatch(
              allSearchedMentorsFailed(
                "error in list or not found list"
              )
            );
          }
        }
      });
  };
}

export function getAllMiniSearchedMentors(page, limit, search = '', refugeeId = '', municipalityId = '') {
  return (dispatch) => {
    dispatch(allSearchedMentorsIsLoading(true));

    client
      .query({
        query: gql`
          {
            miniSearchAllMentors(page: ${parseInt(page)}, limit: ${parseInt(limit)}, search: "${search}", filter:{refugeeId: "${refugeeId}", municipalityId: "${municipalityId}"}) {
                  totalDocs
                  limit
                  page
                  totalPages
                  hasNextPage
                  hasPrevPage
                  nextPage
                  prevPage
                  pagingCounter
                  docs{
                    id
                    bsn
                    name
                      email
                      phoneNumber
                      totalRefugees
                      isAssigned
                      status
                      isDeleted
                      createdAt
                    municipality{
                      _id
                     name
                      province
                    }
                  }
              }
          }
        `,
        fetchPolicy: 'network-only'
      }

      )
      .then((response) => {
        dispatch({
          type: GET_ALL_MINI_SEARCHED_MENTORS,
          payload: response.data,
        });
      })

      .catch((err) => {
        if (err.networkError && err.networkError.result && err.networkError.result.errors && err.networkError.result.errors.length && err.networkError.result.errors[0] && err.networkError.result.errors[0].extensions && err.networkError.result.errors[0].extensions.code && err.networkError.result.errors[0].extensions.code === 401) {
          dispatch(logout());
        }
        else {
          if (err.graphQLErrors && err.graphQLErrors.length > 0) {
            dispatch(
              allMiniSearchedMentorsFailed(
                err.graphQLErrors[0].message
              )
            );
          }
          else {
            dispatch(
              allMiniSearchedMentorsFailed(
                "error in list or not found list"
              )
            );
          }
        }
      });
  };
}

export function getAllSearchedRefugees(page, limit, search = '', filter = 'all', mentorId = '', supplierId = '', status = 'all') {
  return (dispatch) => {
    dispatch(allSearchedRefugeesIsLoading(true));

    client
      .query({
        query: gql`
          {
            searchAllRefugees(page: ${parseInt(page)}, limit: ${parseInt(limit)}, search: "${search}", filter:{mentorId: "${mentorId}", supplierId: "${supplierId}", assignType: "${filter}", status: "${status}"}) {
                  totalDocs
                  limit
                  page
                  totalPages
                  hasNextPage
                  hasPrevPage
                  nextPage
                  prevPage
                  pagingCounter
                  docs{
                    id
                    bsn
    name
      email
      phoneNumber
    intakeDate
    isAssigned
    status
    isDeleted
                      createdAt
                      mentor{
                        _id
                       name
                        email
                        phoneNumber
                      }
                    municipality{
                      _id
                     name
                      province
                      manager{
                        _id
                     name
                      email
                      phoneNumber
                      }
                    }
                    suppliers{
                      school{
                        _id
                     name
                      email
                      phoneNumber
                      }
                      work{
                        _id
                     name
                      email
                      phoneNumber
                      }
                    }
                  }
              }
          }
        `,
        fetchPolicy: 'network-only'
      }

      )
      .then((response) => {
        dispatch({
          type: GET_ALL_SEARCHED_REFUGEES,
          payload: response.data,
        });
      })

      .catch((err) => {
        if (err.networkError && err.networkError.result && err.networkError.result.errors && err.networkError.result.errors.length && err.networkError.result.errors[0] && err.networkError.result.errors[0].extensions && err.networkError.result.errors[0].extensions.code && err.networkError.result.errors[0].extensions.code === 401) {
          dispatch(logout());
        }
        else {
          if (err.graphQLErrors && err.graphQLErrors.length > 0) {
            dispatch(
              allSearchedRefugeesFailed(
                err.graphQLErrors[0].message
              )
            );
          }
          else {
            dispatch(
              allSearchedRefugeesFailed(
                "error in list or not found list"
              )
            );
          }
        }
      });
  };
}

export function getAllMiniSearchedRefugees(page, limit, search = '', mentorId = '', supplierId = '', municipalityId = '') {
  return (dispatch) => {
    dispatch(allMiniSearchedRefugeesIsLoading(true));

    client
      .query({
        query: gql`
          {
            miniSearchAllRefugees(page: ${parseInt(page)}, limit: ${parseInt(limit)}, search: "${search}", filter:{mentorId: "${mentorId}", supplierId: "${supplierId}", municipalityId: "${municipalityId}"}) {
                  totalDocs
                  limit
                  page
                  totalPages
                  hasNextPage
                  hasPrevPage
                  nextPage
                  prevPage
                  pagingCounter
                  docs{
                    id
                    bsn
    name
      email
      phoneNumber
    intakeDate
    isAssigned
    status
    isDeleted
                      createdAt
                      mentor{
                        _id
                       name
                        email
                        phoneNumber
                      }
                    municipality{
                      _id
                     name
                      province
                      manager{
                        _id
                     name
                      email
                      phoneNumber
                      }
                    }
                    suppliers{
                      school{
                        _id
                     name
                      email
                      phoneNumber
                      }
                      work{
                        _id
                     name
                      email
                      phoneNumber
                      }
                    }
                  }
              }
          }
        `,
        fetchPolicy: 'network-only'
      }

      )
      .then((response) => {
        dispatch({
          type: GET_ALL_MINI_SEARCHED_REFUGEES,
          payload: response.data,
        });
      })

      .catch((err) => {
        if (err.networkError && err.networkError.result && err.networkError.result.errors && err.networkError.result.errors.length && err.networkError.result.errors[0] && err.networkError.result.errors[0].extensions && err.networkError.result.errors[0].extensions.code && err.networkError.result.errors[0].extensions.code === 401) {
          dispatch(logout());
        }
        else {
          if (err.graphQLErrors && err.graphQLErrors.length > 0) {
            dispatch(
              allMiniSearchedRefugeesFailed(
                err.graphQLErrors[0].message
              )
            );
          }
          else {
            dispatch(
              allMiniSearchedRefugeesFailed(
                "error in list or not found list"
              )
            );
          }
        }
      });
  };
}

export function getAllSearchedSuppliers(page, limit, search = '', filter = 'all', type = '', refugeeId = '', status = 'all') {
  return (dispatch) => {
    dispatch(allSearchedSuppliersIsLoading(true));

    client
      .query({
        query: gql`
        {
          searchAllSuppliers(page: ${parseInt(page)}, limit: ${parseInt(limit)}, search: "${search}", filter:{refugeeId: "${refugeeId}", assignType: "${filter}", supplierType: "${type}", status: "${status}"}) {
                totalDocs
                limit
                page
                totalPages
                hasNextPage
                hasPrevPage
                nextPage
                prevPage
                pagingCounter
                docs{
                  id
                  type
  name
    email
    phoneNumber
    status
    isDeleted
                    createdAt
                    isAssigned
                    totalRefugees
                    contactPerson{
                      name
                    }
                  municipality{
                    _id
                   name
                    province
                    manager{
                      _id
                   name
                    email
                    phoneNumber
                    }
                  }
                }
            }
        }
      `,
        fetchPolicy: 'network-only'
      }

      )
      .then((response) => {
        dispatch({
          type: GET_ALL_SEARCHED_SUPPLIERS,
          payload: response.data,
        });
      })

      .catch((err) => {
        if (err.networkError && err.networkError.result && err.networkError.result.errors && err.networkError.result.errors.length && err.networkError.result.errors[0] && err.networkError.result.errors[0].extensions && err.networkError.result.errors[0].extensions.code && err.networkError.result.errors[0].extensions.code === 401) {
          dispatch(logout());
        }
        else {
          if (err.graphQLErrors && err.graphQLErrors.length > 0) {
            dispatch(
              allSearchedSuppliersFailed(
                err.graphQLErrors[0].message
              )
            );
          }
          else {
            dispatch(
              allSearchedSuppliersFailed(
                "error in list or not found list"
              )
            );
          }
        }
      });
  };
}

export function getAllMiniSearchedSuppliers(page, limit, search = '', refugeeId = '', municipalityId = '', mentorId = '') {
  return (dispatch) => {
    dispatch(allMiniSearchedSuppliersIsLoading(true));

    client
      .query({
        query: gql`
        {
          miniSearchAllSuppliers(page: ${parseInt(page)}, limit: ${parseInt(limit)}, search: "${search}", filter:{refugeeId: "${refugeeId}", municipalityId: "${municipalityId}", mentorId: "${mentorId}"}) {
                totalDocs
                limit
                page
                totalPages
                hasNextPage
                hasPrevPage
                nextPage
                prevPage
                pagingCounter
                docs{
                  id
                  type
  name
    email
    phoneNumber
    status
    isDeleted
                    createdAt
                    isAssigned
                    totalRefugees
                    contactPerson{
                      name
                    }
                  municipality{
                    _id
                   name
                    province
                    manager{
                      _id
                   name
                    email
                    phoneNumber
                    }
                  }
                }
            }
        }
      `,
        fetchPolicy: 'network-only'
      }

      )
      .then((response) => {
        dispatch({
          type: GET_ALL_MINI_SEARCHED_SUPPLIERS,
          payload: response.data,
        });
      })

      .catch((err) => {
        if (err.networkError && err.networkError.result && err.networkError.result.errors && err.networkError.result.errors.length && err.networkError.result.errors[0] && err.networkError.result.errors[0].extensions && err.networkError.result.errors[0].extensions.code && err.networkError.result.errors[0].extensions.code === 401) {
          dispatch(logout());
        }
        else {
          if (err.graphQLErrors && err.graphQLErrors.length > 0) {
            dispatch(
              allMiniSearchedSuppliersFailed(
                err.graphQLErrors[0].message
              )
            );
          }
          else {
            dispatch(
              allMiniSearchedSuppliersFailed(
                "error in list or not found list"
              )
            );
          }
        }
      });
  };
}

export function deleteRequest(id, role) {
  return (dispatch) => {
    dispatch(deleteRequestLoading(true));

    client
      .mutate({
        mutation: gql`
        mutation {
          submitDeleteRequest(id: "${id}", role: "${role}")
        }
            `,
      })
      .then((response) => {
        dispatch({
          type: DELETE_REQUEST,
          payload: response,
        });
      })
      .catch((err) => {
        if (
          err.networkError &&
          err.networkError.result &&
          err.networkError.result.errors &&
          err.networkError.result.errors.length &&
          err.networkError.result.errors[0] &&
          err.networkError.result.errors[0].extensions &&
          err.networkError.result.errors[0].extensions.code &&
          err.networkError.result.errors[0].extensions.code ===
          401
        ) {
          dispatch(logout());
        } else {
          if (err.graphQLErrors && err.graphQLErrors.length > 0) {
            dispatch(
              deleteRequestFailed(err.graphQLErrors[0].message)
            );
          } else {

            dispatch(deleteRequestFailed("error in delete Entity"));
          }
        }
      });
  };
}

export function blockRequest(id, role) {
  return (dispatch) => {
    dispatch(blockRequestLoading(true));

    client
      .mutate({
        mutation: gql`
        mutation {
          blockRole(id: "${id}", role: "${role}")
        }
            `,
      })
      .then((response) => {
        dispatch({
          type: BLOCK_REQUEST,
          payload: response,
        });
      })
      .catch((err) => {
        if (
          err.networkError &&
          err.networkError.result &&
          err.networkError.result.errors &&
          err.networkError.result.errors.length &&
          err.networkError.result.errors[0] &&
          err.networkError.result.errors[0].extensions &&
          err.networkError.result.errors[0].extensions.code &&
          err.networkError.result.errors[0].extensions.code ===
          401
        ) {
          dispatch(logout());
        } else {
          if (err.graphQLErrors && err.graphQLErrors.length > 0) {
            dispatch(
              blockRequestFailed(err.graphQLErrors[0].message)
            );
          } else {
            dispatch(blockRequestFailed("error in delete Entity"));
          }
        }
      });
  };
}

export function unblockRequest(id, role) {
  return (dispatch) => {
    dispatch(unblockRequestLoading(true));

    client
      .mutate({
        mutation: gql`
        mutation {
          unblockRole(id: "${id}", role: "${role}")
        }
            `,
      })
      .then((response) => {
        dispatch({
          type: UNBLOCK_REQUEST,
          payload: response,
        });
      })
      .catch((err) => {
        if (
          err.networkError &&
          err.networkError.result &&
          err.networkError.result.errors &&
          err.networkError.result.errors.length &&
          err.networkError.result.errors[0] &&
          err.networkError.result.errors[0].extensions &&
          err.networkError.result.errors[0].extensions.code &&
          err.networkError.result.errors[0].extensions.code ===
          401
        ) {
          dispatch(logout());
        } else {
          if (err.graphQLErrors && err.graphQLErrors.length > 0) {
            dispatch(
              unblockRequestFailed(err.graphQLErrors[0].message)
            );
          } else {
            dispatch(unblockRequestFailed("error in delete Entity"));
          }
        }
      });
  };
}