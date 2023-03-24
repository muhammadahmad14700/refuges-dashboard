import React from "react";
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Redirect,
     // Link,
} from "react-router-dom";
import history from "./history";

import NoMatch from "./components/NotFound/NoMatch"

import LoginPage from "./components/login/LoginPage";
import UserLoginPage from "./components/userapp/login/LoginPage";

import SystemSearchByManager from "./components/userapp/manager/system_search/SystemSearch";

import SystemSearchByMentor from "./components/userapp/mentor/system_search/SystemSearch";

import SystemSearchByAdmin from "./components/system_search/SystemSearch";

import EditUserByAdmin from "./components/edit_user/EditUser";
import EditUserByManager from "./components/userapp/manager/edit_user/EditUser";
import EditUserByMentor from "./components/userapp/mentor/edit_user/EditUser";

import CreateUserByAdmin from "./components/create_user/CreateUser";
import CreateUserByManager from "./components/userapp/manager/create_user/CreateUser";
import CreateUserByMentor from "./components/userapp/mentor/create_user/CreateUser";
import PostMunicipalityDetails from "./components/create_user/PostMunicipalityDetails";
import PostMentorDetails from "./components/create_user/PostMentorDetails";
import PostMentorDetailsByManager from "./components/userapp/manager/create_user/PostMentorDetails";
import PostSupplierDetails from "./components/create_user/PostSupplierDetails";
import PostSupplierDetailsByManager from "./components/userapp/manager/create_user/PostSupplierDetails";
import PostSupplierDetailsByMentor from "./components/userapp/mentor/create_user/PostSupplierDetails";
import PostRefugeeDetails from "./components/create_user/PostRefugeeDetails";
import PostRefugeeDetailsByManager from "./components/userapp/manager/create_user/PostRefugeeDetails";
import PostRefugeeDetailsByMentor from "./components/userapp/mentor/create_user/PostRefugeeDetails";
import AssignMentorToMunicipality from "./components/create_user/AssignMentorToMunicipality";
import EditAssignMentorToMunicipality from "./components/edit_user/AssignMentorToMunicipality";
import AssignSupplierToMunicipality from "./components/create_user/AssignSupplierToMunicipality";
import EditAssignSupplierToMunicipality from "./components/edit_user/AssignSupplierToMunicipality";
import AssignRefugeeToMunicipality from "./components/create_user/AssignRefugeeToMunicipality";
import EditAssignRefugeeToMunicipality from "./components/edit_user/AssignRefugeeToMunicipality";
import AssignMunicipalityToMentor from "./components/create_user/AssignMunicipalityToMentor";
import EditAssignMunicipalityToMentor from "./components/edit_user/AssignMunicipalityToMentor";
import AssignRefugeeToMentor from "./components/create_user/AssignRefugeeToMentor";
import AssignRefugeeToMentorByManager from "./components/userapp/manager/create_user/AssignRefugeeToMentor";
import EditAssignRefugeeToMentor from "./components/edit_user/AssignRefugeeToMentor";
import EditAssignRefugeeToMentorByManager from "./components/userapp/manager/edit_user/AssignRefugeeToMentor";
import ViewAssignRefugeeToMentorByMentor from "./components/userapp/mentor/edit_user/ViewAssignRefugeeToMentor";
import ViewAssignSupplierToRefugeeByMentor from "./components/userapp/mentor/edit_user/ViewAssignSupplierToRefugee";
import ViewAssignRefugeeToSupplierByMentor from "./components/userapp/mentor/edit_user/ViewAssignRefugeeToSupplier";
import AssignMunicipalityToSupplier from "./components/create_user/AssignMunicipalityToSupplier";
import EditAssignMunicipalityToSupplier from "./components/edit_user/AssignMunicipalityToSupplier";
import AssignRefugeeToSupplier from "./components/create_user/AssignRefugeeToSupplier";
import AssignRefugeeToSupplierByManager from "./components/userapp/manager/create_user/AssignRefugeeToSupplier";
import AssignRefugeeToSupplierByMentor from "./components/userapp/mentor/create_user/AssignRefugeeToSupplier";
import EditAssignRefugeeToSupplier from "./components/edit_user/AssignRefugeeToSupplier";
import EditAssignRefugeeToSupplierByManager from "./components/userapp/manager/edit_user/AssignRefugeeToSupplier";
import EditAssignRefugeeToSupplierByMentor from "./components/userapp/mentor/edit_user/AssignRefugeeToSupplier";
import AssignMunicipalityToRefugee from "./components/create_user/AssignMunicipalityToRefugee";
import EditAssignMunicipalityToRefugee from "./components/edit_user/AssignMunicipalityToRefugee";
import AssignMentorToRefugee from "./components/create_user/AssignMentorToRefugee";
import AssignMentorToRefugeeByManager from "./components/userapp/manager/create_user/AssignMentorToRefugee";
import EditAssignMentorToRefugee from "./components/edit_user/AssignMentorToRefugee";
import EditAssignMentorToRefugeeByManager from "./components/userapp/manager/edit_user/AssignMentorToRefugee";
import AssignSupplierToRefugee from "./components/create_user/AssignSupplierToRefugee";
import AssignSupplierToRefugeeByManager from "./components/userapp/manager/create_user/AssignSupplierToRefugee";
import AssignSupplierToRefugeeByMentor from "./components/userapp/mentor/create_user/AssignSupplierToRefugee";
import EditAssignSupplierToRefugee from "./components/edit_user/AssignSupplierToRefugee";
import EditAssignSupplierToRefugeeByManager from "./components/userapp/manager/edit_user/AssignSupplierToRefugee";
import EditAssignSupplierToRefugeeByMentor from "./components/userapp/mentor/edit_user/AssignSupplierToRefugee";

