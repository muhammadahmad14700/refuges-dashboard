import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import head from "../../../../assets/images/head.JPG";
import foot from "../../../../assets/images/foot.JPG";
import tick from "../../../../assets/images/tick.png";
import i18next from "i18next";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    // height: "130px",
  },
  tickimage: {
    width: "9px",
    height: "9px",
  },
  footimage: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // height: "",
  },
  mainView: {
    width: "100%",
    top: 127,
  },
  mainViewSecond: {
    width: "100%",
    top: 85,
  },
  headingView: {
    width: "100%",
    marginTop: "20px",
    textAlign: "center",
  },
  headingText: {
    fontSize: 20,
    color: "#253c8c",
    fontFamily: "Helvetica-Bold",
    fontWeight: "bold",
  },
  labelText: {
    fontSize: 12,
    color: "#253c8c",
    fontWeight: "bold",
  },
  label: {
    fontSize: 10,
    color: "#253c8c",
  },
  labelsign: {
    fontSize: 10,
    color: "#253c8c",
  },
  lableWrap: {
    height: 14,
    width: "100%",
    marginTop: "2px",
  },
  dateInput: {
    backgroundColor: "#daeff0",
    height: 12,
    width: 65,
    marginLeft: "7px",
    display: "flex",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#daeff0",
    height: 14,
    width: "100%",
    marginTop: "2px",
    padding: 1,
  },
  inputlast: {
    backgroundColor: "#daeff0",
    height: 14,
    width: "50%",
    marginTop: "2px",
    padding: 1,
  },
  inputnexttocheck: {
    backgroundColor: "#daeff0",
    height: 14,
    width: "80%",
    marginLeft: 10,
  },
  inputlargefirst: {
    backgroundColor: "#daeff0",
    height: 80,
    width: "100%",
    marginTop: "2px",
    padding: 2,
  },
  inputlargesecond: {
    backgroundColor: "#daeff0",
    height: 130,
    width: "100%",
    marginTop: "2px",
    padding: 2,
  },
  inputlargethird: {
    backgroundColor: "#daeff0",
    height: 210,
    width: "100%",
    // marginTop:"2px",
    padding: 2,
  },
  inputlargelast: {
    backgroundColor: "#daeff0",
    height: 55,
    width: "50%",
    marginTop: "2px",
    padding: 2,
  },
  checkwrap: {
    width: "100%",
    marginTop: "2px",
    display: "flex",
    flexDirection: "row",
    height: 14,
  },
  check: {
    backgroundColor: "white",
    height: 10,
    width: "3%",
    //  marginTop:"2px",
    border: 1,
  },
  circle: {
    backgroundColor: "#253c8c",
    height: 6,
    width: 6,
    //  marginTop:"2px",
    //  border:1,
    borderRadius: 50,
  },
  circlewrap: {
    marginTop: 6,
    height: 10,
    // backgroundColor:"black",
    paddingTop: 3,
  },
  circletextwrap: {
    marginTop: 6,
    minHeight: 10,
    height: "auto",
    // backgroundColor:"red"
  },

  contenView: {
    // backgroundColor: "grey",
    marginTop: "50px",
    marginLeft: "67px",

    width: "78%",
    // height: "100px",
  },
  formHead: { backgroundColor: "#253c8c", marginTop: "12px", padding: 3 },
  formHeadText: {
    fontSize: "10",
    color: "white",
    fontFamily: "Helvetica-Bold",
  },
  formLeft: {
    display: "flex",
    //  backgroundColor: "pink",
    width: "30%",
  },
  formLeftRules: {
    display: "flex",
    // backgroundColor: "pink",
    width: "3%",
  },
  formRight: {
    display: "flex",
    //  backgroundColor: "yellow",
    width: "70%",
  },
  formRightRules: {
    display: "flex",
    //  backgroundColor: "yellow",
    width: "97%",
  },
});

