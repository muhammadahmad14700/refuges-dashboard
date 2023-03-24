
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Toolbar,
  WeekView,
  TodayButton,
  DateNavigator,
  Appointments,
  AppointmentTooltip,
  Resources
} from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import LinearProgress from '@material-ui/core/LinearProgress';
import { roles } from '../../../../../utils/roles';
import { capitalizeFirstLetter } from '../../../../../utils/functions';
import { useTranslation } from 'react-i18next';

// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducers";
import withReducer from "../../../../../store/withReducer";
import * as Actions from "../store/actions";

const styles = ({ spacing, palette }) => ({
  addButton: {
    position: 'absolute',
    bottom: spacing(1) * 3,
    right: spacing(1) * 4,
  },
});
function endOfWeek(date) {

  var lastday = date.getDate() - (date.getDay() - 1) + 4;
  return new Date(date.setDate(lastday));

}
function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}
const date = new Date();
const ROLES = ['admin', 'mentor', 'refugee', 'manager'];
const resources = [{
  fieldName: 'role',
  title: 'Booked By',
  instances: [
    { id: ROLES[0], text: capitalizeFirstLetter(ROLES[0]), color: '#3f51b5' },
    { id: ROLES[1], text: capitalizeFirstLetter(ROLES[1]), color: '#f4865c' },
    { id: ROLES[2], text: capitalizeFirstLetter(ROLES[2]), color: '#ffbc4d' },
    { id: ROLES[3], text: capitalizeFirstLetter(ROLES[3]), color: '#72B0B4' },
  ],
}];
let events_data = [];
function Bc(props) {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [startDayHour, setStartDayHour] = React.useState(10);
  const [endDayHour, setEndDayHour] = React.useState(18);
  const [startDate, setStartDate] = React.useState(getMonday(date).toISOString());
  const [endDate, setEndDate] = React.useState(endOfWeek(date).toISOString());
  React.useEffect(() => {
    return () => {
      setData([]);
      events_data = [];
    };
  }, []);
  React.useEffect(() => {
    setData([]);
    events_data = [];
  }, [])
  React.useEffect(() => {
    if (startDate && endDate && props.data) {
      setData([]);
      events_data = [];
      dispatch(Actions.getAllAgendas(props.data.id, startDate, endDate));
    }
  }, [startDate, endDate, props.data])
  const agendas = useSelector(
    ({ Bcreducer }) =>
      Bcreducer.AllAgendasReducer.data
  );
  const loadinga = useSelector(
    ({ Bcreducer }) =>
      Bcreducer.AllAgendasReducer.isLoading
  );

  const errMsga = useSelector(
    ({ Bcreducer }) =>
      Bcreducer.AllAgendasReducer.errMsg
  );
  React.useEffect(() => {
    if (agendas && agendas.listAllAgendas && agendas.listAllAgendas.agendas !== null && agendas.listAllAgendas.agendas.length > 0) {
      for (let i = 0; i < agendas.listAllAgendas.agendas.length; i++) {
        const agenda = agendas.listAllAgendas.agendas[i];
        if (agenda.events !== null && agenda.events.length > 0) {
          for (let j = 0; j < agenda.events.length; j++) {
            const event = agenda.events[j];
            events_data.push({
              title: event.title,
              startDate: new Date(event.startDate),
              endDate: new Date(event.endDate),
              reminderBefore: event.reminderBefore,
              bookedWith: event.bookedWith,
              bookedBy: event.bookedBy,
              notes: event.notes,
              event_id: event._id,
              agenda_id: agenda._id,
              refugee_id: agenda.refugeeId,
              agendaDate: new Date(agenda.agendaDate),
              role: event.bookedBy.role,
              id: event._id

            })

          }
        }
      }
      setData(events_data);

    }
  }, [agendas])

  const currentDateChange = (currentDate) => {
    const dt = new Date(currentDate.toISOString());
    setStartDate(getMonday(dt).toISOString());
    setEndDate(endOfWeek(dt).toISOString());

  };
  const Appointment = ({
    children, style, ...restProps
  }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        // backgroundColor: '#3f51b5',
        borderRadius: '8px',
      }}
    >
      {children}
    </Appointments.Appointment>
  );
  const Content = ({
    children, style, appointmentData, classes, ...restProps
  }) => (
    <AppointmentTooltip.Content
      {...restProps}
      // style={{
      //   ...style,
      //   backgroundColor: '#8fcccd',
      //   borderRadius: '8px',
      // }}

      appointmentData={appointmentData}>

      <div style={{ width: "100%", paddingLeft: "25px", display: "inline-block" }}>
        <div style={{ float: "left" }}>
          <h4>{t("Booked By")}:</h4>
        </div>
        <div style={{ float: "left", margin: "5px" }}>
          <p>{appointmentData.bookedBy.role ? roles[appointmentData.bookedBy.role].title : "NA"}</p>
        </div>
      </div>
      <div style={{ width: "100%", paddingLeft: "25px", marginTop: "-35px" }}>
        <h4>{t("Booked With")}:</h4>
        <ul style={{ marginTop: "-20px", marginLeft: "65px" }}>
          {appointmentData &&
            appointmentData.bookedWith !== null &&
            appointmentData.bookedWith.length > 0 &&
            appointmentData.bookedWith.map((doc) => (
              <li>{doc.role ? roles[doc.role].title : "NA"}</li>
            ))}
        </ul>
      </div>
      <div style={{ width: "100%", paddingLeft: "25px", marginTop: "-25px" }}>
        <h4>{t("Notes")}:</h4>
        <ul style={{ marginTop: "-20px", marginLeft: "65px" }}>
          {appointmentData &&
            appointmentData.notes !== null &&
            appointmentData.notes.length > 0 &&
            appointmentData.notes.map((doc) => (
              <li>{doc.note}</li>
            ))}
        </ul>
      </div>


    </AppointmentTooltip.Content>
  );
  const ToolbarWithLoading = withStyles(styles, { name: 'Toolbar' })(
    ({ children, classes, ...restProps }) => (
      <div className={classes.toolbarRoot}>
        <Toolbar.Root {...restProps}>
          {children}
        </Toolbar.Root>
        <LinearProgress className={classes.progress} />
      </div>
    ),
  );


  return (
    <Grid container>
      <Paper>
        <Scheduler
          data={data}
          height={660}
          allDay={false}
        >
          <ViewState
            defaultCurrentDate={currentDate}
            onCurrentDateChange={currentDateChange}
          />
          <WeekView
            excludedDays={[0, 6]}
            startDayHour={startDayHour}
            endDayHour={endDayHour}
          />
          <Appointments
            appointmentComponent={Appointment}
          />
          <Resources
            data={resources}
          />
          <AppointmentTooltip
            contentComponent={Content}
          />
          <Toolbar
            {...loadinga ? { rootComponent: ToolbarWithLoading } : null}
          />
          <DateNavigator />
          <TodayButton />
        </Scheduler>


      </Paper>
    </Grid>
  );

}
export default withReducer("Bcreducer", reducer)(Bc);