import ViewEditMunicipalitySummary from "./components/edit_user/ViewEditMunicipalitySummary";
import ViewEditSupplierSummary from "./components/edit_user/ViewEditSupplierSummary";
import ViewEditSupplierSummaryByManager from "./components/userapp/manager/edit_user/ViewEditSupplierSummary";
import ViewEditSupplierSummaryByMentor from "./components/userapp/mentor/edit_user/ViewEditSupplierSummary";
import ViewSupplierSummaryByMentor from "./components/userapp/mentor/edit_user/ViewSupplierSummary";
import ViewEditMentorSummary from "./components/edit_user/ViewEditMentorSummary";
import ViewEditMentorSummaryByManager from "./components/userapp/manager/edit_user/ViewEditMentorSummary";
import ViewMentorSummaryByMentor from "./components/userapp/mentor/edit_user/ViewMentorSummary";
import ViewRefugeeSummaryByMentor from "./components/userapp/mentor/edit_user/ViewRefugeeSummary";
import ViewRefugeeSummaryBySupplier from "./components/userapp/supplier/home/ViewRefugeeSummary";
import ViewEditRefugeeSummary from "./components/edit_user/ViewEditRefugeeSummary";
import ViewEditRefugeeSummaryByManager from "./components/userapp/manager/edit_user/ViewEditRefugeeSummary";
import ViewEditRefugeeSummaryByMentor from "./components/userapp/mentor/edit_user/ViewEditRefugeeSummary";

import ManagerHomePage from "./components/userapp/manager/home/HomePage";
import MentorHomePage from "./components/userapp/mentor/home/HomePage";
import SupplierHomePage from "./components/userapp/supplier/home/HomePage";
import HomePage from "./components/home/HomePage";

import EditMunicipalityContact from "./components/home/EditMunicipalityContact";



import Profile from "./components/profile/Profile";
import UserProfile from "./components/userapp/profile/Profile";
import SupplierProfile from "./components/userapp/supplier/profile/Profile";
import MentorProfile from "./components/userapp/mentor/profile/Profile";
import ManagerProfile from "./components/userapp/manager/profile/Profile";
import UpdatePassword from "./components/update_password/UpdatePassword";
import UserUpdatePassword from "./components/userapp/update_password/UpdatePassword";

import RequestResetPasswordForAdmin from "./components/forgot_password/RequestResetPassword";
import ResetPasswordForAdmin from "./components/forgot_password/ResetPassword";

import RequestResetPasswordForUser from "./components/userapp/forgot_password/RequestResetPassword";
import ResetPasswordForUser from "./components/userapp/forgot_password/ResetPassword";


import Header from "./components/home/sub_components/Header";
import Footer from "./components/home/sub_components/Footer";
import MunicipalityPipPage from "./components/municipality_pip/MunicipalityPipPage";
import ManagerMunicipalityPipPage from "./components/userapp/manager/municipality_pip/MunicipalityPipPage";
import MentorMunicipalityPipPage from "./components/userapp/mentor/municipality_pip/MunicipalityPipPage";

import Pdfpipreport from "./components/municipality_pip/Pdfpipreport";
import PdfpipreportByMentor from "./components/userapp/mentor/municipality_pip/Pdfpipreport";
import PdfpipreportByManager from "./components/userapp/manager/municipality_pip/Pdfpipreport";

