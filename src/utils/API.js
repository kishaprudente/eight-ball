/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
	getAnswer: (query) => {
		return axios.get(`https://8ball.delegator.com/magic/JSON/${query}`);
	},
};
