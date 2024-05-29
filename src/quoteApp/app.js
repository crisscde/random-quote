import { DATA, COPY_TO_CLIPBOARD } from "./";
/**Create te quote element
 * @param {HTMLTitleElement} authorElement The <h1> element to put the name of the author
 * @param {HTMLQuoteElement} quoteContainer The <blockquote> element that contain the quote
 * @param {HTMLDivElement} tagsContainer The <div> element that contain the tags of the quote
 * @param {HTMLButtonElement} newQuoteBtn The <button> for create a new quoute
 * @param {HTMLButtonElement} copyQuoteBtn The <button> for copy the quote
 */
export const CREATE_QUOTE_ELEMENTS = async (
	authorElement,
	quoteContainer,
	tagsContainer,
	newQuoteBtn,
	copyQuoteBtn
) => {
	const QUOTE_ELEMENT = document.createElement("q");
	QUOTE_ELEMENT.classList = "quote--text";
	DATA(authorElement, QUOTE_ELEMENT, quoteContainer, tagsContainer);

	newQuoteBtn.addEventListener("click", () =>
		DATA(authorElement, QUOTE_ELEMENT, quoteContainer, tagsContainer)
	);

	copyQuoteBtn.addEventListener("click", () => COPY_TO_CLIPBOARD());
};
