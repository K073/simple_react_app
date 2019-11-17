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
        this.props.getSearchListRequest({});
    }

    selectChangeHandler = name => e => {
      this.setState({
          [name]: e.target.value
      })
    };

    render() {
        const {position, city} = this.state;
        const {getSearchListRequest, cityList, positionList, datalist} = this.props;

        return <div className="container">
            <header>
                <select onChange={this.selectChangeHandler("city")} value={city}>
                    <option value="">select city</option>
                    {cityList && cityList.map(data => <option value={data.id}>{data.name}</option>)}
                </select>
                <select onChange={this.selectChangeHandler("position")} value={position}>
                    <option value="">select position</option>
                    {positionList && positionList.map(data => <option value={data.id}>{data.title}</option>)}
                </select>
                <button onClick={() => getSearchListRequest({position_id: position, city_id: city})}>
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