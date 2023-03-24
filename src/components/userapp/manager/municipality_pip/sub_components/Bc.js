import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Toolbar,
  WeekView,
  TodayButton,
  DateNavigator,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  Resources
} from '@devexpress/dx-react-scheduler-material-ui';
import { connectProps } from '@devexpress/dx-react-core';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AccessAlarm from '@material-ui/icons/AccessAlarm';
import Grid from "@material-ui/core/Grid";
import Notes from '@material-ui/icons/Notes';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from "@material-ui/core/styles";
import Close from '@material-ui/icons/Close';
import CalendarToday from '@material-ui/icons/CalendarToday';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import Create from '@material-ui/icons/Create';
import Alert from "@material-ui/lab/Alert";
import jwt from "jsonwebtoken";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { useTranslation } from 'react-i18next';
import { roles } from '../../../../../utils/roles';
import { capitalizeFirstLetter } from '../../../../../utils/functions';
// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducers";
import withReducer from "../../../../../store/withReducer";
import * as Actions from "../store/actions";

const containerStyles = makeStyles(theme => ({
  container: {
    width: theme.spacing(68),
    padding: 0,
    paddingBottom: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(2),
    paddingTop: 0,
  },
  header: {
    overflow: 'hidden',
    paddingTop: theme.spacing(0.5),
  },
  closeButton: {
    float: 'right',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 2),
    paddingBottom: "10px"
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  picker: {
    marginRight: theme.spacing(2),
    '&:last-child': {
      marginRight: 0,
    },
    width: '50%',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 0),
  },
  reminderWrapper: {
    display: 'flex',
    padding: theme.spacing(1, 0),
  },
  wrapperCheck: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 0),
  },
  icon: {
    margin: theme.spacing(2, 0),
    marginRight: theme.spacing(2),
  },
  textField: {
    width: '100%',
  },
  reminderTextField: {
    width: '22%',
  },
}));


