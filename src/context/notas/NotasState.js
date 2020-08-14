import React, { useReducer } from 'react';
import axios from 'axios';
import NotasContext from './notasContext';
import NotasReducer from './notasReducer';
import {
	GET_NOTAS,
	GET_CATEGORY_NOTES,
	SEARCH_NOTES,
	GET_NOTA,
	GET_MENU,
	GET_HOME_ITEMS,
	GET_ADS_NOTA,
	GET_ADS_CATEGORY,
	SET_LOADING,
} from '../types';

const NotasState = (props) => {
	const initialState = {
		notas: [],
		categoryNotes: [],
		nota: {},
		loading: false,
		count: 0,
		next: null,
		previous: null,
		currentPage: 1,
		main: [],
		second: [],
		mainHome: {},
		latests: [],
		categories: {},
		show_signed: false,
		enable_comments: false,
		related_notes: [],
		ads_notes: {},
		ads_category: {},
	};

	const [state, dispatch] = useReducer(NotasReducer, initialState);

	//set loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	// homeitems
	const getHomeItems = async () => {
		const res = await axios.get(`${process.env.REACT_APP_API_GONEWS}/home/`);
		dispatch({
			type: GET_HOME_ITEMS,
			payload: res.data,
		});
	};

	// get menu items
	const getMenu = async () => {
		const res = await axios.get(`${process.env.REACT_APP_API_GONEWS}/menu/`);

		dispatch({
			type: GET_MENU,
			payload: res.data,
		});
	};

	// get data
	const getData = async () => {
		const res = await axios.get(`${process.env.REACT_APP_API_GONEWS}/notes`);

		dispatch({
			type: GET_NOTAS,
			payload: res.data,
		});
	};

	//get category
	const getCategory = async (category) => {
		const res = await axios.get(
			`${process.env.REACT_APP_API_GONEWS}/notes/?category__slug=${category}`
		);

		dispatch({
			type: GET_CATEGORY_NOTES,
			payload: res.data,
		});
	};

	// search notes
	const searchNotes = async (text) => {
		initialState.loading = true;
		const res = await axios.get(
			`${process.env.REACT_APP_API_GONEWS}/notes/?search=${text}`
		);

		dispatch({
			type: SEARCH_NOTES,
			payload: res.data,
		});
	};

	// get Next Search Page
	const getNextPage = async (pageNumber = 2, text) => {
		let res = await axios.get(
			`${process.env.REACT_APP_API_GONEWS}/notes/?page=${pageNumber}&search=${text}`
		);

		window.scrollTo({ top: '200', behavior: 'smooth' });

		dispatch({
			type: SEARCH_NOTES,
			payload: res.data,
		});
	};

	// get Next Category Page
	const getNextPageCat = async (pageNumber = 2, category) => {
		let res = await axios.get(
			`${process.env.REACT_APP_API_GONEWS}/notes/?category=${category}&page=${pageNumber}`
		);

		window.scrollTo({ top: '600', behavior: 'smooth' });

		dispatch({
			type: GET_CATEGORY_NOTES,
			payload: res.data,
		});
	};

	// get individual note
	const getNote = async (text) => {
		const res = await axios.get(
			`${process.env.REACT_APP_API_GONEWS}/note/${text}`
		);

		dispatch({
			type: GET_NOTA,
			payload: res.data,
		});
	};

	//get ads nota individual
	const getAdsNote = async () => {
		const res = await axios.get(`${process.env.REACT_APP_API_GONEWS}/banner/`);

		dispatch({
			type: GET_ADS_NOTA,
			payload: res.data,
		});
	};

	//get ads by category
	const getAdsByCategory = async (category) => {
		setLoading();
		const res = await axios.get(
			`${process.env.REACT_APP_API_GONEWS}/banner/${category}`
		);

		dispatch({
			type: GET_ADS_CATEGORY,
			payload: res.data,
		});
	};

	return (
		<NotasContext.Provider
			value={{
				notas: state.notas,
				count: state.count,
				nota: state.nota,
				loading: state.loading,
				categoryNotes: state.categoryNotes,
				next: state.next,
				previous: state.previous,
				currentPage: state.currentPage,
				searchText: state.searchText,
				main: state.main,
				second: state.second,
				mainHome: state.mainHome,
				latests: state.latests,
				categories: state.categories,
				show_signed: state.show_signed,
				enable_comments: state.enable_comments,
				related_notes: state.related_notes,
				ads_notes: state.ads_notes,
				ads_category: state.ads_category,
				getHomeItems,
				getMenu,
				getData,
				getCategory,
				searchNotes,
				getNote,
				getNextPage,
				getNextPageCat,
				getAdsNote,
				getAdsByCategory,
			}}
		>
			{props.children}
		</NotasContext.Provider>
	);
};

export default NotasState;
