import React from 'react';
import {connect} from 'react-redux';
import {fetchCityListRequest, fetchPositionListRequest, getSearchListRequest} from "../../store/actions/maniaActions";

class AdSearch extends React.Component {
    state = {
        position: '',
        city: ''
    };

    componentDidMount() {
        this.props.fetchCityListRequest();
        this.props.fetchPositionListRequest();
        this.props.getSearchListRequest();
    }

    render() {
        const {position, city} = this.state;
        const {getSearchListRequest, cityList, positionList, datalist} = this.props;

        return <div className="container">
            <header>
                <select value={position}>
                    {cityList && cityList.map(data => <option value={data.id}>{data.name}</option>)}
                </select>
                <select value={city}>
                    {positionList && positionList.map(data => <option value={data.id}>{data.title}</option>)}
                </select>
                <button onClick={() => getSearchListRequest({position: position, city: city})}>
                    search
                </button>
            </header>
            <div>
                {datalist ? datalist.items.map(data => <div>
                    <div>{data.address}</div>
                    <img src={data.avatar} alt=""/>
                    <div>{data.business_title}</div>
                </div>) : <div>LOADING</div>}
            </div>
        </div>
    }
}

const mapStateToProps = state => ({
    cityList: state.mania.cityList,
    positionList: state.mania.positionList,
    datalist: state.mania.datalist
});

const mapDispatchToProps = {
    fetchCityListRequest,
    fetchPositionListRequest,
    getSearchListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdSearch);