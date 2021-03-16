import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        }
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    }

    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <Router>
                <div className="tabs">
                    <div className="tab-content">
                        <Switch>
                            {
                                children.map(
                                    (child) => {
                                        const path = "/"+child.props.label;
                                        console.log(path);
                                        return (
                                        <Route path={path} key={child.props.label}>
                                            {child.props.children}
                                        </Route>
                                        );
                                    }
                                )
                            }
                            <Route path="/Schedule">
                                {children[0].props.children}
                            </Route>
                        </Switch>
                    </div>
                    <ol className="tab-list">
                        {
                            children
                                .filter((child) => child.props.icon != null)
                                .map(
                                (child) => {
                                    const { label, icon } = child.props;

                                    return (
                                        <Tab
                                            activeTab={activeTab}
                                            key={label}
                                            label={label}
                                            onClick={onClickTabItem}
                                            href={label}
                                            icon={icon}
                                        />
                                    );
                                }
                            )

                        }
                    </ol>
                </div>
            </Router>
        );
    }
}

export default Tabs;