import React, {Component} from 'react';
type Props = {

};

class Home extends Component<Props> {
    /**
     * lifecycle
     */
    mounted = false;

    constructor(props) {
        super(props);
        if(wbp.dev){
            console.log(this);
        }
    }

    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        return <div className={'tz-container'}>
            Home
        </div>
    }

    /**
     *properties
     */

    /**
     *method
     */

}

export default Home;