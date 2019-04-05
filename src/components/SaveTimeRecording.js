import React, { Component } from "react";
import { saveTime } from "../Modules/SaveTimesheet";
import TimeInputForm from "./TimeInputForm";
import { Form, Button, Grid } from "semantic-ui-react";

class SaveTimeRecording extends Component {
	state = {
		begin: "",
		end: "",
		saveTime: false
	};

	async postTimesheets() {
		let response = await saveTime(this.state.begin, this.state.end);
		this.setState({
			saveTime: true
		});
	}

	onChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		let saveButton;

		if (!this.state.saveTime) {
			saveButton = (
				<Button
					style={{ background: "#46b395" }}
					name="create"
					onClick={this.postTimesheets.bind(this)}
				>
					Create
				</Button>
			);
		} else {
			saveButton = <p>Your time was saved</p>;
		}
		return (
			<div id="time-block">
				<Grid textAlign="center" columns={4}>
					<Grid>
						<Form.Group
							width="full"
							style={{
								background: "#DDDD",
								paddingTop: "10%",
								paddingBottom: "10%",
								width: "1740px",
								position: "absolute"
							}}
						>
							<TimeInputForm
								style={{
									aligncontent: "left"
								}}
								changeValue={this.onChange.bind(this)}
								begin={this.state.begin}
								end={this.state.end}
							/>
							{saveButton}
						</Form.Group>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default SaveTimeRecording;