function AppointmentFormContainerBasic(props) {
  const classes = containerStyles();
  const [t] = useTranslation();
  const [appointmentChanges, setAppointmentChanges] = React.useState({});
  const getAppointmentData = () => {
    const { appointmentData } = props;
    return appointmentData;
  };
  const getAppointmentChanges = () => {
    const appointmentChangest = appointmentChanges;
    return appointmentChangest;
  };

  function changeAppointment({ field, changes }) {
    const nextChanges = {
      ...getAppointmentChanges(),
      [field]: changes,
    };
    setAppointmentChanges(nextChanges);
  }

  function commitAppointment(type) {
    const { commitChanges } = props;
    const appointment = {
      ...getAppointmentData(),
      ...getAppointmentChanges(),
    };
    if (type === 'deleted') {
      commitChanges({ [type]: appointment.event_id });
    } else if (type === 'changed') {
      commitChanges({ [type]: { ["data"]: appointment } });
    } else {
      commitChanges({ [type]: appointment });
    }
    setAppointmentChanges({});
  }
  const {
    visible,
    visibleChange,
    appointmentData,
    cancelAppointment,
    target,
    onHide,
  } = props;
  const appointmentChangess = appointmentChanges;

  const displayAppointmentData = {
    ...appointmentData,
    ...appointmentChangess,
  };
  const isNewAppointment = appointmentData.event_id === undefined;
  const applyChanges = isNewAppointment
    ? () => commitAppointment('added')
    : () => commitAppointment('changed');
  let note;
  if (displayAppointmentData.notes) {
    for (let i = 0; i < displayAppointmentData.notes.length; i++) {
      const element = displayAppointmentData.notes[i];
      if (element.userId === jwt.decode(localStorage.jwtToken).id) {
        note = element.note;
      }
    }

  }


  const textEditorProps = field => ({
    variant: 'outlined',
    onChange: ({ target: change }) => {
      var reg = /^0+/gi;
      if (field === "reminderBefore" && change.value.match(reg)) {
        changeAppointment({
          field: [field], changes: '',
        })
      }
      else {
        changeAppointment({
          field: [field], changes: change.value,
        })
      }
    },
    value: displayAppointmentData[field] || '',
    // label: field[0].toUpperCase() + field.slice(1),
    className: field === "reminderBefore" ? classes.reminderTextField : classes.textField,
  });
  const checkEditorProps = field => ({
    onChange: (event) => {
      changeAppointment({
        field: [field], changes: event.target.checked,
      })
    },
    checked: displayAppointmentData[field] || false,
    name: field,
    color: "primary"
  });
  const textEditorNotesProps = field => ({
    variant: 'outlined',
    onChange: ({ target: change }) => {
      changeAppointment({
        field: [field], changes: change.value,
      })
    },
    value: note ? note : Array.isArray(displayAppointmentData[field]) ? "" : displayAppointmentData[field],
    // label: field[0].toUpperCase() + field.slice(1),
    className: classes.textField,
  });

  const pickerEditorProps = field => ({
    className: classes.picker,
    ampm: false,
    value: displayAppointmentData[field],
    onChange: date => changeAppointment({
      field: [field], changes: date ? date.toDate() : new Date(displayAppointmentData[field]),
    }),
    inputVariant: 'outlined',
    format: 'DD/MM/YYYY HH:mm',
    onError: () => null,
  });

  const cancelChanges = () => {
    setAppointmentChanges({});
    visibleChange();
    cancelAppointment();
  };
  return (
    <AppointmentForm.Overlay
      visible={visible}
      target={target}
      fullSize
      onHide={onHide}
    >
      <div>
        <div className={classes.header}>
          <IconButton
            className={classes.closeButton}
            onClick={() => cancelChanges()}
          >
            <Close color="action" />
          </IconButton>
        </div>
        <div className={classes.content}>
          <div className={classes.wrapper}>
            <Create className={classes.icon} color="action" />
            <TextField
              {...textEditorProps('title')}
              label={t("Title")}
            />
          </div>
          <div className={classes.wrapper}>
            <CalendarToday className={classes.icon} color="action" />
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <KeyboardDateTimePicker
                label={t("Start Date")}
                {...pickerEditorProps('startDate')}
              />
              <KeyboardDateTimePicker
                label={t("End Date")}
                {...pickerEditorProps('endDate')}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className={classes.reminderWrapper}>
            <AccessAlarm className={classes.icon} color="action" />
            <TextField
              {...textEditorProps('reminderBefore')}
              type="number"
              label={t("Reminder Before in Minutes")}
              type="number"
              onKeyDown={(e) => ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault()}
            />
          </div>
          <div className={classes.wrapper}>
            <Notes className={classes.icon} color="action" />
            <TextField
              {...textEditorNotesProps('notes')}
              label={t("Notes")}
              multiline
              rows="6"
            />
          </div>
          {props.refugeeData && props.refugeeData.mentor && (
            <div className={classes.wrapperCheck}>
              <SupervisorAccountIcon className={classes.icon} color="action" />
              <FormControlLabel
                control={
                  <Checkbox
                    {...checkEditorProps('mentor')}
                  />
                }
                label={t("Mentor")}
                className={classes.textField}

              />
            </div>
          )}
          {props.refugeeData && props.refugeeData.suppliers && props.refugeeData.suppliers.school && (
            <div className={classes.wrapperCheck}>
              <SchoolIcon className={classes.icon} color="action" />
              <FormControlLabel
                control={
                  <Checkbox
                    {...checkEditorProps('school')}
                  />
                }
                label={t("School")}
                className={classes.textField}

              />
            </div>
          )}
          {props.refugeeData && props.refugeeData.suppliers && props.refugeeData.suppliers.work && (
            <div className={classes.wrapperCheck}>
              <WorkIcon className={classes.icon} color="action" />
              <FormControlLabel
                control={
                  <Checkbox
                    {...checkEditorProps('work')}
                  />
                }
                label={t("Work")}
                className={classes.textField}
              />
            </div>
          )}
        </div>
        <div className={classes.buttonGroup}>
          {!isNewAppointment && (
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              onClick={() => {
                visibleChange();
                commitAppointment('deleted');
              }}
            >
              {t("Delete")}
            </Button>
          )}
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={() => {
              visibleChange();
              applyChanges();
            }}
          >
            {isNewAppointment ? t('Create') : t('Update')}
          </Button>
        </div>
      </div>
    </AppointmentForm.Overlay>
  );

}
const AppointmentFormContainer = (AppointmentFormContainerBasic);
// const AppointmentFormContainer = withStyles(containerStyles, { name: 'AppointmentFormContainer' })(AppointmentFormContainerBasic);

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
let added_data;
let edited_data;
function Bc(props) {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [confirmationVisible, setConfirmationVisible] = React.useState(false);
  const [editingFormVisible, setEditingFormVisible] = React.useState(false);
  const [deletedAppointmentId, setDeletedAppointmentIdd] = React.useState(undefined);
  const [deletedAgendaId, setDeletedAgendaId] = React.useState(undefined);
  const [editingAppointment, setEditingAppointment] = React.useState(undefined);
  const [previousAppointment, setPreviousAppointment] = React.useState(undefined);
  const [addedAppointment, setAddedAppointment] = React.useState({});
  const [startDayHour, setStartDayHour] = React.useState(10);
  const [endDayHour, setEndDayHour] = React.useState(18);
  const [isNewAppointment, setIsNewAppointment] = React.useState(false);
  const [isAdded, setIsAdded] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);
  const [isEdited, setIsEdited] = React.useState(false);
  const [startDate, setStartDate] = React.useState(getMonday(date).toISOString());
  const [endDate, setEndDate] = React.useState(endOfWeek(date).toISOString());
  React.useEffect(() => {
    return () => {
      setData([]);
      events_data = [];
      setAddedAppointment({});
      setIsAdded(false);
      dispatch(Actions.resetaddNewEvent(true));
      dispatch(Actions.resetDeleteEvent(true));
      dispatch(Actions.resetEditEvent(true));
    };
  }, []);
  React.useEffect(() => {
    setData([]);
    events_data = [];
    setAddedAppointment({});
    setIsAdded(false);
    dispatch(Actions.resetaddNewEvent(true));
    dispatch(Actions.resetDeleteEvent(true));
    dispatch(Actions.resetEditEvent(true));
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
            let mentor = false;
            let school = false;
            let work = false;
            if (event.bookedWith !== null && event.bookedWith.length > 0) {
              for (let z = 0; z < event.bookedWith.length; z++) {
                let bookedWith = event.bookedWith[z];
                if (bookedWith.role === "mentor") {
                  mentor = true
                }
                if (bookedWith.role === "school_supplier") {
                  school = true
                }
                if (bookedWith.role === "work_supplier") {
                  work = true
                }
              }
            }
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
              id: event._id,
              mentor: mentor,
              school: school,
              work: work

            })

          }
        }
      }
      setData(events_data);

    }
  }, [agendas])
  const add_confirmation = useSelector(
    ({ Bcreducer }) => Bcreducer.AddNewEventReducer
  );

  const edit_confirmation = useSelector(
    ({ Bcreducer }) => Bcreducer.editEventReducer
  );

  const delete_confirmation = useSelector(
    ({ Bcreducer }) => Bcreducer.deleteEventReducer
  );

  const appointmentForm = connectProps(AppointmentFormContainer, () => {
    const editingFormVisiblee = editingFormVisible;
    const editingAppointmentt = editingAppointment;
    const addedAppointmentt = addedAppointment;
    const isNewAppointmentt = isNewAppointment;
    const previousAppointmentt = previousAppointment;
    const currentAppointment = events_data
      .filter(appointment => editingAppointmentt && appointment.event_id === editingAppointmentt.event_id)[0]
      || addedAppointmentt;
    const cancelAppointment = () => {
      if (isNewAppointmentt) {
        setEditingAppointment(previousAppointmentt);
        setIsNewAppointment(false);
      }
    };

    return {
      visible: editingFormVisiblee,
      appointmentData: currentAppointment,
      commitChanges: commitChanges,
      visibleChange: toggleEditingFormVisibility,
      onEditingAppointmentChange: onEditingAppointmentChange,
      cancelAppointment,
      refugeeData: props.data
    };
  });
  React.useEffect(() => {
    appointmentForm.update();
  }, [appointmentForm])

  React.useEffect(() => {
    if (isAdded) {
      let bookedWith = [];
      if (added_data.mentor) {
        bookedWith.push({
          userId: props.data.mentor._id,
          role: "mentor"
        })
      }
      if (added_data.school) {
        bookedWith.push({
          userId: props.data.suppliers.school._id,
          role: "school_supplier"
        })
      }
      if (added_data.work) {
        bookedWith.push({
          userId: props.data.suppliers.work._id,
          role: "work_supplier"
        })
      }
      if (!added_data.mentor && !added_data.school && !added_data.work) {
        bookedWith.push({
          userId: props.data.mentor._id,
          role: "mentor"
        })
      }
      let values = {
        refugeeId: props.data.id,
        agendaDate: (new Date(added_data.startDate)).toISOString(),
        title: added_data.title || "untitled",
        startDate: (new Date(added_data.startDate)).toISOString(),
        endDate: (new Date(added_data.endDate)).toISOString(),
        reminderBefore: added_data.reminderBefore || 0,
        note: added_data.notes,
        bookedWith: bookedWith
      };
      dispatch(Actions.addNewEvent(values));

    }
  }, [isAdded])
  React.useEffect(() => {
    if (isEdited) {
      let bookedWith = [];
      if (edited_data.mentor) {
        bookedWith.push({
          userId: props.data.mentor._id,
          role: "mentor"
        })
      }
      if (edited_data.school) {
        bookedWith.push({
          userId: props.data.suppliers.school._id,
          role: "school_supplier"
        })
      }
      if (edited_data.work) {
        bookedWith.push({
          userId: props.data.suppliers.work._id,
          role: "work_supplier"
        })
      }
      if (!edited_data.mentor && !edited_data.school && !edited_data.work) {
        bookedWith.push({
          userId: props.data.mentor._id,
          role: "mentor"
        })
      }
      if (Array.isArray(edited_data.notes)) {
        let note;
        for (let i = 0; i < edited_data.notes.length; i++) {
          const element = edited_data.notes[i];
          if (element.userId === jwt.decode(localStorage.jwtToken).id) {
            note = element.note;
          }

        }
        let values = {
          agendaId: edited_data.agenda_id,
          eventId: edited_data.event_id,
          refugeeId: props.data.id,
          agendaDate: (new Date(edited_data.startDate)).toISOString(),
          title: edited_data.title || "untitled",
          startDate: (new Date(edited_data.startDate)).toISOString(),
          endDate: (new Date(edited_data.endDate)).toISOString(),
          reminderBefore: edited_data.reminderBefore || 0,
          note: note,
          bookedWith: bookedWith
        };
        dispatch(Actions.editEvent(values));
      }
      else {
        let values = {
          agendaId: edited_data.agenda_id,
          eventId: edited_data.event_id,
          refugeeId: props.data.id,
          agendaDate: (new Date(edited_data.startDate)).toISOString(),
          title: edited_data.title || "untitled",
          startDate: (new Date(edited_data.startDate)).toISOString(),
          endDate: (new Date(edited_data.endDate)).toISOString(),
          reminderBefore: edited_data.reminderBefore || 0,
          note: edited_data.notes,
          bookedWith: bookedWith
        };
        dispatch(Actions.editEvent(values));
      }


    }
  }, [isEdited])
  React.useEffect(() => {
    if (add_confirmation.data.data) {
      setData([]);
      events_data = [];
      setAddedAppointment({});
      setIsAdded(false);
      dispatch(Actions.resetaddNewEvent(true));
      dispatch(Actions.getAllAgendas(props.data.id, startDate, endDate));
      alert("successfully added Event");
    }
  }, [add_confirmation, dispatch, startDate, endDate]);
  React.useEffect(() => {
    if (edit_confirmation.data.data) {
      setData([]);
      events_data = [];
      setAddedAppointment({});
      setIsEdited(false);
      dispatch(Actions.resetEditEvent(true));
      dispatch(Actions.getAllAgendas(props.data.id, startDate, endDate));
      alert("successfully Updated Event");
    }
  }, [edit_confirmation, dispatch, startDate, endDate]);
  React.useEffect(() => {
    if (edit_confirmation.errMsg) {
      setIsEdited(false);
    }
  }, [add_confirmation])
  React.useEffect(() => {
    if (add_confirmation.errMsg) {
      setIsAdded(false);
    }
  }, [add_confirmation])

  React.useEffect(() => {
    if (isDeleted && deletedAppointmentId && deletedAgendaId) {
      dispatch(Actions.deleteEvent(deletedAgendaId, deletedAppointmentId));

    }
  }, [isDeleted, deletedAppointmentId, deletedAgendaId])
  React.useEffect(() => {
    if (delete_confirmation.data.data) {
      setData([]);
      events_data = [];
      setAddedAppointment({});
      setIsDeleted(false);
      dispatch(Actions.resetDeleteEvent(true));
      dispatch(Actions.getAllAgendas(props.data.id, startDate, endDate));
      setDeletedAppointmentIdd(null);
      setDeletedAgendaId(null);
      toggleConfirmationVisible();
      alert("successfully Deleted Event");
    }
  }, [delete_confirmation, dispatch]);
  React.useEffect(() => {
    if (delete_confirmation.errMsg) {
      setIsDeleted(false);
      setDeletedAppointmentIdd(null);
      setDeletedAgendaId(null);
      toggleConfirmationVisible();
    }
  }, [delete_confirmation])

  const currentDateChange = (currentDate) => {
    const dt = new Date(currentDate.toISOString());
    setStartDate(getMonday(dt).toISOString());
    setEndDate(endOfWeek(dt).toISOString());

  };
  function onEditingAppointmentChange(editingAppointment) {
    setEditingAppointment(editingAppointment);
  }

  function onAddedAppointmentChange(addedAppointment) {
    setAddedAppointment(addedAppointment);
    const editingAppointmenttt = editingAppointment;
    if (editingAppointmenttt !== undefined) {
      setPreviousAppointment(editingAppointmenttt);
    }
    setEditingAppointment(undefined);
    setIsNewAppointment(true);
  }

  function setDeletedAppointmentId(id) {
    setDeletedAppointmentIdd(id);
  }

  function toggleEditingFormVisibility() {
    const editingFormVisiblee = editingFormVisible;
    setEditingFormVisible(!editingFormVisiblee);
  }

  function toggleConfirmationVisible() {
    const confirmationVisiblee = confirmationVisible;
    setConfirmationVisible(!confirmationVisiblee);
  }

  function commitDeletedAppointment() {
    const deletedAppointmentIdg = deletedAppointmentId
    const del_data = data.filter(appointment => appointment.id === deletedAppointmentIdg);
    setDeletedAgendaId(del_data[0].agenda_id);
    setIsDeleted(true);
  }

  function commitChanges({ added, changed, deleted }) {
    if (added) {
      setIsAdded(true);
      added_data = added;
    }
    if (deleted !== undefined) {
      setDeletedAppointmentId(deleted);
      toggleConfirmationVisible();
    }
    if (changed) {
      setIsEdited(true);
      edited_data = changed.data;

    }

  }
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
      <div style={{ width: "100%", paddingLeft: "25px" }}>
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
        <h4>{t("Notes")}    :</h4>
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
      {add_confirmation.errMsg && (
        <Grid item sm={12} xs={12}>
          <Alert severity="error">{t(add_confirmation.errMsg)}</Alert>
        </Grid>
      )}
      {add_confirmation.isLoading && (
        <Grid item sm={12} xs={12}>
          Loading.......
        </Grid>
      )}
      {delete_confirmation.errMsg && (
        <Grid item sm={12} xs={12}>
          <Alert severity="error">{t(delete_confirmation.errMsg)}</Alert>
        </Grid>
      )}
      {delete_confirmation.isLoading && (
        <Grid item sm={12} xs={12}>
          Loading.......
        </Grid>
      )}
      {edit_confirmation.errMsg && (
        <Grid item sm={12} xs={12}>
          <Alert severity="error">{t(edit_confirmation.errMsg)}</Alert>
        </Grid>
      )}
      {edit_confirmation.isLoading && (
        <Grid item sm={12} xs={12}>
          Loading.......
        </Grid>
      )}

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
          <EditingState
            onCommitChanges={commitChanges}
            onEditingAppointmentChange={onEditingAppointmentChange}
            onAddedAppointmentChange={onAddedAppointmentChange}
          />
          <WeekView
            excludedDays={[0, 6]}
            startDayHour={startDayHour}
            endDayHour={endDayHour}
          />
          <EditRecurrenceMenu />
          <Appointments
            appointmentComponent={Appointment}
          />
          <Resources
            data={resources}
          />
          <AppointmentTooltip
            showOpenButton={(props.data && (props.data.mentor || (props.data.suppliers && (props.data.suppliers.school || props.data.suppliers.work)))) ? true : false}
            showCloseButton
            showDeleteButton
            contentComponent={Content}
          />
          <Toolbar
            {...loadinga ? { rootComponent: ToolbarWithLoading } : null}
          />
          <DateNavigator />
          <TodayButton />
          {props.data && (props.data.mentor || (props.data.suppliers && (props.data.suppliers.school || props.data.suppliers.work))) && (
            <AppointmentForm
              overlayComponent={appointmentForm}
              visible={editingFormVisible}
              onVisibilityChange={toggleEditingFormVisibility}
            />
          )}
        </Scheduler>

        <Dialog
          open={confirmationVisible}
        >
          <DialogTitle>
            {t("Delete Appointment")}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {t("Are you sure you want to delete this appointment")}?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => toggleConfirmationVisible()} color="primary" variant="outlined">
              {t("Cancel")}
            </Button>
            <Button onClick={() => commitDeletedAppointment()} color="secondary" variant="outlined">
              {t("Delete")}
            </Button>
          </DialogActions>
        </Dialog>


      </Paper>
    </Grid>
  );

}
export default withReducer("Bcreducer", reducer)(Bc);
