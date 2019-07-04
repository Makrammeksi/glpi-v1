import React, { Component } from "react";
import "./App.css";
import NavMenu from "./navBar";
import { Link, Route } from "react-router-dom";
import AddTicket from "./addTicket";
import TicketCard from "./ticketCard";
import AppContact from "./AppContact";
import AppReserve from "./AppReserve";
import LoginForm from "./LoginForm"
import axios from "axios";
import Home from './homeInterface';
import HomeTables from "./homeInterface";
import ContactCard from "./contactCard";
import AddContact from "./addContact";
import ReserveCard from "./reserveCard";
import AddReserve from "./addReserve";
import TicketByStatue from "./TicketByStatue";
import TicketByDate from "./TicketByDate";


// import TableContact from './tableContact';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // fullName: '',
      // email: '',
      // mobile: '',
      // city:'',
          // id: '',
      // item: '',
      // requester: '',
      // startdate: '',
      // duration:'',
      // Comments:'',
      contactlist: [],
      reservelist: [],
      ticketlist: [],
      requesterTicket: "",
      assignTo: "",
      priority: "",
      statue: "",
      date: "",
      dateLimit: "",
      title: "",
      discription: "",
      file: "",
      edit: false
    };
  }
  componentDidMount = () => {
    // this.getContacts();
    // this.getReserves();
    this.getTickets();
  };
  // getReserves = () => {
  //   axios.get('/reserves').then(res =>
  //     this.setState({
  //       reservelist: res.data
  //     })
  //   );
  // };
  // getContacts = () => {
  //   axios.get('/contacts').then(res =>
  //     this.setState({
  //       contactlist: res.data
  //     })
  //   );
  // };
  getTickets = () => {
    axios.get("/tickets").then(res =>
      this.setState({
        ticketlist: res.data
      })
    );
  };

  addTick = () => {
    this.setState({
      edit: false,
      requesterTicket: "",
      assignTo: "",
      priority: "",
      statue: "",
      date: "",
      dateLimit: "",
      title: "",
      discription: "",
      file: ""
    });
  };
 
  addTicket = () => {
    axios
      .post("/add-ticket", {
        requesterTicket: this.state.requesterTicket,
        assignTo: this.state.assignTo,
        priority: this.state.priority,
        statue: this.state.statue,
        date: this.state.date,
        dateLimit: this.state.dateLimit,
        title: this.state.title,
        discription: this.state.discription,
        file: this.state.file
      })
      .then(this.getTickets);
    this.addTick();
  };
  editTicket = () => {
    axios
      .put("/modify-ticket/" + this.state.id, {
        requesterTicket: this.state.requesterTicket,
        assignTo: this.state.assignTo,
        priority: this.state.priority,
        statue: this.state.statue,
        date: this.state.date,
        dateLimit: this.state.dateLimit,
        title: this.state.title,
        discription: this.state.discription,
        file: this.state.file
      })
      .then(this.getTickets);
    this.addTick();
  };


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getTicket = (ticket, edit) => {
    this.setState({
      id: ticket._id,
      requesterTicket: ticket.requesterTicket,
      assignTo: ticket.assignTo,
      priority: ticket.priority,
      statue: ticket.statue,
      date: ticket.date,
      dateLimit: ticket.dateLimit,
      title: ticket.title,
      discription: ticket.discription,
      file: ticket.file,
      edit
    });
  };

  render() {
    return (
      <div className="App">
        {/* <LoginForm/> */}
        <Home/>
        <TicketByStatue/>
        <TicketByDate/>
        <NavMenu />
        <AppReserve />
        <AppContact />
        <Route
          path="/ticket-list"
          render={() => (
            <div className="ticket-list">



 <table className="tableReservations">
      <thead>
      <tr>         
        <th className="titleTableTicket" colSpan="9" style={{fontSize: '20px'}}> Tickets</th>
      </tr>
      <tr className="ticketTable">
        <th>Requester</th>
        <th>Assign To</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Date</th>
        <th>Date Limit</th>
        <th>Title</th>
        <th>Discription</th>
        <th>file</th>
      </tr>
    </thead>  
    <tbody>
            {this.state.ticketlist.map(el =>  
              <tr>
              <td>{el.requesterTicket}</td>
              <td>{el.assignTo}</td>
              <td> {el.priority}</td>
              <td>{el.statue}</td>
              <td>{el.date}</td>
              <td>{el.dateLimit}</td>
              <td>{el.title}</td>
              <td>{el.discription}</td>
              <td>{el.file}</td>
              </tr> 
 )}         
    </tbody>
</table> 



              {/* <tr>
                <th className="titleTableTicket" colSpan="6">
                  {" "}
                  Ticket List
                </th>
              </tr>
              <tr className="ticketTable">
                <th>Requester</th>
                <th>Assign To</th>
                <th>Priority</th>
                <th>Date</th>
                <th>Title</th>
                <th>Discription</th>
              </tr>
              {this.state.ticketlist.map(el => (
                <TicketCard ticket={el} getTicket={this.getTicket} />
              ))} */}
            </div>
          )}
        />
        {/* <TicketCard getTicket={this.getTicket} /> */}
        {/* <Route
          path="/(new-ticket|edit-ticket)/"
          render={() => (
            <AddTicket
              handleChange={this.handleChange}
              action={this.state.edit ? this.editTicket : this.addTicket}
              edit={this.state.edit}
              ticket={this.state}
            />
          )}
        /> */}
      </div>
    );
  }
}