// Create Document Component
function MyDocument(props) {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <Image src={head} style={styles.image} fixed />
        <View style={styles.mainView}>
          <View style={styles.headingView}>
            <Text style={styles.headingText}>
              {i18next.t("PLAN INTEGRATION AND PARTICIPATION (PIP)")}
            </Text>
          </View>
          <View style={styles.contenView}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.labelText}>{i18next.t("DATE")}</Text>
              <View style={styles.dateInput}>
                <Text style={{ fontSize: 10 }}>
                  {new Date(props.data.date).toLocaleDateString()}
                </Text>
              </View>
            </View>
            <View style={styles.formHead}>
              <Text style={styles.formHeadText}>{i18next.t("PARTICULARS INFORMATION")}</Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Citizen service number")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Client number")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Sex")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Initials and surname")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Address")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Phone")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Date of birth")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Nationality")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Marital status")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Language ​​at home")}</Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.participantInfo.citizenServiceNumber}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.participantInfo.clientNumber}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.participantInfo.gender}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.participantInfo.fullName}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.participantInfo.address}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.participantInfo.phoneNumber}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.participantInfo.birthDate
                      ? new Date(
                        props.data.participantInfo.birthDate
                      ).toLocaleDateString()
                      : "NA"}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.participantInfo.nationality}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.participantInfo.maritalStatus}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.participantInfo.languagesAtHome}
                  </Text>
                </View>
              </View>
            </View>

            {/* Next //////////////////////////////////*/}

            <View style={styles.formHead}>
              <Text style={styles.formHeadText}>{i18next.t("PROJECT DETAILS")}</Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Project name")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Project manager")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("phone number")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Date of registration")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Date intake")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Expected start date")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Expected end date")}</Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.projectDetails.projectName}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.projectDetails.projectManager}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.projectDetails.phoneNumber}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.projectDetails.registrationDate
                      ? new Date(
                        props.data.projectDetails.registrationDate
                      ).toLocaleDateString()
                      : "NA"}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.projectDetails.intakeDate
                      ? new Date(
                        props.data.projectDetails.intakeDate
                      ).toLocaleDateString()
                      : "NA"}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.projectDetails.expectedStartDate
                      ? new Date(
                        props.data.projectDetails.expectedStartDate
                      ).toLocaleDateString()
                      : "NA"}
                  </Text>
                </View>

                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.projectDetails.expectedEndDate
                      ? new Date(
                        props.data.projectDetails.expectedEndDate
                      ).toLocaleDateString()
                      : "NA"}
                  </Text>
                </View>
              </View>
            </View>

            {/* Next //////////////////////////////////*/}

            <View style={styles.formHead}>
              <Text style={styles.formHeadText}>{i18next.t("PROJECT PLAN FOR PROGRESS")}</Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Offer routes")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}></Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}></Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Classroom hours per week")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Hours of self-study per week")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Hours of language coach")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Motivation path choice")}</Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanForProgress.offerRoutes
                      .literacyCourse && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Literacy course")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanForProgress.offerRoutes
                      .civicIntegrationCourse && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Civic integration course")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanForProgress.offerRoutes
                      .stateExam && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("State exam NT2 I, NT2 II")}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.projectPlanForProgress.classroomHoursPerWeek}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.projectPlanForProgress.selfStudyHoursPerWeek}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.projectPlanForProgress.languageCoachHours}
                  </Text>
                </View>

                <View style={styles.inputlargefirst}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.projectPlanForProgress.motivationPathChoice}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Image src={foot} style={styles.footimage} />
      </Page>

      {/* Second Page////////////////////////////// */}

      <Page size="A4" style={styles.page} wrap>
        <Image src={head} style={styles.image} fixed />
        <View style={styles.mainViewSecond}>
          <View style={styles.contenView}>
            <View style={styles.formHead}>
              <Text style={styles.formHeadText}>{i18next.t("PROJECT PLAN INTEGRATION")}</Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Offer routes")} </Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration.offerRoutes
                      .developSpeakingSkills && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Develop speaking skills")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration.offerRoutes
                      .participationInSociety && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Participation in society")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration.offerRoutes
                      .gettingToKnowEnvironment && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Getting to know the environment")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration.offerRoutes
                      .developingTalentsWithInDutchSociety && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Developing talents within Dutch society")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration.offerRoutes
                      .additionalExercisesForIntegrationProgram && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Additional exercises for the integration program")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration.offerRoutes
                      .developForFutureEducation && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Develop for a future education")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration.offerRoutes
                      .developForFutureJob && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Develop for a future job")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration.offerRoutes.other && (
                      <Image src={tick} style={styles.tickimage} fixed />
                    )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Other")}:
                  </Text>
                  <View style={styles.inputnexttocheck}>
                    <Text style={{ fontSize: 10 }}>
                      {props.data.projectPlanIntegration.offerRoutes.otherField}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Next //////////////////////////////////*/}

            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
            >
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Collaboration organizations")}</Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration
                      .collaborationOrganizations.stichtingWelKom && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Stichting Wel.Kom")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration
                      .collaborationOrganizations.municipalityOfVenlo && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Municipality of Venlo")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration
                      .collaborationOrganizations
                      .informationAndAdvicePuntun && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Information & Advice Puntun")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration
                      .collaborationOrganizations.greenLightFoundation && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Green light foundation")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration
                      .collaborationOrganizations
                      .housesOfTheDistrictOfVenlo && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Houses of the District of Venlo")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration
                      .collaborationOrganizations.taalhuisVenlo && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Taalhuis Venlo")}
                  </Text>
                </View>

                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration
                      .collaborationOrganizations.languageVolunteersVenlo && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Language volunteers Venlo")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration
                      .collaborationOrganizations.vwnVenlo && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("VWN Venlo")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration
                      .collaborationOrganizations.guildTraining && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Guild training")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration
                      .collaborationOrganizations.idwNetherlands && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("IDW Netherlands")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration
                      .collaborationOrganizations.uafNetherlands && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("UAF Netherlands")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration
                      .collaborationOrganizations.venloLibrary && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Venlo Library")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration
                      .collaborationOrganizations.ppdLimburg && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("PPD Limburg")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration
                      .collaborationOrganizations.springChildcare && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Spring childcare")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration
                      .collaborationOrganizations
                      .primarySchoolsInMunicipalityOfVenlo && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Primary schools in the municipality of Venlo")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanIntegration
                      .collaborationOrganizations.other && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Other")}:
                  </Text>
                  <View style={styles.inputnexttocheck}>
                    <Text style={{ fontSize: 10 }}>
                      {
                        props.data.projectPlanIntegration
                          .collaborationOrganizations.otherField
                      }
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Next //////////////////////////////////*/}

            <View style={styles.formHead}>
              <Text style={styles.formHeadText}>{i18next.t("VOLUNTEER WORK")}</Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Purpose of registration")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Talent participant")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Participant possibilities")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Organization")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Contact")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("phone number")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Date of registration")}</Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Start date")}</Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.volunteerWork.purposeOfRegistration}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.volunteerWork.talentParticipant}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.volunteerWork.participantPossibilities}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.volunteerWork.organization}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.volunteerWork.contact}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.volunteerWork.phoneNumber}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.volunteerWork.registrationDate
                      ? new Date(
                        props.data.volunteerWork.registrationDate
                      ).toLocaleDateString()
                      : "NA"}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.volunteerWork.startDate
                      ? new Date(
                        props.data.volunteerWork.startDate
                      ).toLocaleDateString()
                      : "NA"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Image src={foot} style={styles.footimage} />
      </Page>

      {/* Third Page////////////////////////////// */}
      <Page size="A4" style={styles.page} wrap>
        <Image src={head} style={styles.image} fixed />
        <View style={styles.mainViewSecond}>
          <View style={styles.contenView}>
            <View style={styles.formHead}>
              <Text style={styles.formHeadText}>
                {i18next.t("EVALUATION CONVERSATIONS & RESULTS")}
              </Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Date")} </Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Conversation")} </Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.evaluationConversationAndResults.date1
                      ? new Date(
                        props.data.evaluationConversationAndResults.date1
                      ).toLocaleDateString()
                      : "NA"}
                  </Text>
                </View>
                <View style={styles.inputlargesecond}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.evaluationConversationAndResults.conversation1}
                  </Text>
                </View>
              </View>
            </View>

            {/* Next //////////////////////////////////*/}

            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
            >
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Date")} </Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Conversation")} </Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.evaluationConversationAndResults.date2
                      ? new Date(
                        props.data.evaluationConversationAndResults.date2
                      ).toLocaleDateString()
                      : "NA"}
                  </Text>
                </View>
                <View style={styles.inputlargesecond}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.evaluationConversationAndResults.conversation2}
                  </Text>
                </View>
              </View>
            </View>
            {/* Next //////////////////////////////////*/}

            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
            >
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Date")} </Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Conversation")} </Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.evaluationConversationAndResults.date3
                      ? new Date(
                        props.data.evaluationConversationAndResults.date3
                      ).toLocaleDateString()
                      : "NA"}
                  </Text>
                </View>
                <View style={styles.inputlargesecond}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.evaluationConversationAndResults.conversation3}
                  </Text>
                </View>
              </View>
            </View>

            {/* Next //////////////////////////////////*/}

            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
            >
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Date")} </Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Conversation")} </Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.evaluationConversationAndResults.date4
                      ? new Date(
                        props.data.evaluationConversationAndResults.date4
                      ).toLocaleDateString()
                      : "NA"}
                  </Text>
                </View>
                <View style={styles.inputlargesecond}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.evaluationConversationAndResults.conversation4}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View> */}
        <Image src={foot} style={styles.footimage} />
      </Page>

      {/* 4th Page////////////////////////////// */}

      <Page size="A4" style={styles.page} wrap>
        <Image src={head} style={styles.image} fixed />
        <View style={styles.mainViewSecond}>
          <View style={styles.contenView}>
            <View style={styles.formHead}>
              <Text style={styles.formHeadText}>
                {i18next.t("PROJECT PLAN PARTICIPATION / WORK")}
              </Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Offer routes")} </Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}> </Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}> </Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}> </Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Working hours")} </Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .offerRoutes
                      .trialMonth && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Trial month")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .offerRoutes
                      .threeMonths && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("3 months")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .offerRoutes
                      .sixMonths && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("6 months")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .offerRoutes
                      .extensionSixMonths && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Extension 6 months")}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 10 }}>{props.data.projectPlanParticipationOrWork.workingHours}</Text>
                </View>
              </View>
            </View>

            {/* Next //////////////////////////////////*/}

            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
            >
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Labor training")}</Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .laborTraining
                      .followWorkInstruction && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Follow work instructions")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .laborTraining
                      .giveReceiveFeedback && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Give / receive feedback")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .laborTraining
                      .houseRules && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("House rules")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .laborTraining
                      .dayRhythm && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Day rhythm")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .laborTraining
                      .employeeSkills && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Employee skills")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .laborTraining
                      .jobInterviewSkills && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Job interview skills")}
                  </Text>
                </View>
              </View>
            </View>

            {/* Next //////////////////////////////////*/}

            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
            >
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Intermediate objectives")}</Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .intermediateObjectives
                      .learningToWork && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Learning to work")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .intermediateObjectives
                      .learningToDealWithColleague && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Learning to deal with a colleague")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .intermediateObjectives
                      .toCommunicate && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("To communicate")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .intermediateObjectives
                      .apply && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Apply")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .intermediateObjectives
                      .createResume && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Create a resume")}
                  </Text>
                </View>
              </View>
            </View>

            {/* Next //////////////////////////////////*/}

            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
            >
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Final objective")}</Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .finalObjectives
                      .jobInterviewSkills && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Job interview skills")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .finalObjectives
                      .employeeSkills && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Employee skills")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .finalObjectives
                      .trialPlacement && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Trial Placement")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .finalObjectives
                      .regularJobWithTraining && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Regular job with training")}
                  </Text>
                </View>
                <View style={styles.checkwrap}>
                  <View style={styles.check}>
                    {props.data.projectPlanParticipationOrWork
                      .finalObjectives
                      .regularJob && (
                        <Image src={tick} style={styles.tickimage} fixed />
                      )}
                  </View>
                  <Text style={{ fontSize: 10, marginLeft: "6px" }}>
                    {i18next.t("Regular job")}
                  </Text>
                </View>
              </View>
            </View>

            {/* Next //////////////////////////////////*/}

            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
            >
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Explanation")}</Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.inputlargethird}>
                  <Text style={{ fontSize: 10 }}>
                    {props.data.projectPlanParticipationOrWork
                      .finalObjectives.explanation}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Image src={foot} style={styles.footimage} />
      </Page>

      {/* 5th Page////////////////////////////// */}

      <Page size="A4" style={styles.page} wrap>
        <Image src={head} style={styles.image} fixed />
        <View style={styles.mainViewSecond}>
          <View style={styles.contenView}>
            <View style={styles.formHead}>
              <Text style={styles.formHeadText}>{i18next.t("RULES AND OBLIGATIONS")}</Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={styles.formLeftRules}>
                <View style={styles.circlewrap}>
                  <View style={styles.circle}></View>
                </View>
                <View style={styles.circlewrap}>
                  <View style={styles.circle}></View>
                </View>
                <View style={styles.circlewrap}>
                  <View style={styles.circle}></View>
                </View>
                <View style={styles.circlewrap}>
                  <View style={styles.circle}></View>
                </View>
                <View style={styles.circlewrap}>
                  <View style={styles.circle}></View>
                </View>
                <View style={styles.circlewrap}></View>
                <View style={styles.circlewrap}>
                  <View style={styles.circle}></View>
                </View>
                <View style={styles.circlewrap}></View>
                <View style={styles.circlewrap}>
                  <View style={styles.circle}></View>
                </View>
                <View style={styles.circlewrap}></View>
                <View style={styles.circlewrap}>
                  <View style={styles.circle}></View>
                </View>
                <View style={styles.circlewrap}></View>
                <View style={styles.circlewrap}>
                  <View style={styles.circle}></View>
                </View>
                <View style={styles.circlewrap}></View>
                <View style={styles.circlewrap}>
                  <View style={styles.circle}></View>
                </View>
                <View style={styles.circlewrap}></View>
              </View>
              <View style={styles.formRightRules}>
                <View style={styles.circletextwrap}>
                  <Text style={{ fontSize: 9 }}>
                    {i18next.t("Active participation in the project")}.
                  </Text>
                </View>
                <View style={styles.circletextwrap}>
                  <Text style={{ fontSize: 9 }}>
                    {i18next.t("Mandatory present during all activities as discussed at the agreed times")}.
                  </Text>
                </View>
                <View style={styles.circletextwrap}>
                  <Text style={{ fontSize: 9 }}>
                    {i18next.t("Mandatory to adhere to the house rules set by the work location")}.
                  </Text>
                </View>
                <View style={styles.circletextwrap}>
                  <Text style={{ fontSize: 9 }}>
                    {i18next.t("Aggressive and disrespectful behavior will not be tolerated")}.
                  </Text>
                </View>
                <View style={styles.circletextwrap}>
                  <Text style={{ fontSize: 9 }}>
                    {i18next.t("Absence due to illness must always be reported to the work management before 08.30")}
                  </Text>
                </View>
                <View style={styles.circletextwrap}>
                  <Text style={{ fontSize: 9 }}>{i18next.t("and the participation coach")}.</Text>
                </View>
                <View style={styles.circletextwrap}>
                  <Text style={{ fontSize: 9 }}>
                    {i18next.t("In case of illness, you must be available by phone all day, this is from 08:00 to 16:30. Also serves")}
                  </Text>
                </View>
                <View style={styles.circletextwrap}>
                  <Text style={{ fontSize: 9 }}>
                    {i18next.t("stay at home until 4.30 pm for a check-up")}.
                  </Text>
                </View>

                <View style={styles.circletextwrap}>
                  <Text style={{ fontSize: 9 }}>
                    {i18next.t("On location, agreements are made with you about whether days / hours should be used due to illness, leave, vacation and / or otherwise")}
                  </Text>
                </View>
                <View style={styles.circletextwrap}>
                  <Text style={{ fontSize: 9 }}>{i18next.t("to be overtaken")}.</Text>
                </View>
                <View style={styles.circletextwrap}>
                  <Text style={{ fontSize: 9 }}>
                    {i18next.t("No proof of absence means unauthorized absence. This will be reported to the")}
                  </Text>
                </View>
                <View style={styles.circletextwrap}>
                  <Text style={{ fontSize: 9 }}>
                    {i18next.t("client counselor work of the municipality")}.
                  </Text>
                </View>
                <View style={styles.circletextwrap}>
                  <Text style={{ fontSize: 9 }}>
                    {i18next.t("Travel costs (for more than 10 km one way) will in principle be reimbursed afterwards. The travel costs are")}{" "}
                  </Text>
                </View>
                <View style={styles.circletextwrap}>
                  <Text style={{ fontSize: 9 }}>
                    {i18next.t("reimbursed on the basis of a signed attendance list. Not being able to pay for public transport is therefore no excuse")}.
                  </Text>
                </View>
                <View style={styles.circletextwrap}>
                  <Text style={{ fontSize: 9 }}>
                    {i18next.t("Leave and vacation must be requested at the work location and at the participation coach")}{" "}
                  </Text>
                </View>
                <View style={styles.circletextwrap}>
                  <Text style={{ fontSize: 9 }}>
                    {i18next.t("(GP visit, emergencies, etc. with evidence)")}.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.formHead}>
              <Text style={styles.formHeadText}>{i18next.t("SIGNATURE")}</Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Date")} </Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Signature of the municipality")}</Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.inputlast}>
                  <Text style={{ fontSize: 10 }}>04-09-2018</Text>
                </View>
                <View style={styles.inputlargelast}>
                  <Text style={{ fontSize: 10 }}></Text>
                </View>
              </View>
            </View>

            {/* Next //////////////////////////////////*/}

            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
            >
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Date")} </Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>
                    {i18next.t("Signature of the counselor")}
                  </Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.inputlast}>
                  <Text style={{ fontSize: 10 }}>04-09-2018</Text>
                </View>
                <View style={styles.inputlargelast}>
                  <Text style={{ fontSize: 10 }}></Text>
                </View>
              </View>
            </View>
            {/* Next //////////////////////////////////*/}

            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
            >
              <View style={styles.formLeft}>
                <View style={styles.lableWrap}>
                  <Text style={styles.label}>{i18next.t("Date")} </Text>
                </View>
                <View style={styles.lableWrap}>
                  <Text style={styles.labelsign}>{i18next.t("Signature of Participant")}</Text>
                </View>
              </View>
              <View style={styles.formRight}>
                <View style={styles.inputlast}>
                  <Text style={{ fontSize: 10 }}>04-09-2018</Text>
                </View>
                <View style={styles.inputlargelast}>
                  <Text style={{ fontSize: 10 }}></Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Image src={foot} style={styles.footimage} />
      </Page>
    </Document>
  );
}


function Pdfpipreport(props) {

  return (

    <MyDocument data={props.data} />
  );
}
export default Pdfpipreport;
