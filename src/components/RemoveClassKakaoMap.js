import React, { Component } from 'react';//rcfc
import PropTypes from 'prop-types';

class ClassKakaoMap extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        const memberList = [
            { name: '안재권', email: 'googoo0501@test.com' },
            { name: '김일국', email: 'kimilguk@test.com' },
        ];
        return (
            <div>
                {memberList.map((member) => <div style={{border:'1px solid red'}} key={member.email}>{member.name}</div>)} 
            </div>
        );
    }
}

ClassKakaoMap.propTypes = {

};

export default ClassKakaoMap;