import Editpipreport from "./components/municipality_pip/Editpipreport";
import EditpipreportByMentor from "./components/userapp/mentor/municipality_pip/Editpipreport";
import EditpipreportByManager from "./components/userapp/manager/municipality_pip/Editpipreport";
import Addpipreport from "./components/municipality_pip/Addpipreport";
import AddpipreportByManager from "./components/userapp/manager/municipality_pip/Addpipreport";
import AddpipreportByMentor from "./components/userapp/mentor/municipality_pip/Addpipreport";
import Addrules from "./components/municipality_pip/Addrules";
import AddrulesByManager from "./components/userapp/manager/municipality_pip/Addrules";
import AddrulesByMentor from "./components/userapp/mentor/municipality_pip/Addrules";

import { Provider } from "react-redux";
import store from "./store/index";
import { useHistory } from "react-router-dom";
import PrivateRouteForAdminOnly from "./routes/PrivateRouteForAdminOnly";
import PrivateRouteForManagerOnly from "./routes/PrivateRouteForManagerOnly";
import PrivateRouteForMentorOnly from "./routes/PrivateRouteForMentorOnly";
import PrivateRouteForSupplierOnly from "./routes/PrivateRouteForSupplierOnly";
import PrivateRouteForMultiple from "./routes/PrivateRouteForMultiple";
import { InMemoryCache } from "apollo-cache-inmemory";
import PublicRoute from "./routes/PublicRoute";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createUploadLink } from "apollo-upload-client";



