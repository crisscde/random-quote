import { RENDER_QUOTE } from "./";

/**Fetch quote
 * Call the API and obtain a random quote
 * @returns {Promise<object[]>} The data of the quote
 */
const FETCH_QUOTE = async () => {
	const RES = await fetch(
		"https://api.quotable.io/quotes/random/?maxLength=80"
	);
	const QUOTE_DATA = await RES.json();
	return QUOTE_DATA[0];
};

/** Create the element with the data obtained from the API
 * @param {HTMLHeadingElement} authorElement 
 * @param {HTMLQuoteElement} quoteElement 
 * @param {HTMLDivElement} quoteContainer 
 * @param {HTMLDivElement} tagsContainer 
 */
export const DATA = async(
	authorElement,
	quoteElement,
	quoteContainer,
	tagsContainer
) => {
	await FETCH_QUOTE().then((data) =>
		RENDER_QUOTE(
			authorElement,
			quoteElement,
			quoteContainer,
			tagsContainer,
			data
		)
	);
};