export default App;

{
  /* <div className="bouttonCreate">
        <HomeTables />
          <Link to="/contact-list">
            <button className="button" onClick={this.add}>
              Contact List
            </button>
          </Link>
          <Link to="/reserve-list">
            <button className="button" onClick={this.addResv}>
              Reserve List
            </button>
          </Link>
          <Link to="/new-contact">
            <button className="button" onClick={this.add}>
              Add Contact
            </button>
          </Link>
          <Link to="/new-reserve">
            <button className="button" onClick={this.addResv}>
              Add Reserve
            </button>
          </Link>
        </div> */
}

{
  /* <Route
          path="/(new-reserve|edit-resere)/"
          render={() => (
            <AddReserve
              handleChange={this.handleChange}
              action={this.state.edit ? this.editContact : this.addContact}
              edit={this.state.edit}
              contact={this.state}
            />
          )}
        /> */
}

{
  /* <Route
          path="/(new-contact|edit-contact)/"
          render={() => (
            <AddContact
              handleChange={this.handleChange}
              action={this.state.edit ? this.editContact : this.addContact}
              edit={this.state.edit}
              contact={this.state}
            />
          )}
        /> */
}
{
  /* <Route
          path="/contact-list"
          render={() => (
            <div className="contact-list">
              {this.state.contactlist.map(el => (
                <ContactCard contact={el} getPerson={this.getPerson} />
              ))}
            </div>
          )}
        /> */
}
{
  /* <Route
          path="/(new-contact|edit-contact)/"
          render={() => (
            <AddContact
              handleChange={this.handleChange}
              action={this.state.edit ? this.editContact : this.addContact}
              edit={this.state.edit}
              contact={this.state}
            />
          )}
        /> */
}

{
  /* <Route
          path="/reserve-list"
          render={() => (
            <div className="reserve-list">
      
              <table className="tableTickets">
        <thead>
        <tr>         
          <th className="titleTableTicket" colSpan="5"> Item to do</th>
        </tr>
        <tr className="ticketTable">
          <th>Item</th>
          <th>Requester</th>
          <th>Start Date</th>
          <th>Duration</th>
          <th>Description</th>

        </tr>
      </thead>  
      <tbody className="Tickets">
              {this.state.reservelist.map(el =>  (

                <ReserveCard  reserve={el} getReserve={this.getReserve} />
            ) )}  
            
      </tbody>
  </table>
            </div>
          )}
        /> */
}

{
  /* <Route
          path="/(new-reserve|edit-reserve)/"
          render={() => (
            <AddReserve
              handleChange={this.handleChange}
              action={this.state.edit ? this.editReserve : this.addReserve}
              edit={this.state.edit}
              reserve={this.state}
            />
          )}
        /> */
}