function App(props) {

     const apolloCache = new InMemoryCache();
     const token = localStorage.getItem('jwtToken');
     const uploadLink = createUploadLink({
          uri: process.env.REACT_APP_URL, // Apollo Server is served from port 3000
          headers: {
               "x-auth-token": token ? token : ''
          }
     });

     const client = new ApolloClient({
          cache: apolloCache,
          link: uploadLink,
          defaultOptions: {
               watchQuery: {
                    fetchPolicy: "no-cache",
                    errorPolicy: "ignore",
               },
               query: {
                    fetchPolicy: "no-cache",
                    errorPolicy: "all",
               },
          },
     });
     return (
          <ApolloProvider client={client}>
               <Provider store={store}>
                    <Router history={history}>
                         <div>
                              <Switch>
                                   <PublicRoute exact path="/">
                                        <LoginPage />
                                   </PublicRoute>
                                   <PublicRoute exact path="/resetPasswordByAdmin">
                                        <ResetPasswordForAdmin />
                                   </PublicRoute>
                                   <PublicRoute exact path="/requestResetPasswordForAdmin">
                                        <RequestResetPasswordForAdmin />
                                   </PublicRoute>
                                   <PublicRoute exact path="/resetPassword">
                                        <ResetPasswordForUser />
                                   </PublicRoute>
                                   <PublicRoute exact path="/requestResetPasswordForUser">
                                        <RequestResetPasswordForUser />
                                   </PublicRoute>
                                   <PublicRoute exact path="/userlogin">
                                        <UserLoginPage />
                                   </PublicRoute>
                                   <PrivateRouteForAdminOnly path="/dashboard">
                                        <HomePage />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForAdminOnly path="/editMunicipalityContact">
                                        <EditMunicipalityContact />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForAdminOnly path="/addrules">
                                        <Addrules />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/addRulesByManager">
                                        <AddrulesByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForMentorOnly path="/addRulesByMentor">
                                        <AddrulesByMentor />
                                   </PrivateRouteForMentorOnly>


                                   <PrivateRouteForAdminOnly path="/systemSearchByAdmin">
                                        <SystemSearchByAdmin />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/systemSearchByManager">
                                        <SystemSearchByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForMentorOnly path="/systemSearchByMentor">
                                        <SystemSearchByMentor />
                                   </PrivateRouteForMentorOnly>

                                   <PrivateRouteForAdminOnly path="/createUserByAdmin">
                                        <CreateUserByAdmin />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/createUserByManager">
                                        <CreateUserByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForMentorOnly path="/createUserByMentor">
                                        <CreateUserByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForAdminOnly path="/editUserByAdmin">
                                        <EditUserByAdmin />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/editUserByManager">
                                        <EditUserByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForMentorOnly path="/editUserByMentor">
                                        <EditUserByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForAdminOnly path="/viewEditMunicipalitySummary">
                                        <ViewEditMunicipalitySummary />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForAdminOnly path="/viewEditMentorSummary">
                                        <ViewEditMentorSummary />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/viewEditMentorSummaryByManager">
                                        <ViewEditMentorSummaryByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForMentorOnly path="/viewMentorSummaryByMentor">
                                        <ViewMentorSummaryByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForMentorOnly path="/viewRefugeeSummaryByMentor">
                                        <ViewRefugeeSummaryByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForSupplierOnly path="/viewRefugeeSummaryBySupplier">
                                        <ViewRefugeeSummaryBySupplier />
                                   </PrivateRouteForSupplierOnly>
                                   <PrivateRouteForAdminOnly path="/viewEditSupplierSummary">
                                        <ViewEditSupplierSummary />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/viewEditSupplierSummaryByManager">
                                        <ViewEditSupplierSummaryByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForMentorOnly path="/viewEditSupplierSummaryByMentor">
                                        <ViewEditSupplierSummaryByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForMentorOnly path="/viewSupplierSummaryByMentor">
                                        <ViewSupplierSummaryByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForAdminOnly path="/ViewEditRefugeeSummary">
                                        <ViewEditRefugeeSummary />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/ViewEditRefugeeSummaryByManager">
                                        <ViewEditRefugeeSummaryByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForMentorOnly path="/ViewEditRefugeeSummaryByMentor">
                                        <ViewEditRefugeeSummaryByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForAdminOnly path="/postMunicipalityDetails">
                                        <PostMunicipalityDetails />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForAdminOnly path="/postMentorDetails">
                                        <PostMentorDetails />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/postMentorDetailsByManager">
                                        <PostMentorDetailsByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForAdminOnly path="/postSupplierDetails">
                                        <PostSupplierDetails />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/postSupplierDetailsByManager">
                                        <PostSupplierDetailsByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForMentorOnly path="/postSupplierDetailsByMentor">
                                        <PostSupplierDetailsByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForAdminOnly path="/postRefugeeDetails">
                                        <PostRefugeeDetails />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/postRefugeeDetailsByManager">
                                        <PostRefugeeDetailsByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForMentorOnly path="/postRefugeeDetailsByMentor">
                                        <PostRefugeeDetailsByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForAdminOnly path="/assignMentorToMunicipality">
                                        <AssignMentorToMunicipality />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForAdminOnly path="/editAssignMentorToMunicipality">
                                        <EditAssignMentorToMunicipality />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForAdminOnly path="/assignSupplierToMunicipality">
                                        <AssignSupplierToMunicipality />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForAdminOnly path="/editAssignSupplierToMunicipality">
                                        <EditAssignSupplierToMunicipality />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForAdminOnly path="/assignRefugeeToMunicipality">
                                        <AssignRefugeeToMunicipality />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForAdminOnly path="/editAssignRefugeeToMunicipality">
                                        <EditAssignRefugeeToMunicipality />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForAdminOnly path="/assignMunicipalityToMentor">
                                        <AssignMunicipalityToMentor />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForAdminOnly path="/EditAssignMunicipalityToMentor">
                                        <EditAssignMunicipalityToMentor />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForAdminOnly path="/assignRefugeeToMentor">
                                        <AssignRefugeeToMentor />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/assignRefugeeToMentorByManager">
                                        <AssignRefugeeToMentorByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForAdminOnly path="/editAssignRefugeeToMentor">
                                        <EditAssignRefugeeToMentor />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/editAssignRefugeeToMentorByManager">
                                        <EditAssignRefugeeToMentorByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForMentorOnly path="/viewAssignRefugeeToMentorByMentor">
                                        <ViewAssignRefugeeToMentorByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForMentorOnly path="/viewAssignSupplierToRefugeeByMentor">
                                        <ViewAssignSupplierToRefugeeByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForMentorOnly path="/viewAssignRefugeeToSupplierByMentor">
                                        <ViewAssignRefugeeToSupplierByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForAdminOnly path="/assignMunicipalityToSupplier">
                                        <AssignMunicipalityToSupplier />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForAdminOnly path="/editAssignMunicipalityToSupplier">
                                        <EditAssignMunicipalityToSupplier />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForAdminOnly path="/assignRefugeeToSupplier">
                                        <AssignRefugeeToSupplier />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/assignRefugeeToSupplierByManager">
                                        <AssignRefugeeToSupplierByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForMentorOnly path="/assignRefugeeToSupplierByMentor">
                                        <AssignRefugeeToSupplierByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForAdminOnly path="/editAssignRefugeeToSupplier">
                                        <EditAssignRefugeeToSupplier />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/editAssignRefugeeToSupplierByManager">
                                        <EditAssignRefugeeToSupplierByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForMentorOnly path="/editAssignRefugeeToSupplierByMentor">
                                        <EditAssignRefugeeToSupplierByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForAdminOnly path="/assignMunicipalityToRefugee">
                                        <AssignMunicipalityToRefugee />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForAdminOnly path="/editAssignMunicipalityToRefugee">
                                        <EditAssignMunicipalityToRefugee />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForAdminOnly path="/assignMentorToRefugee">
                                        <AssignMentorToRefugee />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/assignMentorToRefugeeByManager">
                                        <AssignMentorToRefugeeByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForAdminOnly path="/editAssignMentorToRefugee">
                                        <EditAssignMentorToRefugee />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/editAssignMentorToRefugeeByManager">
                                        <EditAssignMentorToRefugeeByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForAdminOnly path="/assignSupplierToRefugee">
                                        <AssignSupplierToRefugee />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/assignSupplierToRefugeeByManager">
                                        <AssignSupplierToRefugeeByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForMentorOnly path="/assignSupplierToRefugeeByMentor">
                                        <AssignSupplierToRefugeeByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForAdminOnly path="/editAssignSupplierToRefugee">
                                        <EditAssignSupplierToRefugee />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/editAssignSupplierToRefugeeByManager">
                                        <EditAssignSupplierToRefugeeByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForMentorOnly path="/editAssignSupplierToRefugeeByMentor">
                                        <EditAssignSupplierToRefugeeByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForAdminOnly path="/profile">
                                        <Profile />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForMultiple path="/userProfile">
                                        <UserProfile />
                                   </PrivateRouteForMultiple>
                                   <PrivateRouteForSupplierOnly path="/SupplierUserProfile">
                                        <SupplierProfile />
                                   </PrivateRouteForSupplierOnly>
                                   <PrivateRouteForMentorOnly path="/MentorUserProfile">
                                        <MentorProfile />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForManagerOnly path="/ManagerUserProfile">
                                        <ManagerProfile />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForAdminOnly path="/updatepassword">
                                        <UpdatePassword />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForMultiple path="/updateUserPassword">
                                        <UserUpdatePassword />
                                   </PrivateRouteForMultiple>

                                   <PrivateRouteForManagerOnly path="/managerdashboard">
                                        <ManagerHomePage />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForMentorOnly path="/mentordashboard">
                                        <MentorHomePage />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForSupplierOnly path="/supplierdashboard">
                                        <SupplierHomePage />
                                   </PrivateRouteForSupplierOnly>
                                   <PrivateRouteForAdminOnly path="/municipalitypip">
                                        <MunicipalityPipPage />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForManagerOnly path="/managerMunicipalitypip">
                                        <ManagerMunicipalityPipPage />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForMentorOnly path="/mentorMunicipalitypip">
                                        <MentorMunicipalityPipPage />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForAdminOnly path="/editpipreport">
                                        <Editpipreport />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForMentorOnly path="/editpipreportbymentor">
                                        <EditpipreportByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForManagerOnly path="/editpipreportbymanager">
                                        <EditpipreportByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForAdminOnly path="/addpipreport">
                                        <Addpipreport />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForMentorOnly path="/addpipreportbymentor">
                                        <AddpipreportByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForManagerOnly path="/addpipreportbymanager">
                                        <AddpipreportByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForAdminOnly path="/pdfpipreport">
                                        <Pdfpipreport />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForMentorOnly path="/pdfpipreportbymentor">
                                        <PdfpipreportByMentor />
                                   </PrivateRouteForMentorOnly>
                                   <PrivateRouteForManagerOnly path="/pdfpipreportbymanager">
                                        <PdfpipreportByManager />
                                   </PrivateRouteForManagerOnly>
                                   <PrivateRouteForAdminOnly path="/foradmin">
                                        <ForAdmin />
                                   </PrivateRouteForAdminOnly>
                                   <PrivateRouteForMultiple path="/formulti">
                                        <ForMulti />
                                   </PrivateRouteForMultiple>

                                   <Route path="*">
                                        <NoMatch />
                                   </Route>
                              </Switch>
                         </div>
                    </Router>
               </Provider>
          </ApolloProvider>
     );
}
export default App;


function ForAdmin() {
     return <h1>ForAdmin Only</h1>;
}

function ForMulti() {
     return <h1>For Multi user</h1>;
}
