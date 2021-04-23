import {
	GET_NOTAS,
	SEARCH_NOTES,
	GET_CATEGORY_NOTES,
	GET_NOTA,
	GET_MENU,
	GET_HOME_ITEMS,
	GET_ADS_NOTA,
	GET_ADS_CATEGORY,
	SET_LOADING,
	GET_INSTA,
} from '../types';

export default (state, action) => {
	const normalize_array_notes = (payload)=>{
		const note_groups = [];

		payload.forEach(element => {
			if(!note_groups[element.category_slug]){
				note_groups[element.category_slug] = [];
			}

			if(note_groups[element.category_slug].length < 4){
				note_groups[element.category_slug].push(element);
			}
			
		});

		return note_groups
	}
	switch (action.type) {
		case GET_HOME_ITEMS:
			return {
				...state,
				mainHome: action.payload.main,
				categories: normalize_array_notes(action.payload.categories),
				latests: action.payload.latests,
			};
		case GET_MENU:
			return {
				...state,
				main: action.payload.main,
				second: action.payload.second,
			};
		case GET_NOTAS:
			return {
				...state,
				notas: action.payload.results,
				count: action.payload.count,
				loading: false,
			};
		case SEARCH_NOTES:
			return {
				...state,
				notas: action.payload.results,
				count: action.payload.count,
				currentPage: action.payload.current,
				loading: false,
			};
		case GET_CATEGORY_NOTES:
			return {
				...state,
				categoryNotes: action.payload.results,
				count: action.payload.count,
				loading: false,
				currentPage: action.payload.current,
			};
		case GET_NOTA:
			return {
				...state,
				nota: action.payload,
				loading: false,
				show_signed: action.payload.show_signed,
				enable_comments: action.payload.enable_comments,
				related_notes: action.payload.related_notes,
			};
		case GET_ADS_NOTA:
			return {
				...state,
				ads_notes: action.payload,
				loading: false,
			};
		case GET_ADS_CATEGORY:
			return {
				...state,
				ads_category: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case GET_INSTA:
			return {
				...state,
				ig_data: action.payload,
				loading: false
			}
		default:
			return state;
	}
};
