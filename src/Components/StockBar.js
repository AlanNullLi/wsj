import React from 'react';
import './StockBar.css';
import axios from 'axios';

const key = process.env.REACT_APP_API_KEY

class StockBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    getStocks = () => {
        axios
            .get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en&x-rapidapi-key=' + key)
            .then(res => {
                console.log(res)
                this.setState({
                    data: res.body
                })
            })
    }

    //call is not working?
    //no permission?
    getMarket() {
        const axios = require("axios");

        axios({
            "method": "GET",
            "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key": key,
                "useQueryString": true
            }, "params": {
                "region": "US",
                "lang": "en"
            }
        })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    compondentDidMount() {
        // axios
        //     .get('https://financialmodelingprep.com/api/v3/company/profile/AAPL?apikey=' + key)
        //     .then(response => {
        //         console.log(response)
        //         this.setState = {
        //             data: response,
        //         }
        //     })
        // this.getStocks()
    }

    render() {
        // this.getStocks()
        this.getMarket()

        if (window.innerWidth < 641) {
            return (

                <div>
                    Stocks
                </div>

            )
        } else if (window.innerWidth < 981) {
            return (

                <div>
                    Stocks
                </div>

            )
        } else {
            return (

                <div>
                    Stocks
                </div>

            )
        }
    }
}

export default StockBar