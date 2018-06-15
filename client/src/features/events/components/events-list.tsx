import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { eventsActions } from '../';
import { Event } from '../models';
import { Col, Card } from 'react-materialize';

type Props = {
	getAllEvents: () => any;
};

type State = {
    events: Event[];
};

class LoginForm extends React.Component<Props, State> {
	readonly state: Readonly<State> = {
		events: []
    };

    componentDidMount() {
        this.props.getAllEvents();
    }

	render() {
		const { events } = this.state;

		return (
            <Col m={6} s={12}>
                { events.map((e) =>
                    <Card key className="small"/>
                        {/* header={<CardTitle image={e}>{e}</CardTitle>}
                        actions={[<a href='#'>This is a Link</a>]}> */}
                    )
                }
            </Col>
		);
	}
}

const mapStateToProps = (state: RootState) => ({});

export default connect(mapStateToProps, {
	getAllEvents: () => eventsActions.getAllEvents()
})(LoginForm);
